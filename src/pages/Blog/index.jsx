/* eslint-disable no-unused-vars */
import { useState } from 'react';

import Navbar from '../../components/Navbar';
import MobNav from '../../ui/MobNav';
import BlogFeture from '../../components/BlogFeture';
import BlogList from '../../components/BlogList';
import Footer from '../../components/Footer';

function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" h-[100%] min-h-screen  ">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen ? (
        <MobNav />
      ) : (
        <>
          <BlogFeture />
          <BlogList />
          <Footer />
        </>
      )}
    </div>
  );
}
export default BlogPage;
