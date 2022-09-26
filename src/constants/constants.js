export const projects = [
  {
    title: "CapTrack V2",
    description:
      "Using Next.js, Django & Postgresql to build a full stack web application from scratch. The App is called CapTrack and it is V2 of a web application built to help stock and option traders track their trades. The intention of the app is to help traders improve and make better trades by giving insightful information on their trades.",
    image: "/images/captrack.png",
    tags: ["Next.js", "Django", "Python", "REST API"],
    source: "https://captrack.laudecapital.com",
    visit: "https://github.com/laude-capital",
    id: 0,
  },
  {
    title: "Twitter Bot",
    description:
      "A Python script to automate Twitter functions for personal or commercial use. Integrated with Redis database and run as a Docker container on Kubernetes cluster. README on Master branch has detailed instructions for setting everything up, including, running on the cloud with Google or AWS.",
    image: "/images/python.jpeg",
    tags: ["Python", "Redis", "Cloud", "Docker"],
    source: "https://twitter.com/InternTendie",
    visit: "https://github.com/austinbspencer/twitter-bot",
    id: 1,
  },
  {
    title: "Algorithmic Trading",
    description:
      "Algorithms built with Python for live stock trading. Uses Alpaca Trade API for live trading and stock information. Incorporates Redis for persisting data and is ran as a Docker image in the Cloud.",
    image: "/images/alpaca.png",
    tags: ["Python", "Redis", "API", "Docker"],
    source: "https://laudecapital.com",
    visit: "https://github.com/austinbspencer/alpaca-python",
    id: 2,
  },
  {
    title: "Go RESTful API",
    description:
      "RESTful API built with Go and Redis. I love the combination of Go and Redis as my back-end for my websites. I think Go is an awesome programming language and combined with the ease and speed of Redis is hard to beat.",
    image: "/images/go.svg",
    tags: ["Go", "Redis", "Docker"],
    source: "https://guldentech.com/austinapi/",
    visit: "https://github.com/austinbspencer/go-backend",
    id: 3,
  },
];

export const websites = [
  {
    title: "Gretchen Louise Photography",
    description:
      "This webpage was built for Gretchen Louise Photography to display their work and attract new clients. Full-stack web application built with Next.js and DJango and deployed as a container within Kubernetes.",
    image: "/images/gretch.png",
    tags: ["Next.js", "Django", "API", "Postgresql"],
    // source: "https://laudecapital.com",
    visit: "https://gretchenlouisephotography.com",
    id: 2,
  },
  {
    title: "Battle of the States",
    description:
      "This is a full-stack web application I built for the Battle of the States. This website offers a fantasy sports league where you can compete for your state. Built with Next.js, Go, Postgresql, and Redis. Deployed with Docker and Kubernetes.",
    image: "/images/4thpoint.png",
    tags: ["Next.js", "Golang", "Redis", "Postgresql"],
    // source: "https://laudecapital.com",
    visit: "https://4thpoint.com",
    id: 3,
  },
  {
    title: "Spotify Webapp",
    description:
      "Webapp built to allow Spotify users to view stats and info for their personal Spotify profile. Has the ability to give recommendations and view Artist, Song, and Playlist statistics. Built with Vue.js and Vuetify.js and deployed within GitHub Pages.",
    image: "/images/spotify.png",
    tags: ["Vue.js", "API", "Vuex", "JavaScript"],
    // source: "https://twitter.com/InternTendie",
    visit: "https://git.austinbspencer.com/#/spotify",
    id: 1,
  },
  {
    title: "Mason Spencer Lives On",
    description:
      "This website was built for the Mason Spencer Lives On non-profit. The purpose of the site is for exposure and knowledge on HLH/XLP2. Built with WordPress and deployed as a container within Kubernetes.",
    image: "/images/mason.png",
    tags: ["WordPress", "CSS", "JavaScript"],
    // source: "https://captrack.laudecapital.com",
    visit: "https://masonspencerliveson.com",
    id: 0,
  },
];

export const TimeLineData = [
  { year: 2018, text: "Started my development journey" },
  { year: 2019, text: "Transferred to ASU to pursue CS degree" },
  { year: 2020, text: "Solutions Center Intern at Salt River Project" },
  { year: 2021, text: "Data Engineering Intern at USAA" },
];
