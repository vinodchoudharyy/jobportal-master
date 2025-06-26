import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Vista</h2>
            
            <p className="text-sm">@2025 All rights reserved by vikas.</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* GitHub */}
            <a href="https://github.com/vikasonly" className="hover:text-gray-400" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .296C5.371.296 0 5.667 0 12.296c0 5.29 3.438 9.778 8.205 11.366.6.111.82-.261.82-.577 
                0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.612-4.042-1.612-.546-1.388-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 
                1.205.085 1.84 1.237 1.84 1.237 1.07 1.832 2.809 1.303 3.495.996.108-.775.418-1.303.76-1.602-2.665-.305-5.467-1.332-5.467-5.931 
                0-1.31.469-2.382 1.236-3.221-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404 
                11.5 11.5 0 013.003.404c2.291-1.553 3.297-1.23 3.297-1.23.655 1.649.243 2.873.12 3.176.77.839 1.235 1.911 
                1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.37.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.293 
                0 .319.216.694.825.576C20.565 22.07 24 17.584 24 12.296 24 5.667 18.627.296 12 .296z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="linkedin.com/in/vikas-choudhary" className="hover:text-gray-400" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 
                1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 
                1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 
                5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 
                2-2 1.104 0 2 .895 2 2 0 1.104-.896 
                2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 
                0H1.771C.791 0 0 .774 0 1.729v20.542C0 
                23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 
                1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
