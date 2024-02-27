import Company from '../../components/Company';
import Hero from '../../components/Hero';
import Leadbot from '../../components/Leadbot';
import Navbar from '../../components/Navbar';
import Slide from '../../components/Slide';
import Start from '../../components/Start';

const Home = () => {
  return (
    <div className=" h-[100%] min-h-screen  ">
      <Navbar />
      <Hero />
      <Company />
      <Slide />
      <Start />
      <Leadbot />
    </div>
  );
};
export default Home;
