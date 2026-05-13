import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Cart', to: '/cart' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Login', to: '/login' },
  { label: 'Sign Up', to: '/signup' }
];

const Navbar = () => (
  <nav className="flex justify-between items-center px-[8%] bg-gray-800 h-17.5 sticky top-0 z-1000 shadow-sm">
    <Link to="/">
      <h2 className="text-white text-2xl tracking-wide">
        Book<span className="text-orange-600">Haven</span>
      </h2>
    </Link>
    <ul className="flex list-none gap-7.5">
      {navItems.map((item) => (
        <li key={item.to}>
          <NavLink 
            to={item.to} 
            className={({ isActive }) => 
              `text-white/90 no-underline font-medium transition-all duration-300 text-[0.95rem] hover:text-orange-600 ${isActive ? 'text-orange-600' : ''}`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;