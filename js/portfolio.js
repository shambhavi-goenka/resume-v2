// Data for each project
const projects = [
{
    title:"Dobble",
    description:"Online version of Dobble/Spot-It character matching game",
    imageSrc:"dobble.png",
    link:"https://github.com/shambhavi-goenka/dobble",
    techStack: ["React"]
},
{
    title:"DogPals",
    description:"Dog dating website with live chat and geomapping.",
    imageSrc:"dogpals.png",
    link:"https://github.com/shambhavi-goenka/DogPals",
    techStack: ["PHP", "SQL", "GCP"]
},
{
    title:"Booking App",
    description:"Facility management app for Singapore Sports School",
    imageSrc:"attractionbooking.png",
    link:"https://github.com/shambhavi-goenka/SingaporeSportsSchool",
    techStack: ["Java", "PostgreSQL", "React"]
},
{
    title:"Battlebots",
    description:"Generate win prediction based on pre- interview scripts",
    imageSrc:"battlebots.png",
    link:"https://github.com/shambhavi-goenka/Battlebots",
    techStack: ["Python", "TensorFlow"]
},
{
    title: "TikTok",
    description: "A cloned version of TikTok - without ads",
    imageSrc: "tiktok.png",
    link: "https://github.com/shambhavi-goenka/tiktok-clone",
    techStack: [ "Next.js", "Typescript", "Appwrite" ]
},
{
    title: "Storytime",
    description: "An interactive way of storytelling",
    imageSrc: "storytime.png",
    link: "https://github.com/shambhavi-goenka/storytime",
    techStack: [ "React", "Three.js" ]
},
{
    title:"Crime Visualisation",
    description:"Geospatial analysis and mapping on crime",
    imageSrc:"crimevis.png",
    link:"https://github.com/shambhavi-goenka/IndiaCrime",
    techStack: ["R", "Shiny"]
},
{
    title:"Eye Strain Detection",
    description:"Blink rate detection and mapping",
    imageSrc:"eyestrain.png",
    link:"https://github.com/shambhavi-goenka/Eye-Strain",
    techStack: ["Python", "HiveMQ"]
},
{
    title:"Pause",
    description:"IOS app for journalling to improve mental health",
    imageSrc:"pause.png",
    link:"https://github.com/shambhavi-goenka/Pause",
    techStack: ["Swift", "SQL"]
},
{
    title:"Our LinkedIn",
    description:"A modular platform for searching and posting jobs",
    imageSrc:"jobsearch.png",
    link:"https://github.com/shambhavi-goenka/JobSearch",
    techStack: ["Python", "Docker", "RabbitMQ"]
}
]
  



// Get the portfolio grid container
const portfolioGrid = document.getElementById('portfolioGrid');

// Function to create a portfolio card
function createPortfolioCard(project) {
// Create the card container
const card = document.createElement('div');
card.classList.add('portfolio-card');

// Create and append the project image
const image = document.createElement('img');
image.src = "./assets/portfolio/" + project.imageSrc;
image.alt = project.title;
image.classList.add('project-image');
card.appendChild(image);

// Create the card content container
const content = document.createElement('div');
content.classList.add('card-content');

// Create and append the project title
const title = document.createElement('h3');
title.classList.add('project-title');
title.textContent = project.title;
content.appendChild(title);

// Create and append the project description
const description = document.createElement('p');
description.classList.add('project-description');
description.textContent = project.description;
content.appendChild(description);

// Create and append the tech stack container
const techStack = document.createElement('div');
techStack.classList.add('tech-stack');

// Loop through the tech stack array and create tech pills
project.techStack.forEach(tech => {
    const techPill = document.createElement('span');
    techPill.classList.add('tech-pill');
    techPill.textContent = tech;
    techStack.appendChild(techPill);
});
content.appendChild(techStack);

// Create and append the project link
const link = document.createElement('a');
link.href = project.link;
link.target = "_blank";
link.classList.add('project-link');
link.textContent = 'View Project';
content.appendChild(link);

// Append the content to the card
card.appendChild(content);

// Append the card to the portfolio grid
portfolioGrid.appendChild(card);
}

// Loop through the projects array and create a card for each project
projects.forEach(project => createPortfolioCard(project));

