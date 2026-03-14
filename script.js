const projects = [
    {
        title: "Bursa Malaysia Stock Tracker",
        bullets: [
            "A live financial dashboard that tracks stock market portfolios and overall performance metrics",
            "The project uses Python, Streamlit, and the yfinance library to fetch and display real-time market data",
            "Uses a PostgreSQL database to securely store, extract, and manage financial records"
        ]
    },
    {
        title: "Healthcare Analytics Dashboard",
        bullets: [
            "A data visualization tool designed to track, analyze, and display key hospital metrics",
            "The project uses Python and Streamlit to create a responsive and interactive user interface",
            "Processes complex healthcare datasets to uncover trends and support data-driven decision making"
        ]
    },
    {
        title: "Steam Data Dashboard",
        bullets: [
            "An interactive dashboard built to visualize PC gaming trends, player statistics, and game metrics",
            "Developed utilizing Python and Streamlit to filter and display dynamic gaming data",
            "Extracts and cleans large datasets to present clear, actionable insights through visual charts"
        ]
    },
    {
        title: "EcoStay Web Application",
        bullets: [
            "Developed an ESG-themed web application to track and display sustainability metrics",
            "Built the front-end using HTML, CSS, and JavaScript, with Python integrated for data processing",
            "Designed and implemented an analytics dashboard and a secure user authentication system"
        ]
    },
    {
        title: "Floral Bouquet",
        bullets: [
            "A flower shop website that sells floral arrangements and manages inventory",
            "The website is built using HTML and CSS for a responsive storefront layout",
            "Utilizes SQL as the database to securely store and manage user login information"
        ]
    }
];

// Function to load projects into the HTML
function loadProjects() {
    const container = document.getElementById("project-container");

    projects.forEach(project => {
        // Create the card container
        const card = document.createElement("div");
        card.className = "project-card";

        // Create the title
        const title = document.createElement("h3");
        title.textContent = project.title;
        card.appendChild(title);

        // Create the bullet points list
        const ul = document.createElement("ul");
        project.bullets.forEach(bullet => {
            const li = document.createElement("li");
            li.textContent = bullet;
            ul.appendChild(li);
        });
        card.appendChild(ul);

        // Add the card to the main container
        container.appendChild(card);
    });
}

// Run the function when the page loads
window.onload = loadProjects;