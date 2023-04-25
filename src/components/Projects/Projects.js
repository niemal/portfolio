import styled from "styled-components";
import ConnectorBubble from "../ConnectorBubble";
import Project from "../Project";
import { QUERIES } from "../constants";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  gap: 120px;
  padding-bottom: 40px;

  @media ${QUERIES.tabletAndSmaller} {
    max-width: 600px;
  }
`;

const projects = [
  {
    name: "city-events",
    image: "/portfolio/city-events.png",
    live: "https://niemal.dev/city-events/",
    webdesign: "Self-made",
    code: "https://github.com/niemal/city-events/",
    description:
      "A full-stack implementation of a self-preserving platform for festivals and abstract events: Cloudinary CDN fully implemented. Auth0 was used to power the user management in conjuction with some custom MongoDB processing. Custom profile picture and information ontop Auth0's social/universal login. Used a very powerful rich text-editor and rendering for post creation, plate. Custom administration for approving new posts to publish. Implemented google maps and geolocation coordinates storage. Promoting SEO (json+ld) optimizations according to Google standards by providing appropriate profile metadata fields. Some cypress testing. Devised a crawler to automatically copy and create content from festivals/events websites so the platform is always populated with content. TODO: Devise a custom feed wall for users with the possibility of notifications on new events, filtered by optional proximity, categories and/or keywords.",
    languages: ["javascript", "react", "nextjs", "html", "css", "mongodb"],
  },
  {
    name: "REST countries",
    image: "/portfolio/rest-countries.png",
    live: "https://niemal.github.io/frontendmentor_17/",
    webdesign: "Provided by exercise (pictures, not figma)",
    code: "https://github.com/niemal/frontendmentor_17/",
    description:
      "A very straight-forward and widely done one could say project. I did not use any APIs because I didn't deem it necessary (although I could), but I implemented a very powerful combobox with react-window and downshift. Furthermore I implemented react-window properly on all devices which sums up for very good virtualized performance.",
    languages: ["javascript", "react", "html", "css"],
  },
  {
    name: "Fylo landing page",
    image: "/portfolio/fylo.png",
    live: "https://niemal.github.io/frontendmentor_18/",
    webdesign: "Provided by exercise (pictures, not figma)",
    code: "https://github.com/niemal/frontendmentor_18/",
    description:
      "Standard front-end implementation from a picture. Added a nice touch of animations (framer-motion) through-out to make it more appealing and tried to be creative on my own. Furthermore, I crafted a nice-looking button leveraging a looped animation.",
    languages: ["javascript", "react", "html", "css"],
  },
  {
    name: "My blog",
    image: "/portfolio/blog.png",
    live: "https://niemal.dev/blog/",
    webdesign: "Early steps into web-design, self made",
    code: "https://github.com/niemal/blog-diary/",
    description:
      "My first project with nextjs! It was a very entertaining experience learning through this project (not so good looking but it surely did the job). Automated e-mail sending on new posts, fully statically served (re-building on every new post). Smooth parallax lading-page (with react-spring) and markdown plaintext post-writing.",
    languages: ["javascript", "react", "nextjs", "html", "css"],
  },
  {
    name: "Jobs",
    image: "/portfolio/jobs.png",
    live: "https://niemal.dev/jobs/",
    webdesign: "Early steps into web-design, self made",
    code: "https://github.com/niemal/jobs/",
    description:
      "My second project with nextjs. A very expiremental web-design with the CSS skew property having fun all around. Key concepts: The ability to use multiple servers if need be for dedicated crawling. Custom overall statistics for the software engineering job market skills. Ready for custom use stand-alone API. Utilizing virtualization and powerful filtering, one can search for a job with specific skill-sets.",
    languages: ["javascript", "react", "nextjs", "html", "css", "mongodb"],
  },
  {
    name: "Multi-step card component",
    image: "/portfolio/card_component.png",
    live: "https://niemal.github.io/frontendmentor_16/",
    webdesign: "Provided by exercise (pictures, not figma)",
    code: "https://github.com/niemal/frontendmentor_16/",
    description:
      "One of my best pixel-to-pixel implementations from just a picture. Leveraging react context and finishing it up with an exquisite confetti animation, I am very proud of this project.",
    languages: ["javascript", "react", "html", "css"],
  },
];

function Projects() {
  return (
    <Wrapper id={"projects"}>
      <ConnectorBubble>PROJECTS</ConnectorBubble>
      {projects.map((proj, index) => (
        <Project key={`project-${index}`} project={proj} />
      ))}
    </Wrapper>
  );
}

export default Projects;
