'use client';
import Link from 'next/link';
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import './NavClient.css';

const NavClient = ({ isUserAuthenticated }) => {
  return (
    <header className="navbar">
      {/* Navigation Links */}
      <nav className="nav-links">
        <div>
          <Link href="/" className="nav-link">
            Home
          </Link>
        </div>
        <div>
          <Link href="/profile" className="nav-link">
            Profile
          </Link>
        </div>
      </nav>

      {/* Authentication Buttons */}
      <div className="auth-buttons">
        {isUserAuthenticated ? (
          <LogoutLink>
            <button className="logout-button">
              Logout
            </button>
          </LogoutLink>
        ) : (
          <>
            <LoginLink>
              <button className="login-button">
                Login
              </button>
            </LoginLink>
            <RegisterLink>
              <button className="register-button">
                Register
              </button>
            </RegisterLink>
          </>
        )}
      </div>
    </header>
  );
};

export default NavClient;
