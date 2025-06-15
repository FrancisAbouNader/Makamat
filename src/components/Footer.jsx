import React from 'react';

const Footer = () => {
  return (
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
            {/* Left: Logo and Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="Makamat Logo" className="h-8 w-auto" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed max-w-md">
                Supporting public and private sectors through advanced AIDC, healthcare, and digital infrastructure solutions.
              </p>
              <div className="flex space-x-6 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                <a href="#" className="hover:text-gray-900">Terms & Conditions</a>
                <a href="#" className="hover:text-gray-900">Cookie Policy</a>
              </div>
            </div>

            {/* Right: Contact Info and Social */}
            <div className="space-y-4 text-sm text-gray-700">
              <div className="text-center">
                <p className="font-medium">District Office 101, Al Nakheel Center, Al-Madinah</p>
                <p>Al-Munawwarah Rd., Al Hamra'a, Jeddah 23324, Saudi Arabia</p>
              </div>
              <div className="space-y-1 w-1/2 m-auto">
                <div className="flex justify-between">
                  <span>+966 12 664 6063</span>
                  <span>Fax: +966 12 661 2023</span>
                </div>
                <div className="flex justify-between">
                  <span>+966 12 664 2023</span>
                  <span>info@fid.sa</span>
                </div>

                <div className="justify-center flex space-x-4 pt-4">
                  {/* GitHub */}
                  <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="GitHub">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                          fillRule="evenodd"
                          d="M12 0C5.37 0 0 5.37 0 12a12.06 12.06 0 008.207 11.385c.6.113.793-.26.793-.577 0-.285-.011-1.04-.016-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.73.082-.73 1.204.085 1.837 1.237 1.837 1.237 1.07 1.835 2.807 1.305 3.49.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.337-5.466-5.952 0-1.314.47-2.39 1.236-3.23-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.3 1.23a11.42 11.42 0 016.003 0c2.29-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.916 1.235 3.23 0 4.627-2.803 5.644-5.475 5.942.43.37.813 1.1.813 2.215 0 1.6-.015 2.89-.015 3.286 0 .319.192.694.8.576A12.06 12.06 0 0024 12c0-6.63-5.37-12-12-12z"
                          clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a href="#" className="text-gray-600 hover:text-gray-900" aria-label="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path
                          d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.1 20.5H3.5v-11h3.6v11zM5.3 8.3c-1.1 0-1.9-.8-1.9-1.9S4.2 4.5 5.3 4.5c1.1 0 1.9.8 1.9 1.9s-.9 1.9-1.9 1.9zm15.2 12.2h-3.6v-5.6c0-1.3-.5-2.2-1.6-2.2-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8v5.7H9.9v-11h3.5v1.5c.5-.7 1.3-1.7 3.2-1.7 2.3 0 4 1.5 4 4.6v6.6z"
                      />
                    </svg>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
