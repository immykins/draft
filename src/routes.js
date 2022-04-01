import express from 'express';
// import router from express.Router
import * as draftController from './drafts.controller.js';

const router = express.Router();

router.post('/', draftController.create);

// router.get('/:id', draftController.get);

export default router;