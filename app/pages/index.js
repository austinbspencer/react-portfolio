import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { profile, cover } from "../assets/images";
import HeroImage from "@/components/hero/HeroImage";
import { NextSeo } from "next-seo";
import FadeContainer from "@/components/transitions/FadeContainer";
import { getProjects } from "@/lib/api";
import Projects from "@/components/projects/Projects";
import Title from "@/components/header/Title";
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollToTop from "@/components/scroll/ScrollToTop";
import ParallaxBanner from "@/components/hero/ParallaxBanner";

const Seo = () => (
  <NextSeo
    title="Austin's Portfolio"
    description="This small site is to showcase a little bit about Austin's skills and information about him."
    openGraph={{
      url: "https://austinbspencer.com",
      title: "Austin's Portfolio",
      description:
        "This small site is to showcase a little bit about Austin's skills and information about him.",
      images: [
        {
          url: profile.src,
          width: profile.width,
          height: profile.height,
          alt: "Austin's profile image",
          type: "image/png",
        },
      ],
      site_name: "Austin's Portfolio",
    }}
    twitter={{
      handle: "@austinbspencer",
      site: "@austinbspencer.com",
      cardType: "summary_large_image",
    }}
  />
);

const Home = ({ projects }) => {
  return (
    <>
      <Seo />
      <ScrollToTop />
      <ParallaxBanner img={cover} strength={0}>
        <FadeContainer timeout={2000}>
          <Typography variant="h3" color="text.light" sx={{ p: 2 }}>
            Austin's Porfolio
          </Typography>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Button
              variant="contained"
              // sx={{ color: "white", borderColor: "white" }}
            >
              about Austin
            </Button>
          </Link>
        </FadeContainer>
      </ParallaxBanner>
      <Title title="Projects" id="projects" />
      <Projects projects={projects} />
    </>
  );
};

export default Home;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every day in seconds
    revalidate: 60 * 60 * 24, // In seconds
  };
}
