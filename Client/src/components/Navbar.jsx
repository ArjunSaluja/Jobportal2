import React from 'react';
import { assets } from '../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(AppContext); // ✅ fixed

  return (
    <div className="shadow py-4 bg-white">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            onClick={() => navigate('/')}
            className="cursor-pointer"
            src={assets.logo}
            alt="Logo"
          />
        </Link>

        <div className="flex items-center space-x-6">
          {isLoaded && user ? (
            <>
              <div className="text-sm text-gray-600 hidden sm:block">
                <Link to="/application">Applied Job</Link>
              </div>
              <span className="text-sm font-medium text-gray-700">
                Hi, {user.firstName || 'User'}
              </span>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <button
                onClick={() => setShowRecruiterLogin(true)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm cursor-pointer"
              >
                Recruiter Login
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  openSignIn();
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
