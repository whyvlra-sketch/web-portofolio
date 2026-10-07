document.addEventListener("DOMContentLoaded", () => {
// Chatbot Elements
const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotBox = document.getElementById("chatbot-box");
const chatbotClose = document.getElementById("chatbot-close");
const sendBtn = document.getElementById("send-btn");
const chatInput = document.getElementById("chat-input");
const chatbotMessages = document.getElementById("chatbot-messages");
// Toggle Chatbot
chatbotToggle.addEventListener("click", () => {
chatbotBox.classList.toggle("hidden");
});
chatbotClose.addEventListener("click", () => {
chatbotBox.classList.add("hidden");
});
// Send Message Logic
function sendMessage() {
const text = chatInput.value.trim();
if (text === "") return;
// Tambah pesan user
appendMessage(text, "user");
chatInput.value = "";
// Jawaban bot otomatis sederhana
setTimeout(() => {
const botReply = getBotResponse(text);
appendMessage(botReply, "bot");
}, 600);
}
function appendMessage(text, sender) {
const msgDiv = document.createElement("div");
msgDiv.classList.add("message", sender);
msgDiv.textContent = text;
chatbotMessages.appendChild(msgDiv);
chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
function getBotResponse(input) {
const lowerInput = input.toLowerCase();
if (lowerInput.includes("halo") || lowerInput.includes("hai")) {
return "Halo! Ada yang bisa saya bantu tentang portofolio Vero?";
} else if (lowerInput.includes("proyek") || lowerInput.includes("project")) {
return "Vero telah membuat beberapa proyek seperti Web Portofolio, Mesin Kasir, dan Python Love!";
} else if (lowerInput.includes("kontak") || lowerInput.includes("email")) {
return "Kamu bisa menghubungi Vero lewat bagian Kontak di bawah ya!";
} else {
return "Terima kasih atas pesannya! Vero akan membacanya nanti.";
}
}
sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
if (e.key === "Enter") {
sendMessage();
}
});
});