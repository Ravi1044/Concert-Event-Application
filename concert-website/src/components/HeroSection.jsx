const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-20 bg-gradient-to-br from-blue-600 to-green-500 text-white overflow-hidden">
      {/* Transparent overlay image */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1200&q=80')] 
        bg-cover bg-center opacity-20"
      />

      {/* Floating music notes */}
      <div className="absolute bottom-1/4 left-1/4 text-6xl opacity-10 animate-float z-10">♪</div>
      <div className="absolute top-1/4 right-1/4 text-7xl opacity-10 animate-float z-10">♫</div>
      <div className="absolute bottom-1/4 left-1/4 text-6xl opacity-10 animate-float-delay z-10">♪</div>
      <div className="absolute top-1/4 right-1/4 text-7xl opacity-10 animate-float z-10">♪</div>
      <div className="absolute bottom-1/4 left-1/4 text-6xl opacity-10 animate-float z-10">♫</div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
          Experience Music <span className="text-green-300">Like Never Before</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Join us for an unforgettable night of incredible performances and magical moments under the stars
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a
            href="#tickets"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold 
            transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1
            text-lg sm:text-xl"
          >
            Get Tickets Now
          </a>

          <a
            href="#tickets"
            className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold 
  transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1
  flex items-center justify-center gap-2 text-lg sm:text-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
            </svg>
            Explore More
          </a>

        </div>

      </div>

      {/* Add to your global CSS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 8s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;