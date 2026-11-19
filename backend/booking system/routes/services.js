const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  getAllServices,
  getService,
  createService,
  updateService,
  deleteService,
} = require('../controllers/serviceController');

router.get('/', getAllServices);
router.get('/:id', getService);
router.post('/', protect, authorize('provider', 'admin'), createService);
router.put('/:id', protect, authorize('provider', 'admin'), updateService);
router.delete('/:id', protect, authorize('provider', 'admin'), deleteService);

module.exports = router;
