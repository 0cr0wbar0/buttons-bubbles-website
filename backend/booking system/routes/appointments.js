const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getAllAppointments,
  getAppointment,
  bookAppointment,
  updateAppointment,
  cancelAppointment,
  getAvailableSlots,
} = require('../controllers/appointmentController');

router.get('/', protect, getAllAppointments);
router.get('/:id', protect, getAppointment);
router.post('/', protect, bookAppointment);
router.put('/:id', protect, updateAppointment);
router.delete('/:id', protect, cancelAppointment);
router.get('/available-slots/:serviceId/:providerId', getAvailableSlots);

module.exports = router;
