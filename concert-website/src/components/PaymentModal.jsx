// src/components/PaymentModal.jsx
import { useState } from 'react';
import { X } from 'lucide-react';

const PaymentModal = ({ isOpen, onClose, ticket }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    aadhar: '',
    email: '',
    paymentMethod: 'upi'
  });
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Process payment
      setIsProcessing(true);
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        setIsComplete(true);
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-900">
            {isComplete ? 'Payment Complete' : step === 1 ? 'Your Information' : 'Payment Details'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {isComplete ? (
          <div className="p-6 text-center">
            <div className="mb-6 text-green-500">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Thank You for Your Purchase!</h3>
            <p className="text-gray-600 mb-4">
              Your {ticket.type} ticket has been confirmed. A confirmation has been sent to your email.
            </p>
            <p className="font-bold text-blue-900 mb-6">
              Ticket ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            {step === 1 ? (
              <>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Order Summary</h3>
                  <div className="bg-blue-50 rounded p-4 mb-4">
                    <div className="flex justify-between mb-2">
                      <span>{ticket.type} Ticket</span>
                      <span>₹{ticket.price}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Booking Fee</span>
                      <span>₹{Math.round(ticket.price * 0.05)}</span>
                    </div>
                    <div className="border-t border-blue-200 my-2"></div>
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>₹{ticket.price + Math.round(ticket.price * 0.05)}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Payment Method</label>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-blue-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="upi"
                          checked={formData.paymentMethod === 'upi'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>UPI</span>
                      </label>
                      <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-blue-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={formData.paymentMethod === 'card'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>Credit/Debit Card</span>
                      </label>
                      <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-blue-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="netbanking"
                          checked={formData.paymentMethod === 'netbanking'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>Net Banking</span>
                      </label>
                      <label className="flex items-center p-3 border rounded cursor-pointer hover:bg-blue-50">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="wallet"
                          checked={formData.paymentMethod === 'wallet'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span>Wallet</span>
                      </label>
                    </div>
                  </div>

                  {formData.paymentMethod === 'upi' && (
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-1">UPI ID</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="yourname@bank"
                        required
                      />
                    </div>
                  )}

                  {formData.paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 mb-1">Card Number</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label className="block text-gray-700 mb-1">Expiry Date</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-gray-700 mb-1">CVV</label>
                          <input
                            type="text"
                            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === 'netbanking' && (
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-1">Select Bank</label>
                      <select className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select Bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                      </select>
                    </div>
                  )}
                </div>
              </>
            )}

            <div className="border-t border-gray-200 pt-4 mt-6 flex justify-between">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-2 border border-blue-600 text-blue-600 rounded font-medium hover:bg-blue-50"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={isProcessing}
                className={`px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded font-medium hover:opacity-90 transition ${isProcessing ? 'opacity-75 cursor-not-allowed' : ''
                  } ${step === 1 ? 'ml-auto' : ''}`}
              >
                {isProcessing ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : step === 1 ? (
                  'Continue to Payment'
                ) : (
                  'Pay Now'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
