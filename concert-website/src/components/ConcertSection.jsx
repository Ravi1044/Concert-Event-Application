// src/components/ConcertSection.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardActions, Button, Modal, Box } from "@mui/material";
import { Music2, CalendarDays, MapPin, Building2, Clock } from "lucide-react";
import TicketSection from "./TicketSection";
import PaymentModal from "./PaymentModal";

const API_BASE = "http://localhost:5000/api";

const ConcertSection = ({ onPurchase }) => {
  const [concerts, setConcerts] = useState([]);
  const [selectedConcert, setSelectedConcert] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [open, setOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const res = await axios.get(`${API_BASE}/concerts`);
        setConcerts(res.data);
      } catch (err) {
        console.error("Error fetching concerts:", err);
      }
    };

    fetchConcerts();
  }, []);


  const handleTicketPurchase = (ticket) => {
    setSelectedTicket(ticket);
    setIsPaymentOpen(true);
  };


  const handleOpenTickets = async (concert) => {
    try {
      const res = await axios.get(`${API_BASE}/tickets`);
      const concertTickets = res.data.filter((t) => t.concert_id === concert.id);
      setTickets(concertTickets);
      setSelectedConcert(concert);
      setOpen(true);
    } catch (err) {
      console.error("Error fetching tickets:", err);
    }
  };

  const handleClose = () => setOpen(false);

  return (
    <section id="tickets" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-4">
          🎤 Upcoming Live Concerts
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Grab your tickets now and be part of an unforgettable musical journey!
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {concerts.map((concert) => {
            const daysLeft = Math.max(
              0,
              Math.ceil(
                (new Date(concert.date) - new Date()) / (1000 * 60 * 60 * 24)
              )
            );

            return (
              <Card
                key={concert.id}
                sx={{
                  overflow: "visible",
                  borderRadius: "20px",
                  boxShadow:
                    "0 6px 20px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.06)",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "translateY(-6px)" },
                }}
              >
                {/* Header */}
                <div className="bg-gradient-to-br from-green-600 to-blue-600 p-6 text-white text-center rounded-t-2xl relative">
                  <h3 className="text-2xl font-bold mb-2">{concert.name}</h3>
                  <div className="flex justify-center items-baseline">
                    <Clock className="text-yellow-300 mr-2" size={28} />
                    <span className="text-5xl font-bold">{daysLeft}</span>
                    <span className="text-lg ml-1">days left</span>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="bg-white">
                  <ul className="space-y-3 text-gray-700 text-left">
                    <li className="flex items-center">
                      <Music2 className="text-green-600 mr-2" size={20} />
                      <span>Artist: {concert.artist}</span>
                    </li>
                    <li className="flex items-center">
                      <CalendarDays className="text-blue-600 mr-2" size={20} />
                      <span>Date: {new Date(concert.date).toDateString()}</span>
                    </li>
                    <li className="flex items-center">
                      <Building2 className="text-purple-600 mr-2" size={20} />
                      <span>Venue: {concert.venue}</span>
                    </li>
                    <li className="flex items-center">
                      <MapPin className="text-red-600 mr-2" size={20} />
                      <span>City: {concert.city}</span>
                    </li>
                  </ul>
                </CardContent>

                {/* Actions */}
                <CardActions className="px-6 pb-6">
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => handleOpenTickets(concert)}
                    sx={{
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      textTransform: "none",
                    }}
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white hover:opacity-90 transition transform hover:scale-[1.03]"
                  >
                    🎟️ Get Tickets
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>

        {/* Ticket Modal */}
        <Modal open={open} onClose={handleClose}>
          <Box
            className="absolute top-1/2 left-1/2 bg-white p-6 rounded-2xl shadow-2xl w-11/12 md:w-3/4 lg:w-2/3 transform -translate-x-1/2 -translate-y-1/2 max-h-[90vh] overflow-y-auto"
          >
            {selectedConcert && (
              <TicketSection tickets={tickets} onPurchase={handleTicketPurchase} />
            )}
            {isPaymentOpen && (
                    <PaymentModal
                      isOpen={isPaymentOpen}
                      onClose={() => setIsPaymentOpen(false)}
                      ticket={selectedTicket}
                    />
                  )}

          </Box>
        </Modal>
      </div>
    </section>
  );
};

export default ConcertSection;
