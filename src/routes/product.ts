import express from 'express';
import controller from '../controllers/Product';

const router = express.Router();

router.get("", controller.findAll);
router.get("/filters",controller.findFilters);
router.get("/:productId", controller.findOne);


export default router;