import Company from '../../components/Company';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import Slide from '../../components/Slide';

const Home = () => {
  return (
    <div className=" h-[100%] min-h-screen  ">
      <Navbar />
      <Hero />
      <Company />
      <Slide />
    </div>
  );
};
export default Home;
