import AboutSection from "./components/aboutSection";
import ContactSection from "./components/contactSection";
import Container from "./components/container";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import ProjectsSection from "./components/projectsSection";
import SkillsSection from "./components/skillsSection";

const App = () => {
  return (
    <Container>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </Container>
  );
};

export default App;
