import express from 'express';

import dashboardController from '../../controllers/dashboard/dashboard.controller';

const router = express.Router();

router.get('/dashboard', dashboardController.dashboard);

export default router;
