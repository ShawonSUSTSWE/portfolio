export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Bizmotion Ltd.",
      date: "Oct 2025 – Present",
      bullets: [
        "Engineered and maintained high-performance backend services using Ruby on Rails and PostgreSQL for a large-scale automotive resale intelligence platform.",
        "Designed and built production-grade, data-heavy dashboards and interactive UI flows using Next.js, with a strong focus on frontend performance, UX quality, and scalable UI architecture.",
        "Built core logic for predicting optimal car resale timing, leveraging historical pricing models and market trend analysis.",
        "Optimized summary-generation pipelines, reducing API latency and processing time significantly through query tuning, background job optimization and caching strategies.",
        "Improved system reliability and scalability by implementing performance monitoring, request profiling, and CI/CD-driven deployment workflows.",
      ],
    },
    {
      role: "Software Engineer L-I",
      company: "ShellBeeHaken Ltd.",
      date: "Jan 2025 – Sep 2025",
      bullets: [
        "Led a team of 5 engineers, mentoring junior developers and conducting code reviews, leading to a 45% reduction in bugs and timely delivery of a project.",
        "Reduced average API response time by 33%, significantly improving system throughput and user experience for high-traffic endpoints.",
        "Enhanced system reliability by troubleshooting complex applications and implementing scalable caching (Redis) and logging solutions.",
        "Authored comprehensive technical documentation, improving onboarding time for new engineers and facilitating smoother knowledge transfer.",
      ],
    },
    {
      role: "Associate Software Engineer",
      company: "ShellBeeHaken Ltd.",
      date: "Aug 2023 – Dec 2024",
      bullets: [
        "Developed scalable RESTful APIs using Node.js and TypeScript, enabling seamless integration between microservices and frontend clients.",
        "Implemented modern UI/UX designs using HTML5, CSS3, Tailwind CSS, and SCSS, enhancing user engagement through pixel-perfect implementation of design prototypes.",
        "Integrated and maintained secure payment workflows using Stripe, Bkash, and SSLCommerz APIs, enabling seamless local and international transactions, subscription management, and refund processing.",
        "Optimized database performance by writing efficient stored procedures and managing large-scale databases in MongoDB.",
        "Developed and deployed serverless functions using AWS Lambda to handle asynchronous tasks and reduce infrastructure overhead, resulting in improved scalability and cost optimization.",
      ],
    },
    {
      role: "Intern Software Engineer",
      company: "ShellBeeHaken Ltd.",
      date: "Feb 2023 – Jul 2023",
      bullets: [
        "Acquired hands-on experience with modern full-stack technologies including Next.js, React.js, Express.js, and MongoDB, aligning with industry standards for scalable web application development.",
        "Contributed to the development of production-grade APIs for live projects, following best practices in API design, versioning, and error handling to ensure reliability and maintainability.",
        "Applied principles of Agile development and version control using Git, participating in daily standups and code reviews to enhance code quality and team collaboration.",
      ],
    },
  ];

  return (
    <section className="section" id="experience">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-label">Career Path</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            A journey of growth, leadership, and impactful engineering across
            multiple companies and roles.
          </p>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div className="experience-card fade-in-up" key={i}>
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-date">{exp.date}</span>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
