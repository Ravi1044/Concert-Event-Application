import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ConcertSection from './components/ConcertSection';
import TrustSignals from './components/TrustSignals';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';
import AdminPage from './pages/AdminPage';
import AdminLogin from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch ticket data (API should provide this)
    fetch("http://localhost:5000/api/tickets")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error("Error fetching tickets:", err));
  }, []);

  const handleTicketPurchase = (ticket) => {
    setSelectedTicket(ticket);
    setIsPaymentOpen(true);
  };


  const HomePage = () => (
    <>
      <Header />
      <HeroSection />
      <ConcertSection />
      <TrustSignals />
      <Footer />

       {isPaymentOpen && (
        <PaymentModal
          isOpen={isPaymentOpen}
          onClose={() => setIsPaymentOpen(false)}
          ticket={selectedTicket}
        />
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin" element={<ProtectedRoute> <AdminPage /> </ProtectedRoute>} />
        <Route path="*" element={<h1 className="text-center mt-20 text-2xl">404 - Page Not Found</h1>} />        
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
