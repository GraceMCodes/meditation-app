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


const visualizations = [
    { title: "Guided visualization for relaxation", url: "https://www.youtube.com/watch?v=sample1" },
    { title: "Morning Visualization to Start Your Day", url: "https://www.youtube.com/watch?v=sample2" }
];

const visualizationList = document.getElementById('s'); 
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
    console.error('Element with ID "s" not found.');
}

// Lectures.

const lectures = [
    { title: "Mindfulness and Meditation by Coach A", url: "https://www.youtube.com/watch?v=lecture1" },
    { title: "Overcoming Stress by Coach B", url: "https://www.youtube.com/watch?v=lecture2" }
];

const lectureList = document.getElementById('leactureList');  // Correct ID here
if (lectureList) {
    lectures.forEach(lecture => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = lecture.url;
        link.textContent = lecture.title;
        link.target = "_blank";
        listItem.appendChild(link);
        lectureList.appendChild(listItem);
    });
} else {
    console.error('Element with ID "leactureList" not found.');
}

// meditations
const meditation = [
    { title :"Align with your higher-self: Guided meditation by Abraham Hicks", url : "https://youtu.be/Px155sUj1cg?si=ixluS8a7DARpdedd" },
    {title: "Before you sleep meditation : Manifest your desires by Neville Goddard", url : "https://youtu.be/CKWUr-c-S9g?si=DFZ6GYcnRBCpchsy"},
];
const meditationList = document.getElementById('meditationList');

if (meditationList){
    meditation.forEach( meditation => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = meditation.url;
        link.textContent = meditation.title;
        link.target = "_blank";
        listItem.appendChild(link);
        meditationList.appendChild(listItem);
    });
} else{
    console.error('Element with ID "meditationList" not found');
}
// Journalling Promps
const journalingPrompts = [
    "What are you grateful for today?",
  "What is one challenge you're facing, and how do you plan to overcome it?",
  "What positive habits can you focus on this week?",
  "How do you define success in your life?",
  "What is something you learned about yourself recently?"
];
 
function generatePrompt(){
 const randomIndex = Math.floor(Math.random() * journalingPrompts.length);
 const promptDisplay = document.getElementById('promptDisplay');
 promptDisplay.textContent =journalingPrompts[randomIndex];
};
