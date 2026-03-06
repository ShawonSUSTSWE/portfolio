export default function Projects() {
  const projects = [
    {
      title: "Twitter Clone",
      description:
        "A scalable CRUD-based social media app built with Next.js and MongoDB, implementing RESTful APIs and user authentication. Features real-time feed updates and responsive design.",
      tags: ["Next.js", "MongoDB", "REST API", "Node.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Chirper",
      description:
        "A real-time chat application built with Firebase, Java, and Android Studio, enabling secure messaging and media sharing across devices with a smooth native experience.",
      tags: ["Firebase", "Java", "Android Studio", "Real-time"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Coming Soon",
      description:
        "More exciting projects are on the way. Stay tuned for innovative solutions spanning full-stack web development, system design, and cloud-native applications.",
      tags: ["React", "TypeScript", "AWS", "Docker"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-label">What I&apos;ve Built</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A collection of personal and professional projects showcasing my
            skills and interests.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card fade-in-up" key={i}>
              <div className="project-image">
                <div className="project-image-placeholder" />
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
                  <a href={project.github} className="project-link">
                    🔗 Source Code
                  </a>
                  <a href={project.live} className="project-link">
                    🌐 Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
