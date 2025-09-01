import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-blue-900 text-white">
      <div className="px-6 max-w-7xl mx-auto py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">Smart Ride</Link>
        <nav className="flex items-center gap-6">
          <NavLink
            to="/book"
            className={({ isActive }) =>
              isActive ? 'underline underline-offset-4' : 'hover:opacity-90'
            }
          >
            Book Ride
          </NavLink>
          <NavLink
            to="/driver"
            className={({ isActive }) =>
              isActive ? 'underline underline-offset-4' : 'hover:opacity-90'
            }
          >
            Driver
          </NavLink>
          <NavLink
            to="/myrides"
            className={({ isActive }) =>
              isActive ? 'underline underline-offset-4' : 'hover:opacity-90'
            }
          >
            My Rides
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
