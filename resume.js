
const resume = {
  
profile: {
  name: "Dhanavath Balaji",

  headline: "Software Engineer (.NET Full Stack)",
  specialization: "Backend & Distributed Systems",

  description:
    "Building scalable APIs, cloud-native applications, and AI-powered backend solutions using .NET, Azure, React, and modern distributed technologies.",

  resumeUrl:
    "https://drive.google.com/drive/folders/1wVV3IW_x9gFIGVhrkGAjkL-8PosXFxx_",

  aboutIntro: "🎓 IIT Guwahati Graduate",

  aboutParagraphs: [
    "I am a Software Engineer with 2.4+ years of professional experience at HCLTech, specializing in backend engineering, full-stack development, and scalable enterprise applications.",

    "My experience includes building microservices-based production systems for Volvo Group, developing high-throughput REST APIs, optimizing SQL Server performance, and implementing secure cloud-native applications using Microsoft Azure.",

    "I have also worked on the Cummins-Meritor Intelligence platform, integrating real-time machine telemetry, Python data pipelines, and GenAI technologies, including LLMs, RAG, vector databases, and agentic AI workflows for production intelligence and analytics."
  ],

  highlights: [
    {
      title: "Backend Engineering",
      details: "C#, .NET 6/7, ASP.NET Core, REST APIs, EF Core"
    },
    {
      title: "Distributed Systems",
      details: "Microservices, Kafka, Redis, asynchronous processing"
    },
    {
      title: "Full Stack Development",
      details: "React.js, JavaScript, HTML, CSS, GraphQL"
    },
    {
      title: "Cloud & Security",
      details: "Azure App Service, JWT authentication, RBAC"
    },
    {
      title: "AI Engineering",
      details: "Python, GenAI, LLMs, RAG, vector databases"
    },
    {
      title: "System Design",
      details: "HLD, LLD, SOLID principles, SQL optimization"
    }
  ]
},
  experience: [
    {
      company: "HCLTech",
      role: "Software Engineer (Technical Lead) | .NET Full Stack",
      location: "Hyderabad, India",
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


const profile = resume.profile;

// Render Home section
document.getElementById("hero-name").textContent =
  profile.name;

const heroTitle = document.getElementById("hero-title");
heroTitle.replaceChildren();

heroTitle.append(
  document.createTextNode(profile.headline + " | ")
);

const specialization = document.createElement("span");
specialization.textContent = profile.specialization;
heroTitle.append(specialization);

document.getElementById("hero-description").textContent =
  profile.description;

document.getElementById("resume-link").href =
  profile.resumeUrl;


// Render About introduction
document.getElementById("about-intro").textContent =
  profile.aboutIntro;


// Render About paragraphs
const aboutContent = document.getElementById("about-content");

profile.aboutParagraphs.forEach(paragraph => {
  const p = document.createElement("p");
  p.textContent = paragraph;
  aboutContent.appendChild(p);
});


// Render About highlights
const aboutHighlights =
  document.getElementById("about-highlights");

profile.highlights.forEach(item => {
  const li = document.createElement("li");
  const title = document.createElement("b");

  title.textContent = item.title + ": ";
  li.appendChild(title);
  li.appendChild(document.createTextNode(item.details));

  aboutHighlights.appendChild(li);
});
