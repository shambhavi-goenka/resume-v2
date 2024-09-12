// Define an array of projects with links for each one
const projectsOther = [
    {
        name:"Dobble",
        description:"Online version of Dobble/Spot-It character matching game",
        link:"https://github.com/shambhavi-goenka/dobble",
        items: ["React"]
    },
    {
        name:"DogPals",
        description:"Dog dating website with live chat and geomapping.",
        link:"https://github.com/shambhavi-goenka/DogPals",
        items: ["PHP", "SQL", "GCP"]
    },
    {
        name:"Booking App",
        description:"Facility management app for Singapore Sports School",
        link:"https://github.com/shambhavi-goenka/SingaporeSportsSchool",
        items: ["Java", "PostgreSQL", "React"]
    },
    {
        name:"Battlebots",
        description:"Generate win prediction based on pre- interview scripts",
        link:"https://github.com/shambhavi-goenka/Battlebots",
        items: ["Python", "TensorFlow"]
    },
    {
        name: "TikTok",
        description: "A cloned version of TikTok - without ads",
        link: "https://github.com/shambhavi-goenka/tiktok-clone",
        items: [ "Next.js", "Typescript", "Appwrite" ]
    },
    {
        name: "Storytime",
        description: "An interactive way of storytelling",
        link: "https://github.com/shambhavi-goenka/storytime",
        items: [ "React", "Three.js" ]
    },
    {
        name:"Crime Visualisation",
        description:"Geospatial analysis and mapping on crime",
        link:"https://github.com/shambhavi-goenka/IndiaCrime",
        items: ["R", "Shiny"]
    },
    {
        name:"Eye Strain Detection",
        description:"Blink rate detection and mapping",
        link:"https://github.com/shambhavi-goenka/Eye-Strain",
        items: ["Python", "HiveMQ"]
    },
    {
        name:"Pause",
        description:"IOS app for journalling to improve mental health",
        link:"https://github.com/shambhavi-goenka/Pause",
        items: ["Swift", "SQL"]
    },
    {
        name:"Our LinkedIn",
        description:"A modular platform for searching and posting jobs",
        link:"https://github.com/shambhavi-goenka/JobSearch",
        items: ["Python", "Docker", "RabbitMQ"]
    }
]

// Get the container where the projects will be inserted
const projectsList = document.getElementById("projectsList");

// Loop through each project and create the HTML structure
projectsOther.forEach(project => {
    // Create the main project container
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item-other");

    // Create the project text (name and description)
    const projectText = document.createElement("div");
    projectText.classList.add("project-text-other");
    projectText.innerHTML = `<h5>${project.name}</h5>${project.description}`;
    projectItem.appendChild(projectText);

    // Create the project button container
    const projectButtons = document.createElement("div");
    projectButtons.classList.add("project-buttons-other");

    // Create the clickable anchor (styled as a button)
    const link = document.createElement("a");
    link.href = project.link;
    link.textContent = "Details"; // The link text
    projectButtons.appendChild(link);
    projectItem.appendChild(projectButtons);

    // Create the project items container
    const projectItems = document.createElement("div");
    projectItems.classList.add("project-items-other"); //TO FIX - third column item - wrap text on overflow - fix width and let columns be in one line
    const itemList = document.createElement("ul");

    project.items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        itemList.appendChild(listItem);
    });

    projectItems.appendChild(itemList);
    projectItem.appendChild(projectItems);

    // Append the project item to the projects list
    projectsList.appendChild(projectItem);
});
