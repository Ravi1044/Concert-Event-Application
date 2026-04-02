import { Tickets } from "../models/model.js";

// Add ticket details
export const addTicketDetails = async (req, res) => {
  try {
    const { ticketType, price, concertId, allotedTickets } = req.body;

    if (!ticketType || !price || !concertId || allotedTickets === undefined ) {
      return res.status(400).send("All fields are required");
    }
    if (typeof ticketType !== "string" || typeof price !== "number" || typeof concertId !== "number" || typeof allotedTickets !== "number" ) {
      return res.status(400).send("Invalid data types");
    }

    const [newTicket] = await Tickets.create({
      ticket_type: ticketType,
      price: price,
      concert_id: concertId,
      alloted_tickets: allotedTickets
    });

    res.status(201).json(newTicket);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding ticket");
  }
};

// Update ticket details
export const changeTicketDetails = async (req, res) => {
  try {
    const { ticketId, ticketType, price, concertId, allotedTickets } = req.body;

    if (!ticketId || !ticketType || !price || !concertId || allotedTickets === undefined ) {
      return res.status(400).send("Ticket details are required");
    }
    if (typeof ticketId !== "number" || typeof ticketType !== "string" || typeof price !== "number" || typeof concertId !== "number" || typeof allotedTickets !== "number" ) {
      return res.status(400).send("Invalid data types");
    }

    const [updatedTicket] = await Tickets.update(ticketId, {
      ticket_type: ticketType,
      price: price,
      concert_id: concertId,
      alloted_tickets: allotedTickets
    });

    if (!updatedTicket) {
      return res.status(404).send("Ticket not found");
    }

    res.json(updatedTicket);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating ticket");
  }
};

// Get ticket details
export const getTicketDetails = async (req, res) => {
  try {
    const tickets = await Tickets.list();
    res.json(tickets);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching ticket details");
  }
};


// Purchase ticket
export const purchaseTicket = async (req, res) => {
  try {
    const { ticketId, quantity } = req.body;

    if (!ticketId || !quantity) {
      return res.status(400).send("Ticket ID and quantity are required");
    }
    if (typeof ticketId !== "number" || typeof quantity !== "number") {
      return res.status(400).send("Invalid data types");
    }

    // Find ticket
    const ticket = await Tickets.findById(ticketId);
    if (!ticket) {
      return res.status(404).send("Ticket not found");
    }

    // Check if enough tickets available
    if (ticket.alloted_tickets < quantity) {
      return res.status(400).send("Not enough tickets available");
    }

    // Update counts
    const updatedTicket = await Tickets.update(ticketId, {
      alloted_tickets: ticket.alloted_tickets - quantity,
      sold_tickets: ticket.sold_tickets + quantity,
    });

    res.json({
      message: "Ticket purchase successful",
      updatedTicket,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error purchasing ticket");
  }
};
