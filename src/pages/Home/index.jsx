import Advice from '../../components/Advice';
import Company from '../../components/Company';
import Hero from '../../components/Hero';
import Leadbot from '../../components/Leadbot';
import MoreLeads from '../../components/MoreLeads';
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
      <MoreLeads />
      <Advice />
    </div>
  );
};
export default Home;
