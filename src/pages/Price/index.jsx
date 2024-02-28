/* eslint-disable no-unused-vars */
import { useState } from 'react';

import Advice from '../../components/Advice';
import CallToAction from '../../components/CallToAction';
import Company from '../../components/Company';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Leadbot from '../../components/Leadbot';
import MoreLeads from '../../components/MoreLeads';
import Navbar from '../../components/Navbar';
import Review from '../../components/Review';
import Slide from '../../components/Slide';
import Start from '../../components/Start';
import MobNav from '../../ui/MobNav';

function PricePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" h-[100%] min-h-screen  ">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen ? <MobNav /> : <></>}
    </div>
  );
}
export default PricePage;
