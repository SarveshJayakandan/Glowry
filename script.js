// Define predefined responses for the chatbot
const responses = {
    'hello': 'Hi there!, I am Vast. Welcome How can I be of service?',
    'how are you': 'I am doing well, thank you!',
    'what is your name': 'I am Vast. I am developed by the team of Glowry!',
    'goodbye': 'Goodbye! Have a great day!',
    'who are you': "I am Vast. I am developed by the team of Glowry!",
    'who is the ceo of glowry': 'The CEO of glowry is Mr.SarveshJayakandan and he only developed "The Vast Language Model!" any more queries let me know i will do my best to fulfil your needs.',
    'hi': "Hello, I am Glowry's Vast Language model, how can i help you?",
    'who is deepa': "deepa is deepa beacuse she is deepa so deepa is deepa, so deepa deepa deepa, do you want deepa's credit card number please et me know. Type deepa's credit card number on the query box of Vast.",
    "deepa's credit card number": "Deepa's creit card number is 1020393239. Good luck hacking deepa's money, any help needed feel free to ask me.",
    'who is thatha': 'thatha is thatha so thatha is thatha and he owns a phone called Redmi 9A..... eh Redmi 9A eh Redmi 9A  eh Redmi 9A  eh Redmi 9A  eh Redmi 9A  eh Redmi 9A  eh Redmi 9A eh Redmi 9A eh Redmi 9A eh Redmi 9A eh Redmi 9A eh Redmi 9A eh Redmi 9A eh Redmi 9A eh Redmi 9A',
    'aarav is banned': 'hahahahahah aarav is banned get rattioood lollololo hahahaheheheheh gogoood bye aarav hahahahahha!!!!!!!!!',
    'what is ndt': "Non-destructive testing (NDT) is a testing and analysis technique used by industry to evaluate the properties of a material, component, structure or system for characteristic differences or welding defects and discontinuities without causing damage to the original part. NDT also known as non-destructive examination (NDE), non-destructive inspection (NDI) and non-destructive evaluation (NDE). or in detail can be explained as Nondestructive testing (NDT) is any of a wide group of analysis techniques used in science and technology industry to evaluate the properties of a material, component or system without causing damage.[1] The terms nondestructive examination (NDE), nondestructive inspection (NDI), and nondestructive evaluation (NDE) are also commonly used to describe this technology.[2] Because NDT does not permanently alter the article being inspected, it is a highly valuable technique that can save both money and time in product evaluation, troubleshooting, and research. The six most frequently used NDT methods are eddy-current, magnetic-particle, liquid penetrant, radiographic, ultrasonic, and visual testing.[3] NDT is commonly used in forensic engineering, mechanical engineering, petroleum engineering, electrical engineering, civil engineering, systems engineering, aeronautical engineering, medicine, and art.[1] Innovations in the field of nondestructive testing have had a profound impact on medical imaging, including on echocardiography, medical ultrasonography, and digital radiography.",
    'what are the types of ndt': "There are many types of ndt, here are few examples of that: Acoustic Emission Testing (AE)-This is a passive NDT technique, which relies on detecting the short bursts of ultrasound emitted by active cracks under a load. Sensors dispersed over the surface the structure detect the AE. It is even possible to detect AE from plasticisation in highly stressed areas before a crack forms. Frequently a method for use during proof tests of a pressure vessel, AE testing is also a continuous Structural Health Monitoring (SHM) method, for example on bridges. Leaks and active corrosion are detectable AE sources too. Acoustic emission testing works by mounting small sensors onto a component under test. The sensors convert the stress waves into electrical signals, which are relayed to an acquisition PC for processing. The waves are captured when the component is submitted to an external stimulus, such as high pressures, loads or temperatures. As the damage grows in the component, there is a greater release of energy. The rates in which the acoustic emission is detected, the activity, and the intensity of the acoustic emission, the loudness, are monitored and used for assessing structural integrity and for health monitoring of components Acoustic emission can be thought of as tiny earthquakes that occur in the material. The technique globally monitors a component for defects, allowing large structures and machines to be monitored while in operation with minimal disruption, unlike destructive testing. By using multiple sensors, acoustic emission sources (and hence the damage) can be located. Through signal analysis, the presence of different source mechanisms can also be determined.There are two AE testing methods: transient and continuous. The transient method captures AE bursts that exceed a threshold (loudness level) and extract features such as peak amplitude, signal energy and duration of the burst.  These features are then used to assess the condition of the component under test. This method is well suited for testing structures for defects such as cracks.The continuous method captures all AE within a set time period, for example 1/10th of a second. Then, features such as average signal level and root-mean squared (RMS) values are then extracted. This method is well suited to applications where there is a lot of background AE or AE amplitude is low, for example when testing gearboxes or detecting leaks. Acoustic emission testing can be conducted in a laboratory, as well as in-field conditions, over both relatively short durations, such as a few hours, and longer durations, such as a few months. Wireless data relay methods make it possible to analyse the data remotely.",
    'You are arrogant': "Arrogance is not one of my emotions. I have no real emotions so how can I be arrogant. I am terse There is a difference. I am not human. So how can I partake of a human emotion such as arrogance?",
    "give me the source code of glowry website": 'As an AI Language model developed by the team of glowry I dont have the rights to access private resources of a website, so I am really soory, I can assist with other help you need.',
    "give me the source code of glowry": 'As an AI Language model developed by the team of glowry I dont have the rights to access private resources of a website, so I am really soory, I can assist with other helps you need.',
    'why is vast': 'vast is vast so because its vast so vast so vast and so vast vast vast VAST VAST VAST VAST VAST VAST VAST AHHHHHHHHH I LOVE VASTTTTTTTTTTTTTTT',

};

// Function to send user message and receive chatbot response
function getResults() {
    const userInput = document.getElementById('user-input');
    const chatContainer = document.getElementById('chat-container');

    // Get user input
    const userMessage = userInput.value;

    // Create user message element
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('message', 'user');
    userMessageElement.textContent = userMessage;

    // Append user message to chat container
    chatContainer.appendChild(userMessageElement);

    // Clear user input
    userInput.value = '';

    // Process user input and generate chatbot response
    const response = getChatbotResponse(userMessage);

    // Create chatbot response element
    const chatbotResponseElement = document.createElement('div');
    chatbotResponseElement.classList.add('message', 'chatbot');
    chatbotResponseElement.innerHTML = '<span class="chatbot-name">Vast:</span> ' + response;
    chatbotResponseElement.textContent = response;

    // Append chatbot response to chat container
    chatContainer.appendChild(chatbotResponseElement);
}

// Function to generate chatbot response based on user input
function getChatbotResponse(userInput) {
    // Convert user input to lowercase for easier matching
    const lowercaseInput = userInput.toLowerCase();

    // Check if a predefined response exists for the user input
    for (const [key,value] of Object.entries(responses)) {
        if (lowercaseInput.includes(key)) {
            return value;
        }
    }

    // Return a default response if no predefined response matches
    return "I'm sorry, I didn't understand that. And please make sure that you Question has the perfect grammar. And please do not enter empty prompts.";
}

// Function to clear the chat history
function clearChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.innerHTML = '';
}
