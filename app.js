// affrimations
const  affirmations = [
    "I am confident and capable.",
    "I attract positivity and success.",
    "I am in control of my own destiny.",
    "I am calm and at peace.",
    "I am grateful for all that I have.",
    "I am worthy",
    "I am enough!"
]

function generateAffirmations() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmationDisplay = document.getElementById('affirmationDisplay');
    affirmationDisplay.textContent = affirmations[randomIndex];
}
// Visualizations
// const  visualizations = [
//     {title :"Guided visualization for relaxation", url: "https://www.youtube.com/watch?v=sample1" },
//     {title : "Morning Visualization to Start Your Day", url: "https://www.youtube.com/watch?v=sample2" }
// ];
//  const visualizationList = document.getElementById('visualizationList');
//  visualizations.forEach( video =>{
//     const listItem = document.createElement('li');
//     const link = document.createElement('a');
//     link.href = video.url;
//     link.textContent = video.title;
//     link.target ="_blank";
//    listItem.appendChild(link);
//    visualizationList.appendChild(listItem);
//  }
//  )

const visualizations = [
    { title: "Guided visualization for relaxation", url: "https://www.youtube.com/watch?v=sample1" },
    { title: "Morning Visualization to Start Your Day", url: "https://www.youtube.com/watch?v=sample2" }
];

const visualizationList = document.getElementById('visualizationList'); 
if (visualizationList) {
    visualizations.forEach(video => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = video.url;
        link.textContent = video.title;
        link.target = "_blank";
        listItem.appendChild(link);
        visualizationList.appendChild(listItem);
    });
} else {
    console.error('Element with ID "visualizationList" not found.');
}
