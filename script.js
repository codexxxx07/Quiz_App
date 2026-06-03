// Quiz Questions Data
const quizData = {
    fullstack: [
        {
            question: "What does REST stand for in RESTful APIs?",
            options: ["Representational State Transfer", "Remote State Transfer", "Reusable State Transfer", "Responsive State Transfer"],
            correctAnswer: 0,
            difficulty: "Easy"
        },
        {
            question: "Which HTTP method is typically used to update an existing resource?",
            options: ["GET", "POST", "PUT", "DELETE"],
            correctAnswer: 2,
            difficulty: "Easy"
        },
        {
            question: "What is the purpose of MongoDB's aggregation pipeline?",
            options: ["To create indexes", "To perform data processing and transformation", "To backup data", "To create users"],
            correctAnswer: 1,
            difficulty: "Medium"
        },
        {
            question: "Which CSS property is used for flexible box layout?",
            options: ["grid", "flex", "block", "inline"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What is a closure in JavaScript?",
            options: ["A way to close browser windows", "A function that has access to variables from its outer scope", "A method to end a loop", "A type of error"],
            correctAnswer: 1,
            difficulty: "Medium"
        },
        {
            question: "Which Node.js module is used for file system operations?",
            options: ["http", "fs", "path", "os"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What is the difference between SQL and NoSQL databases?",
            options: ["NoSQL is faster only", "SQL is relational, NoSQL is non-relational", "SQL is for small data only", "NoSQL requires more memory"],
            correctAnswer: 1,
            difficulty: "Medium"
        },
        {
            question: "What does CORS stand for?",
            options: ["Cross-Origin Resource Sharing", "Cross-Origin Request System", "Cross-Origin Response Security", "Cross-Origin Resource Standard"],
            correctAnswer: 0,
            difficulty: "Medium"
        },
        {
            question: "Which React hook is used for side effects?",
            options: ["useState", "useEffect", "useContext", "useReducer"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What is the purpose of JWT (JSON Web Token)?",
            options: ["To store user passwords", "To securely transmit information between parties", "To encrypt database connections", "To compress JSON data"],
            correctAnswer: 1,
            difficulty: "Hard"
        }
    ],
    gamedev: [
        {
            question: "What is a game engine?",
            options: ["A type of game character", "Software framework for game development", "A gaming console", "A game genre"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "Which programming language is primarily used in Unity?",
            options: ["Python", "C#", "C++", "Java"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What is a sprite in game development?",
            options: ["A game character", "A 2D image or animation", "A 3D model", "A sound effect"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What does FPS stand for in gaming?",
            options: ["First Person Shooter", "Frames Per Second", "Fast Processing System", "Full Power Speed"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What is collision detection in games?",
            options: ["Detecting game bugs", "Determining when objects intersect", "Finding game cheats", "Loading game assets"],
            correctAnswer: 1,
            difficulty: "Medium"
        },
        {
            question: "Which engine uses Blueprints visual scripting?",
            options: ["Unity", "Unreal Engine", "Godot", "GameMaker"],
            correctAnswer: 1,
            difficulty: "Medium"
        },
        {
            question: "What is a game loop?",
            options: ["A game's story mode", "The core process that updates and renders game state", "A multiplayer feature", "A game menu"],
            correctAnswer: 1,
            difficulty: "Medium"
        },
        {
            question: "What does NPC stand for?",
            options: ["New Player Character", "Non-Player Character", "Network Protocol Control", "Next Player Challenge"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What is raycasting in game development?",
            options: ["Creating light effects", "A technique for rendering 3D scenes from 2D data", "Sound processing", "Network communication"],
            correctAnswer: 1,
            difficulty: "Hard"
        },
        {
            question: "What is the purpose of a physics engine in games?",
            options: ["To create game menus", "To simulate real-world physical interactions", "To manage game saves", "To handle multiplayer networking"],
            correctAnswer: 1,
            difficulty: "Medium"
        }
    ],
    uiux: [
        {
            question: "What does UI stand for?",
            options: ["User Interface", "Universal Interaction", "Unique Integration", "Unit Intelligence"],
            correctAnswer: 0,
            difficulty: "Easy"
        },
        {
            question: "What is the purpose of a wireframe?",
            options: ["Final design", "Low-fidelity visual guide", "Color palette", "Typography selection"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What is UX design focused on?",
            options: ["Visual aesthetics only", "User experience and interaction", "Code optimization", "Server configuration"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What is a mockup in design?",
            options: ["A rough sketch", "A high-fidelity static design", "A working prototype", "A user test"],
            correctAnswer: 1,
            difficulty: "Medium"
        },
        {
            question: "What does Figma allow designers to do?",
            options: ["Write code", "Create collaborative design interfaces", "Manage databases", "Host websites"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What is the 60-30-10 rule in color theory?",
            options: ["A coding principle", "A color distribution guideline", "A font sizing rule", "A layout technique"],
            correctAnswer: 1,
            difficulty: "Medium"
        },
        {
            question: "What is accessibility in design?",
            options: ["Making designs faster", "Making designs usable for people with disabilities", "Making designs cheaper", "Making designs simpler"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What is a user persona?",
            options: ["A real user", "A fictional representation of target users", "A design tool", "A testing method"],
            correctAnswer: 1,
            difficulty: "Medium"
        },
        {
            question: "What is the purpose of A/B testing?",
            options: ["To test two different designs", "To find bugs", "To optimize code", "To create animations"],
            correctAnswer: 0,
            difficulty: "Medium"
        },
        {
            question: "What is the Gestalt principle of proximity?",
            options: ["Elements close together are perceived as related", "Elements far apart are more important", "Colors should match", "Fonts should be the same"],
            correctAnswer: 0,
            difficulty: "Hard"
        }
    ],
    hacking: [
        {
            question: "What is ethical hacking?",
            options: ["Illegal hacking", "Authorized security testing", "Writing malware", "Stealing data"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What does SQL injection attack target?",
            options: ["Network hardware", "Database queries", "User passwords", "File systems"],
            correctAnswer: 1,
            difficulty: "Medium"
        },
        {
            question: "What is a firewall?",
            options: ["A heating system", "Network security system", "A hacking tool", "A database"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What is phishing?",
            options: ["Fishing for data", "Deceptive attempts to steal sensitive information", "A network protocol", "A type of firewall"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What does VPN stand for?",
            options: ["Virtual Private Network", "Very Public Network", "Visual Protocol Node", "Virtual Public Node"],
            correctAnswer: 0,
            difficulty: "Easy"
        },
        {
            question: "What is a penetration test?",
            options: ["Testing software functionality", "Simulated cyberattack to find vulnerabilities", "Testing network speed", "Testing user interfaces"],
            correctAnswer: 1,
            difficulty: "Medium"
        },
        {
            question: "What is the purpose of encryption?",
            options: ["To speed up data", "To secure data by converting it to unreadable format", "To compress data", "To backup data"],
            correctAnswer: 1,
            difficulty: "Easy"
        },
        {
            question: "What is a DDoS attack?",
            options: ["Direct data operation", "Distributed Denial of Service", "Digital data storage", "Direct data system"],
            correctAnswer: 1,
            difficulty: "Medium"
        },
        {
            question: "What is social engineering in cybersecurity?",
            options: ["Building social networks", "Manipulating people to gain access", "Engineering social media", "Creating social apps"],
            correctAnswer: 1,
            difficulty: "Medium"
        },
        {
            question: "What is the purpose of a honeypot in security?",
            options: ["To attract bees", "To detect and deflect hackers", "To store honey", "To speed up network"],
            correctAnswer: 1,
            difficulty: "Hard"
        }
    ]
};

// Game State
let currentDomain = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 15;
let correctCount = 0;
let wrongCount = 0;
let answered = false;

// DOM Elements
const domainScreen = document.getElementById('domain-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

// Select Domain
function selectDomain(domain) {
    currentDomain = domain;
    currentQuestions = [...quizData[domain]];
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    
    // Shuffle questions
    currentQuestions.sort(() => Math.random() - 0.5);
    
    showScreen('quiz');
    loadQuestion();
}

// Show Screen
function showScreen(screen) {
    domainScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    
    if (screen === 'domain') {
        domainScreen.classList.remove('hidden');
    } else if (screen === 'quiz') {
        quizScreen.classList.remove('hidden');
    } else if (screen === 'result') {
        resultScreen.classList.remove('hidden');
    }
}

// Load Question
function loadQuestion() {
    answered = false;
    const question = currentQuestions[currentQuestionIndex];
    
    // Update UI
    document.getElementById('domain-badge').textContent = currentDomain.charAt(0).toUpperCase() + currentDomain.slice(1);
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('difficulty-badge').textContent = `Difficulty: ${question.difficulty}`;
    document.getElementById('current-score').textContent = score;
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    
    // Load options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `<span class="font-medium mr-3">${String.fromCharCode(65 + index)}.</span> ${option}`;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    // Start timer
    startTimer();
}

// Start Timer
function startTimer() {
    timeLeft = 15;
    document.getElementById('timer').textContent = timeLeft;
    
    if (timer) clearInterval(timer);
    
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (!answered) {
                timeUp();
            }
        }
    }, 1000);
}

// Time Up
function timeUp() {
    answered = true;
    wrongCount++;
    
    const question = currentQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === question.correctAnswer) {
            button.classList.add('correct');
        }
    });
    
    setTimeout(() => {
        nextQuestion();
    }, 1500);
}

// Select Answer
function selectAnswer(selectedIndex) {
    if (answered) return;
    answered = true;
    
    clearInterval(timer);
    
    const question = currentQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === question.correctAnswer) {
            button.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== question.correctAnswer) {
            button.classList.add('wrong');
        }
    });
    
    if (selectedIndex === question.correctAnswer) {
        score += 10;
        correctCount++;
    } else {
        wrongCount++;
    }
    
    document.getElementById('current-score').textContent = score;
    
    setTimeout(() => {
        nextQuestion();
    }, 1500);
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    showScreen('result');
    
    const domainNames = {
        fullstack: 'Full Stack Development',
        gamedev: 'Game Development',
        uiux: 'UI/UX Design',
        hacking: 'Ethical Hacking'
    };
    
    document.getElementById('result-domain').textContent = domainNames[currentDomain];
    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('wrong-count').textContent = wrongCount;
    
    // Performance text
    let performance = '';
    if (score >= 80) {
        performance = '🏆 Pro Level!';
    } else if (score >= 50) {
        performance = '🎯 Intermediate';
    } else {
        performance = '🌱 Beginner';
    }
    document.getElementById('performance-text').textContent = performance;
    
    // High score
    const highScoreKey = `highscore_${currentDomain}`;
    const currentHighScore = localStorage.getItem(highScoreKey) || 0;
    
    if (score > currentHighScore) {
        localStorage.setItem(highScoreKey, score);
        document.getElementById('high-score').textContent = score + ' (New!)';
    } else {
        document.getElementById('high-score').textContent = currentHighScore;
    }
}

// Restart Quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    
    // Shuffle questions again
    currentQuestions.sort(() => Math.random() - 0.5);
    
    showScreen('quiz');
    loadQuestion();
}

// Change Domain
function changeDomain() {
    currentDomain = null;
    currentQuestions = [];
    showScreen('domain');
}
