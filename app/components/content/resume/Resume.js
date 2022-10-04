import React from "react";
import resume from "@/public/assets/resume.png";
import { Header, Segment } from "semantic-ui-react";
import { useRouter } from "next/router";

const Resume = () => {
  const router = useRouter();

  return (
    <Segment raised id="resume">
      <img
        class="ui fluid image link"
        onClick={() => router.push("/resume.pdf")}
        alt="resume"
        src={resume.src}
      ></img>
    </Segment>
  );
};

export default Resume;
