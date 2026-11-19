const mongoose = require('mongoose');

const timeSlotSchema = new mongoose.Schema(
  {
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
    },
    date: {
      type: Date,
      required: [true, 'Please provide a date'],
    },
    startTime: {
      type: String,
      required: [true, 'Please provide start time (HH:MM format)'],
    },
    endTime: {
      type: String,
      required: [true, 'Please provide end time (HH:MM format)'],
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Appointment',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('TimeSlot', timeSlotSchema);
