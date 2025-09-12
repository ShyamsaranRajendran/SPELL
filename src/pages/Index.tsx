import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import CallForPapers from "../components/CallForPapers";
import ImportantDates from "../components/ImportantDates";
import Organizers from "../components/Organizers";
import InvitedSpeakers from "../components/InvitedSpeakers";
import SubmissionGuidelines from "../components/SubmissionGuidelines";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <CallForPapers />
      <ImportantDates />
      <Organizers />
      <InvitedSpeakers />
      <SubmissionGuidelines />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
