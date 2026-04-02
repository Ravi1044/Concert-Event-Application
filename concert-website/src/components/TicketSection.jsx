import { Card, CardContent, CardActions, Button } from '@mui/material';
import { CheckCircle } from 'lucide-react';

const TicketSection = ({ tickets = [], onPurchase }) => {
    if (!tickets.length) {
        return (
            <p className="text-center text-gray-500 mt-10">
                No tickets available at the moment.
            </p>
        );
    }

    const order = {
        Basic: 1,
        Premium: 2,
        VIP: 3,
    };

    const colors = {
        Basic: "from-green-400 to-green-600",
        Premium: "from-blue-400 to-blue-600",
        VIP: "from-purple-400 to-purple-600",
    };

    // Sort tickets by order mapping
    const sortedTickets = [...tickets].sort(
        (a, b) => (order[a.ticket_type] || 99) - (order[b.ticket_type] || 99)
    );

    return (
        <section id="tickets" className="py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
                    🎟️ Get Your Tickets
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Choose the perfect ticket that suits your vibe, experience, and budget.
                </p>

                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {sortedTickets.map((ticket) => (
                        <Card key={ticket.ticket_type} className="rounded-3xl shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <div
                                className={`bg-gradient-to-br ${colors[ticket.ticket_type] || "from-gray-400 to-gray-600"} p-6 text-white text-center rounded-t-3xl relative`}
                            >
                                <h3 className="text-2xl font-bold mb-1">{ticket.ticket_type}</h3>
                                <div className="flex justify-center items-start">
                                    <span className="text-2xl mt-1">₹</span>
                                    <span className="text-5xl font-extrabold">{ticket.price}</span>
                                </div>
                            </div>

                            <CardContent className="bg-white">
                                <ul className="space-y-3 text-gray-700 text-left">
                                    <li className="flex items-center">
                                        <CheckCircle className="text-green-500 mr-2" size={20} />
                                        <span>{ticket.alloted_tickets} Allotted Tickets</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="text-green-500 mr-2" size={20} />
                                        <span>{ticket.sold_tickets} Tickets Sold</span>
                                    </li>
                                </ul>
                            </CardContent>

                            <CardActions className="px-6 pb-6">
                                <Button
                                    fullWidth
                                    variant="contained"
                                     onClick={() => onPurchase(ticket)}
                                    sx={{
                                        py: 1.5,
                                        borderRadius: 8,
                                        background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                                    }}
                                    className={`bg-gradient-to-r ${colors[ticket.ticket_type] || "from-gray-400 to-gray-600"} text-white font-bold hover:opacity-90 transition transform hover:scale-[1.02]`}
                                >
                                    Buy Now
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TicketSection;
