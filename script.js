const projects = [
    {
        title: "Bursa Malaysia Stock Tracker",
        bullets: [
            "A live financial dashboard that tracks stock market portfolios and overall performance metrics",
            "The project uses Python, Streamlit, and the yfinance library to fetch and display real-time market data",
            "Uses a PostgreSQL database to securely store, extract, and manage financial records"
        ],
        readmeLink: "https://github.com/Kolek88/BursaStockTracker/blob/main/README.md",      
        demoLink: "https://bursastocktracker-klhqfrbndhfvcvckxnc3f3.streamlit.app/",        
        mediaLink: "bursa-media.html" // I also updated this to your new media page!
    },
    {
        title: "Healthcare Analytics Dashboard",
        bullets: [
            "A data visualization tool designed to track, analyze, and display key hospital metrics",
            "The project uses Python and Streamlit to create a responsive and interactive user interface",
            "Processes complex healthcare datasets to uncover trends and support data-driven decision making"
        ],
        readmeLink: "#",
        demoLink: "#",
        mediaLink: "#"
    },
    {
        title: "Steam Data Dashboard",
        bullets: [
            "An interactive dashboard built to visualize PC gaming trends, player statistics, and game metrics",
            "Developed utilizing Python and Streamlit to filter and display dynamic gaming data",
            "Extracts and cleans large datasets to present clear, actionable insights through visual charts"
        ],
        readmeLink: "#",
        demoLink: "#",
        mediaLink: "#"
    },
    {
        title: "EcoStay Web Application",
        bullets: [
            "Developed an ESG-themed web application to track and display sustainability metrics",
            "Built the front-end using HTML, CSS, and JavaScript, with Python integrated for data processing",
            "Designed and implemented an analytics dashboard and a secure user authentication system"
        ],
        readmeLink: "#",
        demoLink: "#",
        mediaLink: "#"
    },
    {
        title: "Floral Bouquet",
        bullets: [
            "A flower shop website that sells floral arrangements and manages inventory",
            "The website is built using HTML and CSS for a responsive storefront layout",
            "Utilizes SQL as the database to securely store and manage user login information"
        ],
        readmeLink: "#",
        demoLink: "#",
        mediaLink: "#"
    }
];

function loadProjects() {
    const container = document.getElementById("projects-grid");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.title;
        card.appendChild(title);

        const ul = document.createElement("ul");
        project.bullets.forEach(bullet => {
            const li = document.createElement("li");
            li.textContent = bullet;
            ul.appendChild(li);
        });
        card.appendChild(ul);

        // --- NEW: Create Buttons Container ---
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "card-buttons";

        // Helper function to create a button if a link exists
        const createButton = (text, link, className) => {
            if (link) {
                const btn = document.createElement("a");
                btn.href = link;
                btn.target = "_blank"; // Opens in a new tab
                btn.className = `btn-card ${className}`;
                btn.textContent = text;
                buttonContainer.appendChild(btn);
            }
        };

        createButton("README", project.readmeLink, "btn-outline");
        createButton("Live Demo", project.demoLink, "btn-primary");
        createButton("Media", project.mediaLink, "btn-outline");

        card.appendChild(buttonContainer);
    });
}

window.onload = loadProjects;