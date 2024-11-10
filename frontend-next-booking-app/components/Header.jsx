import Image from 'next/image';
import Link from 'next/link';
import logo from '@assets/images/logo.svg';

const Header = () => {
  return (
    <header className="bg-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <Image className="h-12 w-12" src={logo} alt="Bookit" priority={true} />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white">
                  Rooms
                </a>
                <a href="/bookings.html" className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white">
                  Bookings
                </a>
                <a href="/add-room.html" className="rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white">
                  Add Room
                </a>
              </div>
            </div>
          </div>

          <div className="ml-auto">
            <div className="ml-4 flex items-center md:ml-6">
              <a href="login.html" className="mr-3 text-gray-800 hover:text-gray-600">
                <i className="fa fa-sign-in"></i> Login
              </a>
              <a href="register.html" className="mr-3 text-gray-800 hover:text-gray-600">
                <i className="fa fa-user"></i> Register
              </a>
              <a href="my-rooms.html">
                <i className="fa fa-building"></i> My Rooms
              </a>
              <a href="login.html" className="mx-3 text-gray-800 hover:text-gray-600">
                <i className="fa fa-sign-out"></i> Sign Out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
