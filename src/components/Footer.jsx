import React from 'react';

const Footer = () => {
  return (
      <footer className="bg-white py-12 md:px-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
            {/* Left: Logo and Description */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src="/logo-3.png" alt="Makamat Logo" className="h-16" />
              </div>
              <p className="text-gray-700 font-bold text-sm leading-relaxed max-w-md">
                Supporting public and private sectors through advanced AIDC, healthcare, and digital infrastructure solutions.
              </p>
              <div className="flex flex-col md:flex-row w-full md:space-x-6 text-sm text-gray-600">
                <a href="/privacy-policy" className="hover:text-gray-900">Privacy Policy</a>
                <a href="/terms-conditions" className="hover:text-gray-900">Terms & Conditions</a>
                <a href="/cookie-policy" className="hover:text-gray-900">Cookie Policy</a>
              </div>
            </div>

            {/* Right: Contact Info and Social */}
            <div className="space-y-4 text-sm text-gray-700 md:mt-10">
              <div className="md:text-end w-fit ml-auto  ">
                <p className="font-medium">District Office 101, Al Nakheel Center, Al-Madinah</p>
                <p>Al-Munawwarah Rd., Al Hamra'a, Jeddah 23324, Saudi Arabia</p>
              </div>
              <div className="flex flex-col items-end w-fit ml-auto">
                <div className="grid grid-cols-2 gap-x-24 ">
                  <span className={'text-end'}>+966 12 664 6063</span>
                  <span>Fax: +966 12 661 2023</span>
                  <span className={'text-end'}>+966 12 664 2023</span>
                  <span>info@rfid.sa</span>
                </div>
                <div className="justify-center flex space-x-4 mx-auto pt-4">
                  {/* GitHub */}
                  <a href="https://www.instagram.com/rfid.sa/?igsh=MXZnc29zcXN3OXQ0dw%3D%3D" className="text-gray-600 hover:text-gray-900" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                         className="bi bi-instagram" viewBox="0 0 16 16">
                      <path
                          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/company/rfid-sa/posts/?feedView=all" className="text-gray-600 hover:text-gray-900" aria-label="LinkedIn">
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
