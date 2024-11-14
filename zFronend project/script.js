const questions = [
    {
        question: "What is a tiger? Write the first word that comes to your mind. (Don't think too much!)",
        options: ["Animal", "Wild", "Dangerous", "Endangered", "Meat-Eater/Man-Eater"],
        responses: {
            "Animal": "Tigers are animals, and they are truly magnificent creatures in the wild.",
            "Wild": "Yes, tigers are wild creatures that roam across vast territories.",
            "Dangerous": "Indeed, tigers can be dangerous, as they are powerful and agile predators.",
            "Endangered": "Sadly, tigers are endangered due to habitat loss and poaching.",
            "Meat-Eater/Man-Eater": "Tigers are carnivores, primarily feeding on meat, and occasionally seen as dangerous to humans."
        },
        nextQuestionIndex: 1
    },
    {
        question: "Others chose these: Which three do you agree with the most?",
        options: ["Animal", "Wild", "Dangerous", "Endangered", "Meat-Eater/Man-Eater"],
        responses: {
            "Animal": "Being a large mammal, the tiger has a crucial role in the ecosystem.",
            "Wild": "As wild animals, tigers play a key role in maintaining balance in nature.",
            "Dangerous": "Tigers are apex predators, maintaining population control in their habitats.",
            "Endangered": "Tiger populations are unfortunately dwindling due to various threats.",
            "Meat-Eater/Man-Eater": "Tigers primarily prey on animals, and only rarely interact dangerously with humans."
        },
        nextQuestionIndex: 2
    },
    {
        question: "In Bengal, the tiger is imagined in various ways. Which of these aspects do you relate to the most?",
        options: ["A powerful, possessive, loyal lover", "A loving child, playful and mischievous", "An irritating neighbor one needs to chase off"],
        responses: {
            "A powerful, possessive, loyal lover": "In Bengal, the tiger is seen as a loyal yet possessive figure, almost as if it were a devoted partner.",
            "A loving child, playful and mischievous": "The tiger is sometimes seen as a playful child, with its antics adding liveliness to the jungle.",
            "An irritating neighbor one needs to chase off": "Sometimes, the tiger is seen as a nuisance, an unwelcome presence in human settlements."
        },
        nextQuestionIndex: 3
    },
    {
        question: "In this image, we see a tiger skin laid out. What emotions or thoughts does this invoke?",
        options: ["Power", "Tragedy", "Decoration", "Souvenir", "Colonial Symbol"],
        responses: {
            "Power": "Tiger skins were historically seen as symbols of power and masculinity.",
            "Tragedy": "Many feel sadness or loss seeing tigers reduced to trophies.",
            "Decoration": "Tiger skins have also been used as decorative items by the wealthy.",
            "Souvenir": "Tiger parts were often taken as souvenirs, representing dominance.",
            "Colonial Symbol": "During colonial times, tiger skins symbolized imperial control over nature."
        },
        nextQuestionIndex: 4
    },
    {
        question: "This vintage matchbox depicts a tiger fight. What might this image suggest?",
        options: ["Fear", "Heroism", "Cultural Symbol", "Strength", "Colonial Attitude"],
        responses: {
            "Fear": "Tigers were often portrayed as fearful creatures to be conquered.",
            "Heroism": "Images like this depict humans as heroes who face tigers bravely.",
            "Cultural Symbol": "The tiger is deeply embedded in cultural stories and symbols.",
            "Strength": "Tigers symbolize strength and resilience, even when faced with threats.",
            "Colonial Attitude": "This depiction reflects a colonial attitude of humans dominating wildlife."
        },
        nextQuestionIndex: 5
    },
    {
        question: "This figurine shows a tiger attacking a human. What message do you think this conveys?",
        options: ["Animal Retaliation", "Colonial Fear", "Strength of Nature", "Artistic Expression", "Warning"],
        responses: {
            "Animal Retaliation": "This could be interpreted as nature fighting back against human interference.",
            "Colonial Fear": "Colonial societies often feared wildlife as a symbol of untamed lands.",
            "Strength of Nature": "The figurine could represent the raw power and unpredictability of nature.",
            "Artistic Expression": "It may simply be an artistic piece depicting a story or myth.",
            "Warning": "Perhaps it serves as a warning about respecting wild animals."
        },
        nextQuestionIndex: 6
    },
    {
        question: "What does the quote 'The tiger has to eat to live, we also have to eat to stay alive' signify?",
        options: ["Human-Tiger Conflict", "Mutual Survival", "Environmental Balance", "Compassion", "Hopeless Situation"],
        responses: {
            "Human-Tiger Conflict": "This highlights the ongoing conflict between human needs and tiger habitats.",
            "Mutual Survival": "Both humans and tigers must survive, creating competition for resources.",
            "Environmental Balance": "The statement suggests a delicate balance within shared habitats.",
            "Compassion": "The quote reflects an understanding of the tiger's basic survival needs.",
            "Hopeless Situation": "It also shows the struggle of both species within limited resources."
        },
        nextQuestionIndex: 7
    },
    {
        question: "The image reflects the contrast between 'cherished' and 'forgotten.' Which aspect stands out to you the most?",
        options: ["National Symbolism", "Marginalized Communities", "Social Stigma", "Economic Hardship", "Human-Wildlife Conflict"],
        responses: {
            "National Symbolism": "The tiger, once cherished as a national symbol, contrasts sharply with the struggles of marginalized communities living alongside them.",
            "Marginalized Communities": "The image highlights the tiger widows, marginalized women from forager communities facing economic and social struggles.",
            "Social Stigma": "In these communities, tiger widows face social stigma, often labeled as cursed or unlucky for their husbands' deaths.",
            "Economic Hardship": "Tiger widows face economic hardship, lacking adequate support and turning to dangerous work for survival.",
            "Human-Wildlife Conflict": "The lives of tiger widows reveal the ongoing human-wildlife conflict in regions like the Sundarbans, where survival comes at a high risk."
        },
        nextQuestionIndex: 8
    },
    {
        question: "The image contrasts different types of books and their accessibility. What aspect resonates most with you?",
        options: ["Language and Accessibility", "Local Knowledge", "Economic Barriers", "Cultural Representation", "Global vs. Local Perspectives"],
        responses: {
            "Language and Accessibility": "Books in local languages are more accessible to native communities, while English titles often reach global audiences but may exclude locals.",
            "Local Knowledge": "Locally published books often contain unique knowledge that reflects the lived experiences and heritage of local communities.",
            "Economic Barriers": "High prices of international books make them less accessible to many, while local publications are often affordable but limited in reach.",
            "Cultural Representation": "Local literature reflects diverse cultural identities, which can be overshadowed by globally dominant narratives.",
            "Global vs. Local Perspectives": "The image highlights the difference between global perspectives, often prioritized, and local narratives that are sometimes marginalized."
        },
        nextQuestionIndex: 9
    },
    {
        question: "This image contrasts the picturesque depiction of tourism in the Sundarbans with the daily struggles of local residents. What stands out to you most?",
        options: ["Inequality", "Climate Change", "Everyday Life", "Heritage", "Institutional Support"],
        responses: {
            "Inequality": "The contrast highlights disparities between the tourist experience and the lives of local communities who face hardship.",
            "Climate Change": "Rising sea levels and frequent flooding threaten the infrastructure and livelihoods of people in this region.",
            "Everyday Life": "For local residents, daily life involves resilience and adapting to challenging conditions that outsiders may overlook.",
            "Heritage": "The Sundarbans hold cultural significance, but the heritage of the area and its people are often overshadowed by tourism.",
            "Institutional Support": "The image questions the level of institutional support provided to these communities in the face of environmental and economic challenges."
        },
        nextQuestionIndex: 10
    },
    {
        question: "In the Sundarbans, locals wear masks on the back of their heads to prevent tiger attacks. What do you think this practice signifies?",
        options: ["Human Ingenuity", "Fear of Tigers", "Coexistence with Nature", "Local Knowledge", "Modern Folklore"],
        responses: {
            "Human Ingenuity": "This practice shows human creativity in adapting to the dangers posed by tigers in the wild.",
            "Fear of Tigers": "The masks reflect the locals' fear of tigers and their need for protection while working in tiger habitats.",
            "Coexistence with Nature": "It signifies an attempt to coexist with dangerous wildlife without harming them.",
            "Local Knowledge": "The use of masks highlights traditional knowledge and local strategies to handle tiger encounters.",
            "Modern Folklore": "This practice has become a modern-day legend, symbolizing the ongoing struggle with nature’s powerful creatures."
        },
        nextQuestionIndex: 11
    },
    {
        question: "In this image, tourists are excited to see tigers, while locals have different emotions. What might this contrast reveal?",
        options: ["Tourist Fascination", "Local Fear", "Economic Benefit", "Environmental Impact", "Cultural Clash"],
        responses: {
            "Tourist Fascination": "Tourists see tigers as exotic, but locals often view them as a threat.",
            "Local Fear": "The image reflects the fear that locals may have towards tigers due to past experiences or threats to livelihood.",
            "Economic Benefit": "Tourism brings economic benefits, but the gains are often unevenly distributed among local communities.",
            "Environmental Impact": "The presence of tourists might disturb the natural habitat, affecting both tigers and locals.",
            "Cultural Clash": "The contrast highlights differing perspectives between outsiders and locals regarding wildlife and conservation."
        },
        nextQuestionIndex: 12
    },
    {
        question: "The tiger in your mind is very, VERY different from the tiger in the minds and lived realities of the peoples from the Sunderbans. Do you agree?",
        options: ["Yes", "No", "It's Complicated"],
        responses: {
            "Yes": "You recognize that personal perceptions of tigers can differ greatly from those of people who live alongside them.",
            "No": "You feel that your perception of tigers aligns closely with the views of locals living near them.",
            "It's Complicated": "You acknowledge that perceptions are complex, shaped by both personal views and shared cultural stories."
        },
        nextQuestionIndex: 13
    },
    {
        question: "Is the tiger in our minds eating the tigers and peoples out there, out of our sight?",
        options: ["Yes", "No", "It's Complicated"],
        responses: {
            "Yes": "You believe that our perceptions and ideas about tigers may negatively impact real-world tigers and the communities around them.",
            "No": "You feel that our mental images of tigers do not have a direct effect on actual tigers or local people.",
            "It's Complicated": "You recognize that while our perceptions might influence actions, the real-world effects are complex and interconnected."
        },
        nextQuestionIndex: 14
    },
    {
        question: "What do you think when you hear the word 'tiger'?",
        options: ["Strength and power", "Endangered species", "Beautiful stripes", "Fearsome predator"],
        responses: {
            "Strength and power": "Tigers symbolize strength and resilience, admired for their physical prowess.",
            "Endangered species": "Tigers are endangered, and conservation efforts are critical to ensure their survival.",
            "Beautiful stripes": "Their unique stripe patterns make tigers one of the most visually striking animals in the world.",
            "Fearsome predator": "As apex predators, tigers are both feared and respected in the wild."
        },
        
    }
];


let userResponses = [];  // Array to store user responses
let currentQuestionIndex = 0;

function startGame() {
    document.getElementById("game-start").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("restart-button").style.display = "none"; // Hide restart button when starting a new game
    userResponses = [];  // Clear previous responses
    currentQuestionIndex = 0;
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const questionObj = questions[index];
    
    document.getElementById("game-question").innerText = questionObj.question;
    const choices = document.getElementById("choices");
    choices.innerHTML = "";

    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => handleAnswer(option, index);
        choices.appendChild(button);
    });
}

function handleAnswer(answer, index) {
    const questionObj = questions[index];
    const response = questionObj.responses[answer];

    // Store the question and selected answer
    userResponses.push({
        question: questionObj.question,
        selectedAnswer: answer,
        response: response
    });

    document.getElementById("game-question").innerText = response;

    // Move to the next question after a delay
    if (typeof questionObj.nextQuestionIndex === 'number') {
        currentQuestionIndex = questionObj.nextQuestionIndex;
        setTimeout(() => {
            showQuestion(currentQuestionIndex);
        }, 1500);  // Wait 1.5 seconds before showing the next question
    } else {
        setTimeout(() => {
            endGame();
        }, 1500);
    }
}

function endGame() {
    document.getElementById("game-question").innerText = "Thank you! The game is over.";
    document.getElementById("choices").innerHTML = ""; // Clear choices to avoid clutter

    // Display user responses at the end of the game
    const responsesContainer = document.getElementById("responses");
    responsesContainer.innerHTML = "<h3>Your Responses:</h3>";
    userResponses.forEach(response => {
        const responseItem = document.createElement("p");
        responseItem.innerHTML = `<strong>Question:</strong> ${response.question}<br>
                                  <strong>Your Answer:</strong> ${response.selectedAnswer}<br>
                                  <strong>Response:</strong> ${response.response}`;
        responsesContainer.appendChild(responseItem);
    });

    // Show the Restart button
    document.getElementById("restart-button").style.display = "inline-block";
}

function restartGame() {
    // Hide the Restart button and reset responses
    document.getElementById("restart-button").style.display = "none";
    document.getElementById("responses").innerHTML = "";  // Clear previous responses display
    startGame();  // Restart the game by calling startGame again
}

// Function to reload the page for Home button
function reloadPage() {
    location.reload();
}

// Function to open sidebar and display content
function openSidebar(contentType) {
    const sidebar = document.getElementById("sidebar");
    const sidebarContent = document.getElementById("sidebar-content");

    if (contentType === 'about') {
        sidebarContent.innerHTML = `
            <h2>About Us</h2>
            <p>Welcome to the Tiger Story Game. Learn more about the fascinating world of tigers and how this game connects us to their stories and challenges.</p>
            <p>Assistant Professor <br>Tonisha Guin <br>School of Liberal Arts (SOLA) <br><br><br><br> Created by :- <br>  <br>Mayank Kumar <br><br> Naveen Choudhary <br><br> Abhishek Kumar</p>
        `;
    } else if (contentType === 'contact') {
        sidebarContent.innerHTML = `
            <h2>Contact Us</h2>
            <p>For more information or to get in touch, please email us at <br><br>tonisha@iitj.ac.in(Work) <br><br>or call +91-291-280-1407(Work).</p>
        `;
    }

    sidebar.classList.add("show-sidebar");
}
// Function to close the sidebar
function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("show-sidebar");  // Remove class to hide the sidebar
}



