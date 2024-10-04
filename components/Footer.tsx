import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-4">Immunefi</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">𝕏 / Twitter</a></li>
              <li><a href="#" className="hover:underline">Discord</a></li>
              <li><a href="#" className="hover:underline">Telegram</a></li>
              <li><a href="#" className="hover:underline">Medium</a></li>
              <li><a href="#" className="hover:underline">Youtube</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">EXPLORE</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Projects</a></li>
              <li><a href="#" className="hover:underline">Hackers</a></li>
              <li><a href="#" className="hover:underline">Rules</a></li>
              <li><a href="#" className="hover:underline">Safe Harbor</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">COMPANY</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">DOCUMENTS</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Research</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Brand Assets</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">LEGAL</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Employee Verification</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;