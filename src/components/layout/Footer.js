import React from 'react';

const Footer = () => (
  <div className="bg-indigo-900 text-white">
    <footer className="container mx-auto py-16 px-3 mb-8">
      <div className="flex -mx-3">
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Address</h2>
          <p className="mt-5">LIG bldg. 2-20-11 Kojima, Taito City, Tokyo  〒111-0056</p>
          <p className="mt-5">kero.fi@protonmail.com</p>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Important Links</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://kero.substack.com/">News Letter</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-semibold">Social Media</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://twitter.com/CerberusResear1">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/cerberusresearch/">LinkedIn</a>
            </li>
            <li>
              <a href="https://angl.jp/norika_kizawa">Angel Port</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
