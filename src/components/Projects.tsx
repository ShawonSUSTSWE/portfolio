import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  github?: string;
  image?: string;
  portfolio?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Kriyakarak",
      description:
        "A creative booking platform where users can discover and book creative professionals according to their schedule. I worked on the reservation, payment, refund, and search modules, and also designed the landing page.",
      tags: ["React", "TypeScript", "AWS", "Docker", "Redis", "MongoDB", "Express", "Node.js", "TailwindCSS", "Socket.IO"],
      live: "https://kriyakarak.com",
      image: "/Kriyakarak.png",
    },
    {
      title: "Cypress",
      description:
        "An automotive resale intelligence platform that analyzes market data to suggest the optimal time to sell a car and at what price, helping users maximize their vehicle's resale value.",
      tags: ["Ruby on Rails", "PostgreSQL", "Next.js", "TypeScript", "AWS", "Docker"],
      live: "https://cypress.bizmotionapp.com/",
      image: "/cypress.webp",
    },
    {
      title: "Mapage — Stylist App",
      description:
        "A hair stylist booking platform where professionals set up their page and manage their calendar availability. Clients can browse stylists and book appointments based on the stylist's provided schedule.",
      tags: ["Next.js", "Node.js", "MongoDB", "Express", "TailwindCSS"],
      image: "/mapage-stylist1.png",
      portfolio: "https://shellbeehaken.com/portfolio/3",
      live: "https://introduction.mapage.net/"
    },
    {
      title: "Mapage — User App",
      description:
        "The customer-facing side of Mapage where users discover nearby hair stylists, view available time slots, and book appointments seamlessly.",
      tags: ["Next.js", "React", "TypeScript", "TailwindCSS"],
      image: "/mapage-user2.png",
      portfolio: "https://shellbeehaken.com/portfolio/2",
      live: "https://mapage.net/"
    },
    {
      title: "Mapage — E-Commerce",
      description:
        "An e-commerce extension of Mapage where hair stylists can list and sell their professional products, and users can browse and purchase them directly.",
      tags: ["Next.js", "Stripe", "MongoDB", "Node.js"],
      image: "/mapage-ec2.png",
      portfolio: "https://shellbeehaken.com/portfolio/1",
      live: "https://mapage.net/"
    },
    {
      title: "Mapage Space",
      description:
        "A salon management platform where multiple hair stylists can collectively offer their services to customers, manage bookings, and coordinate schedules within a shared salon space.",
      tags: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
      image: "/mapage-space1.png",
      portfolio: "https://shellbeehaken.com/portfolio/4",
      live: "https://mapage.net/"
    },
    {
      title: "UUORK",
      description:
        "A virtual company management platform that brings talents across the globe to create remote project teams. Designed to increase operational efficiency with seamless project tracking, workflow management, and team collaboration tools.",
      tags: ["React", "TypeScript", "Node.js", "MongoDB", "AWS", "Socket.IO"],
      image: "/uuork1.png",
      live: "https://uuork.de",
      portfolio: "https://shellbeehaken.com/portfolio/8",
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-label">What I&apos;ve Built</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A collection of professional projects showcasing my skills across
            full-stack development, payments, booking systems, and more.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card fade-in-up" key={i}>
              <div className="project-image">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={340}
                    style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  />
                ) : (
                  <div className="project-image-placeholder" />
                )}
              </div>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      🔗 Source Code
                    </a>
                  )}
                  {project.portfolio && (
                    <a href={project.portfolio} target="_blank" rel="noopener noreferrer" className="project-link">
                      🔗 Portfolio
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      🌐 Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
