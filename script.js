const applications = [
    {
        title: "Medical Imaging",
        description: "AI detects diseases in X-rays and MRIs with incredible precision.",
        image: "MI.jpg",
    },
    {
        title: "Virtual Health Assistants",
        description: "AI-powered chatbots provide 24/7 support for patients.",
        image: "VHI.jpeg",
    },
    {
        title: "Predictive Analytics",
        description: "Analyze patient data to predict and prevent diseases.",
        image: "PA.jpeg",
    },
    {
        title: "Remote Monitoring",
        description: "AI enables continuous monitoring of patients at home.",
        image: "RM.jpeg",
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const appContainer = document.getElementById("app-container");

    applications.forEach((app) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${app.image}" alt="${app.title}">
            <h3>${app.title}</h3>
            <p>${app.description}</p>
        `;

        appContainer.appendChild(card);
    });

    console.log("Applications loaded successfully.");
});
