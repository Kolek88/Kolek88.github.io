
const projectsData = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products and sales data using React.",
        image: "https://via.placeholder.com/400x200/38bdf8/000000?text=Project+1", 
        tags: ["React", "Node.js", "MongoDB"],
        link: "#"
    },
    {
        title: "Weather App",
        description: "Real-time weather application connecting to OpenWeatherMap API.",
        image: "2515020_12.jpg",
        tags: ["JavaScript", "API", "CSS"],
        link: "#"
    },
    {
        title: "Portfolio Template",
        description: "A responsive portfolio template (this very website!) available for free.",
        image: "https://via.placeholder.com/400x200/38bdf8/000000?text=Project+3",
        tags: ["HTML", "CSS", "Grid"],
        link: "#"
    },
    {
        title: "Task Manager",
        description: "A productivity tool to manage daily tasks with drag-and-drop features.",
        image: "https://via.placeholder.com/400x200/38bdf8/000000?text=Project+4",
        tags: ["Vue.js", "Firebase"],
        link: "#"
    },
    {
        title: "Abu Dhabi Tourism Guide",
        description: "Abu.",
        image: "https://via.placeholder.com/400x200/38bdf8/000000?text=Project+4",
        tags: ["Node.s", "nig"],
        link: "#"
    },
        {
        title: "Task Manager",
        description: "A productivity tool to manage daily tasks with drag-and-drop features.",
        image: "https://via.placeholder.com/400x200/38bdf8/000000?text=Project+4",
        tags: ["Vue.js", "Firebase"],
        link: "#"
    },
        {
        title: "Task Manager",
        description: "A productivity tool to manage daily tasks with drag-and-drop features.",
        image: "https://via.placeholder.com/400x200/38bdf8/000000?text=Project+4",
        tags: ["Vue.js", "Firebase"],
        link: "#"
    },
];

// loops through data and build HTML
const projectContainer = document.getElementById('projects-grid');

function loadProjects() {
    projectsData.forEach(project => {
        // Create card div
        const card = document.createElement('div');
        card.classList.add('project-card');

        // Create HTML structure
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <a href="${project.link}" style="display:block; padding:20px; text-align:center; border-top:1px solid #334155; color:var(--accent); font-weight:bold;">
                View Project &rarr;
            </a>
        `;

        // Append to the container
        projectContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', loadProjects);
