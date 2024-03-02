/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Footer from '../../../../components/Footer';
import Navbar from '../../../../components/Navbar';
import MobNav from '../../../../ui/MobNav';
import BlogHeading from '../../../../components/BlogHeading';
import SingleBlogPost from '../../../../components/SingleBlogPost';

const BlogPost = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" h-[100%] min-h-screen  ">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen ? (
        <MobNav />
      ) : (
        <>
          <BlogHeading />
          <SingleBlogPost />
          <Footer />
        </>
      )}
    </div>
  );
};
export default BlogPost;
