import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Cart', to: '/cart' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Login', to: '/login' },
  { label: 'Sign Up', to: '/signup' }
];

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8 px-[8%] mt-12 text-center">
    <div className="text-center mb-10">
      <h3 className="text-3xl mb-2">
        Book<span className="text-orange-600">Haven</span>
      </h3>
      <p className="text-white/70 mb-5">Your sanctuary for the world's most inspiring stories.</p>
      <div className="flex justify-center flex-wrap gap-5">
        {footerLinks.map((item) => (
          <Link key={item.to} to={item.to} className="text-white/70 no-underline transition-all hover:text-orange-600">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
    <div className="text-center pt-8 border-t border-white/10 text-white/50 text-sm">
      <p>© 2026 BookHaven Inc. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;