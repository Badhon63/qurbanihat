import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 mt-16 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-lg font-bold mb-4">QurbaniHat</h2>
          <p className="text-gray-600 text-sm leading-6">
            A modern livestock booking platform for Qurbani animals. Explore
            cows and goats, view details, and book securely after login.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Contact Info</h2>
          <div className="text-gray-600 text-sm space-y-2">
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>support@qurbanihat.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone />
              <span>+880 000 000 000</span>
            </div>
            <p>Location: Bangladesh</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-xl text-gray-700">
            <FaFacebook className="cursor-pointer hover:text-blue-600 transition" />
            <FaTwitter className="cursor-pointer hover:text-sky-500 transition" />
            <FaGithub className="cursor-pointer hover:text-gray-900 transition" />
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Stay connected for latest animal listings and Qurbani updates.
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-4 border-t">
        © 2026 QurbaniHat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
