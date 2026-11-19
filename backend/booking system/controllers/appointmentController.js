const Appointment = require('../models/Appointment');
const TimeSlot = require('../models/TimeSlot');
const Service = require('../models/Service');

// @desc    Get all appointments
// @route   GET /api/appointments
// @access  Private
exports.getAllAppointments = async (req, res) => {
  try {
    let query = {};

    if (req.user.role === 'customer') {
      query.customer = req.user.id;
    } else if (req.user.role === 'provider') {
      query.provider = req.user.id;
    }

    const appointments = await Appointment.find(query)
      .populate('service')
      .populate('customer', 'name email phone')
      .populate('provider', 'name email phone')
      .sort({ startTime: -1 });

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single appointment
// @route   GET /api/appointments/:id
// @access  Private
exports.getAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate('service')
      .populate('customer', 'name email phone')
      .populate('provider', 'name email phone');

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    if (
      appointment.customer._id.toString() !== req.user.id &&
      appointment.provider._id.toString() !== req.user.id &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({ message: 'Not authorized to view this appointment' });
    }

    res.status(200).json({
      success: true,
      appointment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Book an appointment
// @route   POST /api/appointments
// @access  Private
exports.bookAppointment = async (req, res) => {
  try {
    const { serviceId, providerId, startTime } = req.body;

    if (!serviceId || !providerId || !startTime) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    const endTime = new Date(new Date(startTime).getTime() + service.duration * 60000);

    const existingAppointment = await Appointment.findOne({
      provider: providerId,
      startTime: { $lt: endTime },
      endTime: { $gt: startTime },
      status: { $in: ['pending', 'confirmed'] },
    });

    if (existingAppointment) {
      return res.status(400).json({ message: 'Time slot already booked' });
    }

    const appointment = await Appointment.create({
      service: serviceId,
      customer: req.user.id,
      provider: providerId,
      startTime,
      endTime,
      status: 'pending',
    });

    await appointment.populate('service').populate('customer').populate('provider');

    res.status(201).json({
      success: true,
      appointment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update appointment status
// @route   PUT /api/appointments/:id
// @access  Private
exports.updateAppointment = async (req, res) => {
  try {
    const { status, notes } = req.body;

    let appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    if (appointment.provider.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this appointment' });
    }

    if (status) appointment.status = status;
    if (notes) appointment.notes = notes;

    await appointment.save();
    await appointment.populate('service').populate('customer').populate('provider');

    res.status(200).json({
      success: true,
      appointment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Cancel appointment
// @route   DELETE /api/appointments/:id
// @access  Private
exports.cancelAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    if (
      appointment.customer.toString() !== req.user.id &&
      appointment.provider.toString() !== req.user.id &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({ message: 'Not authorized to cancel this appointment' });
    }

    appointment.status = 'cancelled';
    await appointment.save();

    res.status(200).json({
      success: true,
      message: 'Appointment cancelled',
      appointment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get available slots
// @route   GET /api/appointments/available-slots/:serviceId/:providerId
// @access  Public
exports.getAvailableSlots = async (req, res) => {
  try {
    const { serviceId, providerId } = req.params;
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ message: 'Please provide a date' });
    }

    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    const startDate = new Date(date);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 1);

    const bookedAppointments = await Appointment.find({
      provider: providerId,
      service: serviceId,
      startTime: { $gte: startDate, $lt: endDate },
      status: { $in: ['pending', 'confirmed'] },
    });

    const slots = [];
    const workStartHour = 9;
    const workEndHour = 17;

    for (let hour = workStartHour; hour < workEndHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const slotStart = new Date(startDate);
        slotStart.setHours(hour, minute);

        const slotEnd = new Date(slotStart.getTime() + service.duration * 60000);

        const isBooked = bookedAppointments.some(
          (apt) => apt.startTime <= slotStart && apt.endTime > slotStart
        );

        if (!isBooked && slotEnd.getHours() < workEndHour) {
          slots.push({
            startTime: slotStart,
            endTime: slotEnd,
            available: true,
          });
        }
      }
    }

    res.status(200).json({
      success: true,
      count: slots.length,
      slots,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
