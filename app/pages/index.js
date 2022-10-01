import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import StickyContent from "@/components/StickyContent";
import React from "react";
import logo from "@/public/logo.png";
import config from "../config";
import { NextSeo } from "next-seo";

const SEO = () => (
  <NextSeo
    title="Austin's Portfolio"
    description="I am Austin Spencer, a full-time data engineer with a passion for programming and problem solving :)"
    openGraph={{
      title: "Austin's Portfolio",
      description:
        "I am Austin Spencer, a full-time data engineer with a passion for programming and problem solving :)",
      images: [
        {
          url: config.baseURL + logo.src,
          width: logo.width,
          height: logo.height,
          alt: "Profile Avatar",
          type: "image/png",
        },
      ],
    }}
  />
);

const index = () => {
  return (
    <React.Fragment>
      <SEO />
      <Hero />
      <StickyContent />
      <Footer />
    </React.Fragment>
  );
};

export default index;
