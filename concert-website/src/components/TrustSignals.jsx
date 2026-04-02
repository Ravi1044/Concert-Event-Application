// src/components/TrustSignals.jsx
import { Card, CardContent, Typography } from '@mui/material';
import { Star, Music, Group } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TrustSignals = () => {
  const stats = [
    { label: "Years Experience", value: "10+", icon: <Star className="text-blue-500" /> },
    { label: "Events Organized", value: "50+", icon: <Group className="text-green-500" /> },
    { label: "Artists Featured", value: "100+", icon: <Music className="text-blue-500" /> },
    { label: "Happy Attendees", value: "50,000+", icon: <Group className="text-green-500" /> },
  ];

  const testimonials = [
    {
      text: "The most amazing concert experience of my life! The organization was flawless.",
      author: "Priya S.",
    },
    {
      text: "Incredible performances and perfect venue. Can't wait for the next event!",
      author: "Rahul M.",
    },
    {
      text: "The VIP experience was worth every rupee. Would definitely recommend!",
      author: "Ananya K.",
    },
  ];

  const certifications = [1, 2, 3, 4, 5];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-3">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of music lovers across the country
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="rounded-xl shadow-lg text-center py-6 px-4">
              <div className="flex justify-center mb-2 text-3xl">{stat.icon}</div>
              <Typography variant="h4" className="font-bold text-blue-700">
                {stat.value}
              </Typography>
              <Typography className="text-gray-600">{stat.label}</Typography>
            </Card>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="mb-20 max-w-4xl mx-auto">
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            modules={[Pagination, Autoplay]}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-white shadow-md rounded-xl p-8">
                  <Typography className="text-blue-600 text-6xl leading-none mb-4">“</Typography>
                  <Typography className="text-gray-700 text-lg mb-6">{testimonial.text}</Typography>
                  <Typography className="text-green-600 font-bold text-right">— {testimonial.author}</Typography>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

       
      </div>
    </section>
  );
};

export default TrustSignals;
