const Service = require('../models/Service');

// @desc    Get all services
// @route   GET /api/services
// @access  Public
exports.getAllServices = async (req, res) => {
  try {
    const { category, provider } = req.query;
    let query = { isActive: true };

    if (category) query.category = category;
    if (provider) query.provider = provider;

    const services = await Service.find(query).populate('provider', 'name email phone');

    res.status(200).json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single service
// @route   GET /api/services/:id
// @access  Public
exports.getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate('provider', 'name email phone');

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a service (provider/admin only)
// @route   POST /api/services
// @access  Private
exports.createService = async (req, res) => {
  try {
    const { name, description, duration, price, category } = req.body;

    if (!name || !description || !duration || !price) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const service = await Service.create({
      name,
      description,
      duration,
      price,
      category: category || 'other',
      provider: req.user.id,
    });

    res.status(201).json({
      success: true,
      service,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a service
// @route   PUT /api/services/:id
// @access  Private
exports.updateService = async (req, res) => {
  try {
    let service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    if (service.provider.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this service' });
    }

    service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      service,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Private
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    if (service.provider.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this service' });
    }

    await Service.findByIdAndRemove(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Service deleted',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
