
const resume = {
  experience: [
    {
      company: "HCLTech",
      role: "Software Engineer (Technical Lead) | .NET Full Stack",
      location: "Hyderabad, India",
      //duration: "Oct 2023 – present",
      projects: [
        {
          name: "Volvo Group — Rack Management Platform",
          bullets: [
            'Architected a microservices-based production platform using C#, ASP.NET Core, and SQL Server, reducing manual intervention by <b>40%</b>.',
            'Engineered REST APIs for serial number, component ID, and LPN validation, processing <b>5,000+ units monthly</b> and reducing response latency by <b>30%</b>.',
            'Optimized SQL Server queries, indexing, stored procedures, and transactions, increasing database throughput by <b>25%</b> and reducing query latency by <b>35%</b>.',
            'Implemented JWT authentication, RBAC, and Azure App Service deployment for secure, scalable APIs.',
            'Built Kafka-based asynchronous defect detection and automated rework-routing workflows, increasing defect closure rates by <b>40%</b>.',
            'Integrated React.js interfaces with REST and GraphQL APIs for <b>240 operators</b>, reducing manual errors by <b>35%</b>.'
          ],
          stack: "C#, .NET 6/7, ASP.NET Core, EF Core, SQL Server, Kafka, Redis, Azure, React.js"
        },
        {
          name: "Cummins-Meritor — Intelligence Platform",
          bullets: [
            'Engineered a production intelligence platform integrating real-time machine telemetry and Python data pipelines, improving operational efficiency by <b>20%</b> and reducing unplanned downtime by <b>25%</b>.',
            'Developed REST API integrations and microservices processing <b>1M+ telemetry events daily</b>.',
            'Integrated GenAI, LLM, RAG, vector databases, semantic retrieval, and agentic AI workflows for production intelligence, root cause analysis, and predictive analytics support.'
          ],
          stack: "Python, SQL Server, React.js, REST APIs, GenAI, LLMs, RAG, Vector Databases"
        }
      ]
    }
  ],

  skills: [
    {
      category: "Programming Languages",
      items: ["C#", "JavaScript", "Python", "C++"]
    },
    {
      category: "Backend Technologies",
      items: [
        ".NET 6/7", "ASP.NET Core Web API", "REST APIs", "GraphQL",
        "Microservices", "Distributed Systems", "Dependency Injection",
        "Middleware", "Asynchronous Processing"
      ]
    },
    {
      category: "Databases & Caching",
      items: [
        "SQL Server", "Redis", "Query Optimization",
        "Indexing", "Stored Procedures", "Transactions"
      ]
    },
    {
      category: "Frontend",
      items: ["React.js", "HTML5", "CSS3", "JavaScript", "Angular"]
    },
    {
      category: "Cloud & DevOps",
      items: [
        "Microsoft Azure", "Azure App Service", "AWS",
        "Docker", "Git", "CI/CD", "ServiceNow"
      ]
    },
    {
      category: "Architecture & Design",
      items: [
        "HLD", "LLD", "OOD", "SOLID Principles",
        "API Design", "SDLC"
      ]
    }
  ],

  projects: [
    {
      name: "Replit — Online Code Editor",
      description: [
        "Built an online code editor supporting rapid project initialization across popular frameworks.",
        "Implemented isolated Docker-based remote code execution environments.",
        "Automated frontend deployment using AWS S3 and Redis queues."
      ],
      stack: "Node.js, Socket.io, Docker, AWS S3, Redis"
    }
  ]
};

// Render experience
document.getElementById("experience-container").innerHTML =
  resume.experience.map(job => `
    <div class="card">
      <h3>${job.company} — ${job.role}</h3>
      <p>${job.location} 
    //  | ${job.duration}
      </p>

      ${job.projects.map(project => `
        <h4>${project.name}</h4>
        <ul class="experience-list">
          ${project.bullets.map(bullet =>
            `<li>${bullet}</li>`
          ).join("")}
        </ul>
        <p class="tech-stack">
          <b>Tech Stack:</b> ${project.stack}
        </p>
      `).join("")}
    </div>
  `).join("");

// Render skills
document.getElementById("skills-container").innerHTML =
  resume.skills.map(group => `
    <div class="card skill-card">
      <h3>${group.category}</h3>
      <div class="skill-tags">
        ${group.items.map(skill =>
          `<span class="skill-tag">${skill}</span>`
        ).join("")}
      </div>
    </div>
  `).join("");

// Render projects
document.getElementById("projects-container").innerHTML =
  resume.projects.map(project => `
    <div class="card">
      <h3>${project.name}</h3>
      <ul>
        ${project.description.map(item =>
          `<li>${item}</li>`
        ).join("")}
      </ul>
      <p class="tech-stack">
        <b>Tech Stack:</b> ${project.stack}
      </p>
    </div>
  `).join("");
