const chatBox = document.getElementById("chat-box");

function sendMessage() {
    const input = document.getElementById("user-input");
    const userMessage = input.value.trim();
    if (userMessage === "") return;

    addMessage(userMessage, "user");
    input.value = "";

    // Simple bot responses
    let botResponse = "I didn't understand that.";
    if (userMessage.toLowerCase().includes("hello")) {
        botResponse = "Hello! How can I help you today?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
        botResponse = "I'm just a bot, but I'm doing great!";
    } else if (userMessage.toLowerCase().includes("bye")) {
        botResponse = "Goodbye! Have a nice day!";
    }

    setTimeout(() => {
        addMessage(botResponse, "bot");
    }, 500);
}

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}