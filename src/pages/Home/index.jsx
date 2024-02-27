import Advice from '../../components/Advice';
import CallToAction from '../../components/CallToAction';
import Company from '../../components/Company';
import Hero from '../../components/Hero';
import Leadbot from '../../components/Leadbot';
import MoreLeads from '../../components/MoreLeads';
import Navbar from '../../components/Navbar';
import Review from '../../components/Review';
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
      <Review />
      <CallToAction />
    </div>
  );
};
export default Home;
