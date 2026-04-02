import express from 'express';
import { addConcertDetails } from '../controllers/concertsController.js';
import { changeConcertDetails } from '../controllers/concertsController.js';
import { addTicketDetails } from '../controllers/ticketsController.js';
import { changeTicketDetails } from '../controllers/ticketsController.js';
import { getConcertDetails } from '../controllers/concertsController.js';
import { getTicketDetails } from '../controllers/ticketsController.js';
import { adminLogin } from '../controllers/adminController.js';

const router = express.Router();

router.post('/concerts', addConcertDetails);
router.put('/concerts', changeConcertDetails);
router.get('/concerts', getConcertDetails);


router.post('/tickets', addTicketDetails);
router.put('/tickets', changeTicketDetails);
router.get('/tickets', getTicketDetails);

router.post('/login', adminLogin);

export default router;