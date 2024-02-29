/* eslint-disable no-unused-vars */
import { useState } from 'react';

import Navbar from '../../components/Navbar';
import MobNav from '../../ui/MobNav';
import Pricing from '../../components/Price';
import Consultation from '../../components/Consultation';
import Faq from '../../components/Faq';
import CallToAction from '../../components/CallToAction';
import Footer from '../../components/Footer';

function PricePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" h-[100%] min-h-screen  ">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen ? (
        <MobNav />
      ) : (
        <>
          <Pricing />
          <Consultation />
          <Faq />
          <CallToAction />
          <Footer />
        </>
      )}
    </div>
  );
}
export default PricePage;
