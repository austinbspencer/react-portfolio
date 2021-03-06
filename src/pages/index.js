import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import Websites from "../components/Websites/Websites";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import { ArrowContainer, BouncyLink, DownArrow } from "../layout/LayoutStyles";
import Link from "next/link";
import { FaAngleDoubleDown } from "react-icons/fa";
import Skills from "../components/Skills/Skills";
import GrowContainer from "../components/Transitions/GrowContainer";
// import ProfileImage from "../components/ProfileImage/ProfileImage";
// import { Div } from "../components/ProfileImage/ProfileImageStyles";

const Home = () => {
  return (
    <Layout>
      <GrowContainer timeout={1500}>
        <Section hero>
          <Section grid>
            <Hero />
            <BgAnimation />
          </Section>
          <ArrowContainer>
            <DownArrow>
              <Link href="#projects">
                <BouncyLink>
                  <FaAngleDoubleDown size="4rem" />
                </BouncyLink>
              </Link>
            </DownArrow>
          </ArrowContainer>
        </Section>
      </GrowContainer>
      <Projects />
      <Websites />
      <Technologies />
      <Timeline />
      {/* <Section grid>
        <Skills />
        <Div>
          <ProfileImage />
        </Div>
      </Section> */}
      <Skills />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
