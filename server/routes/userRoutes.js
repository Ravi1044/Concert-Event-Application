import express from 'express';
import { getConcertDetails } from '../controllers/concertsController.js';
import { getTicketDetails, purchaseTicket } from '../controllers/ticketsController.js';


const router = express.Router();

router.get('/concerts', getConcertDetails)
router.get('/tickets', getTicketDetails);
router.post('/purchase', purchaseTicket);

export default router;