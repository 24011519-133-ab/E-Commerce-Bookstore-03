import { Link } from 'react-router-dom';
import Header from '../../components/Header/page';

const services = [
  { icon: '📚', title: 'Curated Collections', description: 'Expert book selections for every mood.' },
  { icon: '🚚', title: 'Fast Delivery', description: 'Quick shipping across the United States.' },
  { icon: '🎁', title: 'Gift Wrapping', description: 'Perfect presentation for every gift.' },
  { icon: '💬', title: 'Personal Recommendations', description: 'Custom reading suggestions.' }
];

const Services = () => (
  <>
    <Header
      title="Services That Help You Read More"
      subtitle="From curated selections to express delivery, find the service that fits your reading life."
      buttonText="Contact Support →"
      buttonLink="/contact"
    />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-[8%] bg-white">
      {services.map((item) => (
        <div key={item.title} className="text-center p-10 bg-gray-50 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md">
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl mb-2 text-gray-800">{item.title}</h3>
          <p className="text-gray-500">{item.description}</p>
        </div>
      ))}
    </div>

    <div className="flex items-center gap-16 py-20 px-[8%] bg-white flex-wrap">
      <div className="flex-1 min-w-70">
        <img src="/images/books1.jpeg" alt="Reading services" className="w-full rounded-2xl shadow-lg" />
      </div>
      <div className="flex-1 min-w-70">
        <h2 className="text-3xl md:text-4xl text-gray-800 mb-5">Why BookHaven Services?</h2>
        <p className="text-gray-500 leading-relaxed mb-6">
          We blend thoughtful book curation with modern convenience. Whether you want a surprise recommendation, express delivery, or a wrapped gift set, we make it easy.
        </p>
        <Link to="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold inline-block transition-all hover:bg-orange-500">
          Talk to Us →
        </Link>
      </div>
    </div>
  </>
);

export default Services;