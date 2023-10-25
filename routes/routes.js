const express = require('express');
const router = express.Router();
const map_controller = require('../controller/mapcontroller');

router.post('/map/add', map_controller.add);
router.get("/map/getall", map_controller.getAll);
module.exports = router;