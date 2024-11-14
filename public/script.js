let currentQuestionIndex = 0;
let selectedResponses = [];

// Sample questions data
const questions = [
    {
        question: "What comes to mind when you think of a tiger?",
        options: ["Animal", "Wild", "Dangerous", "Endangered", "Meat-Eater"],
        responses: {
            "Animal": "Tigers are one of the most magnificent animals in the wild.",
            "Wild": "Tigers are wild creatures, roaming vast territories.",
            "Dangerous": "Tigers can be dangerous, as they are powerful predators.",
            "Endangered": "Sadly, tigers are endangered due to habitat loss and poaching.",
            "Meat-Eater": "Tigers are carnivores, feeding primarily on meat."
        },
        nextQuestion: {
            question: "Tigers are wild animals, but what do they mostly rely on to survive?",
            options: ["Strength", "Speed", "Hunting skills", "Social groups"],
            responses: {
                "Strength": "Tigers use their incredible strength to take down large prey.",
                "Speed": "While they are fast, it's their hunting skills that are the most important.",
                "Hunting skills": "Hunting skills are critical for tigers to survive in the wild.",
                "Social groups": "Tigers are solitary animals, they don't live in social groups."
            }
        }
    }
];

function startGame() {
    document.getElementById("game-start").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    showQuestion(0);
}

function showQuestion(index) {
    currentQuestionIndex = index;
    const questionObj = questions[0];  // We only have one set of questions for now

    document.getElementById("game-question").innerText = questionObj.question;
    const choices = document.getElementById("choices");
    choices.innerHTML = ""; // Clear previous choices

    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => handleAnswer(option);
        choices.appendChild(button);
    });
}

function handleAnswer(answer) {
    const questionObj = questions[0];
    const response = questionObj.responses[answer];
    selectedResponses.push({ question: questionObj.question, answer: answer });

    document.getElementById("game-question").innerText = response;

    // If the question has a follow-up question, show it
    if (questionObj.nextQuestion) {
        setTimeout(() => {
            showNextQuestion(questionObj.nextQuestion);
        }, 1500);  // Wait 1.5 seconds before showing the next question
    } else {
        setTimeout(() => {
            endGame();
        }, 1500); // Wait before showing end game message
    }
}

function showNextQuestion(nextQuestion) {
    document.getElementById("game-question").innerText = nextQuestion.question;
    const choices = document.getElementById("choices");
    choices.innerHTML = ""; // Clear previous choices

    nextQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => handleAnswer(option);
        choices.appendChild(button);
    });
}

function endGame() {
    document.getElementById("game-question").innerText = "Thank you for playing!";
    document.getElementById("choices").style.display = "none";

    sendResponsesToHost();
}

// Login, OTP, and Email Features
function sendOtp() {
    const email = document.getElementById("email").value;
    console.log("Email entered:", email);  // Check email field value

    if (!email) {
        alert("Please enter a valid email address.");
        return;
    }

    fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        console.log("OTP send response data:", data);  // Check response data

        if (data.success) {
            // Show the OTP input section
            document.getElementById("otp-section").style.display = "block";
            console.log("OTP section is now visible");  // Confirm visibility
            alert("OTP sent to your email!");
        } else {
            alert("Failed to send OTP. Try again.");
        }
    })
    .catch(error => {
        console.error('Error sending OTP:', error);
        alert('Error sending OTP. Please try again later.');
    });
}

function verifyOtp() {
    const email = document.getElementById("email").value;
    const otp = parseInt(document.getElementById("otp").value);

    if (!otp) {
        alert("Please enter the OTP.");
        return;
    }

    fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
    })
    .then(response => {
        console.log(response);
        
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            // Redirect to the frontend project page
            window.location.href = "http://127.0.0.1:3000/zFronend%20project/index.html#";
        } else {
            alert("Invalid OTP. Please try again.");
        }
    })
    .catch(error => {
        console.error('Error verifying OTP:', error);
        alert('Error verifying OTP. Please try again later.');
    });
}




