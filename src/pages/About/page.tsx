import { Link } from 'react-router-dom';

const About = () => (
  <>
    <div className="h-[50vh] bg-linear-to-b from-black/50 to-black/50 bg-[url('https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-5">
      <h1 className="text-4xl md:text-5xl mb-4">About BookHaven</h1>
      <p className="text-lg mb-6 opacity-90">Your sanctuary for the world's most inspiring stories</p>
      <Link to="/shop" className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold inline-block transition-all hover:bg-orange-500">
        Browse Our Books →
      </Link>
    </div>

    <div className="py-20 px-[8%] bg-white text-center">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-5xl mb-5">📚</div>
        <h2 className="text-3xl md:text-4xl text-gray-800 mb-5">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed">
          At BookHaven, we believe that books have the power to change lives. Founded in 2026, our mission is to provide a curated selection of literature that inspires, educates, and entertains readers of all ages.
        </p>
      </div>
    </div>

    <div className="py-20 px-[8%] bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl text-gray-800 mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-xl shadow-sm transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-4xl block mb-4">📖</div>
            <h3 className="text-gray-800 mb-2">Quality</h3>
            <p className="text-gray-500">Every book hand-picked by literary experts</p>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-sm transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-4xl block mb-4">🌍</div>
            <h3 className="text-gray-800 mb-2">Community</h3>
            <p className="text-gray-500">Building a global family of book lovers</p>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-sm transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-4xl block mb-4">⚡</div>
            <h3 className="text-gray-800 mb-2">Accessibility</h3>
            <p className="text-gray-500">Making great books affordable for everyone</p>
          </div>
        </div>
      </div>
    </div>

    <div className="py-20 px-[8%] bg-white">
      <div className="flex gap-16 items-center flex-wrap max-w-6xl mx-auto">
        <div className="flex-1 min-w-70">
          <img src="/images/books1.jpeg" alt="BookHaven Bookstore" className="w-full rounded-xl shadow-md" />
        </div>
        <div className="flex-1 min-w-70">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-5">Our Story</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            BookHaven started as a small passion project and grew into a beloved online bookstore. We're committed to bringing the joy of reading to book lovers everywhere. What started in a small office has now become a thriving community of readers across the globe.
          </p>
          <Link to="/shop" className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold inline-block transition-all hover:bg-orange-500">
            Start Reading Today →
          </Link>
        </div>
      </div>
    </div>

    <div className="py-20 px-[8%] bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-xl shadow-sm transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">10K+</div>
            <div className="text-gray-500 text-base">Happy Readers</div>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-sm transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-500 text-base">Books Available</div>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-sm transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">25+</div>
            <div className="text-gray-500 text-base">Expert Authors</div>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-sm transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">4.9★</div>
            <div className="text-gray-500 text-base">Customer Rating</div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default About;