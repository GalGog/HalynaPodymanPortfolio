import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import { FunFactWriter } from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import { ResumeSectionWritter } from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import { SkillsWritter } from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>I'm <strong>Halyna Podyman</strong> a proactive and solution-oriented graduate in Computer Science, holding an upper second-class honours degree from London South Bank University. With a year of experience as a Junior Front End Developer, I have proficiently constructed websites following web standards, ensuring cross-browser compatibility, responsive design, and clean code practices. My passion lies in enhancing the usability of various interfaces and elevating user experience to new heights. I am now eager to expand my skills and knowledge in the field of UX design. </p>`;

const serviceList = [
  {
    icon: "fa fa-code",
    title: "Web Development ",
    desc: "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
  {
    icon: "fa fa-lightbulb-o ",
    title: "UX Design",
    desc: "I understand the perfect user interface should look good and work even better. I uncover problems and solve them in efficient ways to create bolder online experiences.",
  },
  {
    icon: "fa fa-video-camera",
    title: "Content creation",
    desc: "Writing, video/photo editing, graphic design, and social media management to create compelling content.",
  },
];

const animationText = ["UX designer", "Web Developer"];

const Index7 = () => {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-7-colors.css" />
        <link rel="stylesheet" href="css/new-skin/classic-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
      </Head>
      <Header noSideBarBtn animationText={animationText} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/profile6.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Halyna Podyman</div>
          {/*<div class="subtitle">Web Designer</div>*/}
          <TypingAnimation data={animationText} />

          {/* profile socials */}
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://rb.gy/2ew0d">
              <span className="fa fa-linkedin" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Download CV</span>
              <span className="ion ion-android-attach" />
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Hire Me</span>
              <span className="ion ion-android-mail" />
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services serviceList={serviceList} />
          <Clients />
          <FunFactWriter />
        </About>
        <Resume>
          <ResumeSectionWritter />
          <SkillsWritter />
          <Testimonials />
        </Resume>
        <Work>
          <RecentWorks user={"writer"} />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index7;
