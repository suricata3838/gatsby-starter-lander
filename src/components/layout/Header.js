import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

let url="https://kero.substack.com/p/coming-soon";
const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center">
        <div className="w-12 mr-1">
          <img src="cerberus.png" width="142" height="142"/>
        </div>
      </div>
      <div className="flex mt-3 sm:mt-0">
        <AnchorLink className="px-3" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-3" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-3" href="#stats">
          Stats
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm"><a style={{ color: "white" }} href={url}>Subscribe</a></Button>
      </div>
    </div>
  </header>
);

export default Header;
