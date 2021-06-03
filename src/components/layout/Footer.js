import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Address</h2>
        <p className="mt-5">LIG bldg. 2-20-11 Kojima, Taito City, Tokyo  〒111-0056</p>
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
            <a href="https://twitter.com/suricata3838">CEO Twitter</a>
          </li>
          <li>
            <a href="https://angl.jp/norika_kizawa">Angel Port</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
