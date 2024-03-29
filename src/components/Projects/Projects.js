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
    name: "UnitedGPT",
    image: "/portfolio/unitedgpt.png",
    live: "https://unitedgpt.app/",
    webdesign: "Self-made",
    code: "https://github.com/niemal/unitedgpt",
    description:
      "UnitedGPT is an innovative, real-time collaborative platform designed to enhance the capabilities of Chat GPT by enabling users to share, manage, and interact with GPT outputs in a dynamic and engaging environment. At the core of its architecture, UnitedGPT leverages the robustness of MySQL and the high-performance data handling of Redis to ensure seamless user experiences and efficient data management. Real-time Interaction Interface: It allows users to explore GPT questions with others in real-time, providing inspiration and education. Key features of this platform include: Real-time Interaction Interface: It allows users to explore GPT questions with others in real-time, providing inspiration and education. Live Sharing of Prompts: Users can share their Chat GPT prompts live in a dedicated room. Customizable Context: The platform enables customization of the Chat GPT context, utilizing the output of previous prompts to strengthen the model's focus. Management of Chat GPT Keys: Users can manage and share their Chat GPT keys for use within a room, and also use their own Chat GPT keys within these room. Parallel Prompt Processing: It offers the ability to run multiple prompts in parallel, helping to compress context overflow. Model Settings Configuration: Users have the option to define the Chat GPT model's settings according to their preferences. Organizational Structure: The platform allows for the creation of organizations, enabling friends to create organizational rooms and manage accessibility. Message Pinning for Reference: There's a feature to pin room messages for future reference or use their context for future applications. Folder-Based Prompt Management: Users can start Chat GPT prompts from folders with broadcast and view permissions. Community Sharing: The platform facilitates sharing folders and prompts with a chosen community. Prompt Templates: Users can utilize prompt templates to streamline their interactions.",
    languages: ["typescript", "react", "nextjs", "html", "css", "mysql"],
  },
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
