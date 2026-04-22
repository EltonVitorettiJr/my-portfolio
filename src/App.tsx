import AboutSection from "./components/aboutSection";
import ContactSection from "./components/contactSection";
import Container from "./components/container";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import ProjectsSection from "./components/projectsSection";
import SkillsSection from "./components/skillsSection";
import VerticalBar from "./components/verticalBar";

const App = () => {
  return (
    <Container>
      <Header />
      <VerticalBar />
      <div className="p-10 md:ml-45 md:pr-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <Footer />
    </Container>
  );
};

export default App;
