import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const API_BASE = "http://localhost:5000/api";

const AdminPage = () => {
  const [concerts, setConcerts] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [selectedConcert, setSelectedConcert] = useState(null);

  const [concertForm, setConcertForm] = useState({
    concertName: "",
    artist: "",
    date: "",
    venue: "",
    city: ""
  });

  const [ticketForm, setTicketForm] = useState({
    ticketType: "",
    price: 0,
    allotedTickets: 0
  });

  const fetchConcerts = async () => {
    const res = await axios.get(`${API_BASE}/admin/concerts`);
    setConcerts(res.data);
  };

  const fetchTickets = async (concertId) => {
    const res = await axios.get(`${API_BASE}/admin/tickets`);
    setTickets(res.data.filter((t) => t.concert_id === concertId));
  };

  useEffect(() => {
    fetchConcerts();
  }, []);

  const handleConcertSubmit = async (e) => {
    e.preventDefault();
    if (concertForm.id) {
      await axios.put(`${API_BASE}/admin/concerts`, { ...concertForm, concertId: concertForm.id });
      toast.success("Concert updated successfully!");
    } else {
      await axios.post(`${API_BASE}/admin/concerts`, concertForm);
      toast.success("Concert added successfully!");
    }
    setConcertForm({ concertName: "", artist: "", date: "", venue: "", city: "" });
    fetchConcerts();
  };

  const handleTicketSubmit = async (e) => {
    e.preventDefault();
    if (!selectedConcert) return alert("Select a concert first!");
    if (ticketForm.id) {
      await axios.put(`${API_BASE}/admin/tickets`, { ...ticketForm, concertId: selectedConcert.id });
      toast.success("Ticket updated successfully!");
    } else {
      await axios.post(`${API_BASE}/admin/tickets`, { ...ticketForm, concertId: selectedConcert.id });
      toast.success("Ticket added successfully!");
    }
    setTicketForm({ ticketType: "", price: 0, allotedTickets: 0, soldTickets: 0 });
    fetchTickets(selectedConcert.id);
  };

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6"> Admin Dashboard</h1>

      {/* Concert Form */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Add / Update Concert</h2>
        <form onSubmit={handleConcertSubmit} className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Concert Name"
            className="p-2 border rounded-md"
            value={concertForm.concertName}
            onChange={(e) => setConcertForm({ ...concertForm, concertName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Artist"
            className="p-2 border rounded-md"
            value={concertForm.artist}
            onChange={(e) => setConcertForm({ ...concertForm, artist: e.target.value })}
          />
          <input
            type="date"
            className="p-2 border rounded-md"
            value={concertForm.date}
            onChange={(e) => setConcertForm({ ...concertForm, date: e.target.value })}
          />
          <input
            type="text"
            placeholder="Venue"
            className="p-2 border rounded-md"
            value={concertForm.venue}
            onChange={(e) => setConcertForm({ ...concertForm, venue: e.target.value })}
          />
          <input
            type="text"
            placeholder="City"
            className="p-2 border rounded-md"
            value={concertForm.city}
            onChange={(e) => setConcertForm({ ...concertForm, city: e.target.value })}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700"
          >
            Save Concert
          </button>

        </form>

      </div>

      {/* Concerts List */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold text-green-700 mb-4">Concerts</h2>
        <ul className="space-y-2">
          {concerts.map((c) => (
            <li key={c.id} className="flex justify-between items-center p-2 border rounded-md">
              <span>
                {c.name} ({c.artist}) - {c.date} @ {c.venue}, {c.city}
              </span>
              <div className="space-x-2">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                  onClick={() => setConcertForm({ id: c.id, ...c })}
                >
                  Edit
                </button>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                  onClick={() => {
                    setSelectedConcert(c);
                    fetchTickets(c.id);
                  }}
                >
                  Manage Tickets
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Ticket Section */}
      {selectedConcert && (
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Tickets for {selectedConcert.name}
          </h2>
          <form onSubmit={handleTicketSubmit} className="grid grid-cols-2 gap-6">
            {/* Ticket Type */}
            {/* Ticket Type */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Ticket Type</label>
              <select
                className="p-2 border rounded-md"
                value={ticketForm.ticketType}
                onChange={(e) =>
                  setTicketForm({ ...ticketForm, ticketType: e.target.value })
                }
              >
                <option value="">Select Ticket Type</option>
                {["Basic", "Premium", "VIP"]
                  .filter(
                    (type) =>
                      !tickets.some(
                        (t) =>
                          t.ticket_type.toLowerCase() === type.toLowerCase() &&
                          t.id !== ticketForm.id // allow editing current ticket
                      )
                  )
                  .map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
              </select>
            </div>


            {/* Price */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Price</label>
              <input
                type="number"
                placeholder="Price"
                className="p-2 border rounded-md"
                value={ticketForm.price}
                onChange={(e) =>
                  setTicketForm({ ...ticketForm, price: Number(e.target.value) })
                }
              />
            </div>

            {/* Ticket Allotment */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Ticket Allotment</label>
              <input
                type="number"
                placeholder="Alloted Tickets"
                className="p-2 border rounded-md"
                value={ticketForm.allotedTickets}
                onChange={(e) =>
                  setTicketForm({ ...ticketForm, allotedTickets: Number(e.target.value) })
                }
              />
            </div>

            <div className="col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-12 py-2 rounded-md hover:bg-blue-700"
              >
                Save Ticket
              </button>
            </div>
          </form>


          {/* Ticket List */}
          <ul className="mt-4 space-y-2">
            {tickets.map((t) => (
              <li key={t.id} className="flex justify-between items-center p-2 border rounded-md">
                <span>
                  {t.ticket_type} - ₹{t.price} | Alloted: {t.alloted_tickets} | Sold: {t.sold_tickets}
                </span>
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                  onClick={() => setTicketForm({
                    id: t.id,
                    ticketType: t.ticket_type,
                    price: t.price,
                    allotedTickets: t.alloted_tickets,
                    soldTickets: t.sold_tickets
                  })}
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
