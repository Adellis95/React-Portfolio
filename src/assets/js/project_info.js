import rickAndMortyAdventure from "../../assets/thumbnails/Rick-Morty.png";
import javascriptCodeQuiz from "../../assets/thumbnails/Javascript-Quiz.png";
import workDayScheduler from "../../assets/thumbnails/Work-Day-Scheduler.png";
import weatherDash from "../../assets/thumbnails/Weather-Dashboard.png";
import employeeDirectory from "../../assets/thumbnails/Employee-Directory.png";
import cyberSanta from "../../assets/thumbnails/Cyber-Santa.png";

const projectInfo = [
    {
        title: "An odd Rick and Morty Adventure!",
        description: 'We designed an application based on the Rick and Morty Television show. Once, the user clicks the start journey button on the website, the user is sent on journey to various worlds, where they are offered different bad life advice.',
        repo: "https://github.com/Adellis95/Project-1",
        url: "https://adellis95.github.io/Project-1/",
        image: rickAndMortyAdventure,
    },
    {
        title: "JavaScript Quiz",
        description: 'This is a quiz application using HTML, CSS, and Javascript. This application emphasizes the use of Javascript to provide quiz questions and collect user data to determine whether the answers to a question are correct, this then generates a score and appends a final page of results from the user data.',
        repo: "https://github.com/Adellis95/JavaScript-Quiz",
        url: "https://adellis95.github.io/JavaScript-Quiz/",
        image: javascriptCodeQuiz,
    },
    {
        title: "A Work Day Scheduler",
        description: "Using HTML, CSS, and Javascript I created a day planner with an nine-hour work day and the save button saves the user's input into local storage. The application is able to calculate the current date and time by using moment.js to call the system time settings on your device.",
        repo: "https://github.com/Adellis95/Work-Day-Scheduler",
        url: "https://adellis95.github.io/Work-Day-Scheduler/",
        image: workDayScheduler,
    },
    {
        title: "Weather Dashboard",
        description: 'This application is a Weather Dashboard that applies API calling with JQuery to make dynamic changes to the HTML which provides Weather data for a user input city.',
        repo: "https://github.com/Adellis95/Weather-Dashboard",
        url: "https://adellis95.github.io/Weather-Dashboard/",
        image: weatherDash,
    },
    {
        title: "Employee Directory",
        description: "For this assignment, I had to create an employee directory with React. This assignment required me to break up the application's UI into components, manage component state, and respond to user events. Employee data was generated with the randomuser.me API.",
        repo: "https://github.com/Adellis95/Employee-Directory",
        url: "https://adellis95.github.io/Employee-Directory/",
        image: employeeDirectory,
    },
    {
        title: "Cyber Santa",
        description: 'This application is a four page responsive codebase created to provide an accessible and centralized location for users to create, update, delete and view their own Christmas lists or lists of other users. This site can be used to store their own customized Christmas list and populate it with their gift ideas.',
        repo: "https://github.com/Adellis95/Project-2",
        url: "https://project-2-cyber-santa.herokuapp.com/",
        image: cyberSanta,
    },
];

export default projectInfo;