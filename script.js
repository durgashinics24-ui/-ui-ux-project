// Function to switch between different screens
function showPage(pageId) {
    // Hide all pages by removing the 'active-page' marker
    document.getElementById('login-page').classList.remove('active-page');
    document.getElementById('signup-page').classList.remove('active-page');
    document.getElementById('forgot-password-page').classList.remove('active-page');
    document.getElementById('otp-page').classList.remove('active-page');
    document.getElementById('dashboard-page').classList.remove('active-page');

    // Show the specific page requested
    document.getElementById(pageId).classList.add('active-page');
}

// --- NAVIGATION CLICK ACTIONS ---

// From Login page
document.getElementById('go-to-signup').addEventListener('click', () => showPage('signup-page'));
document.getElementById('go-to-forgot').addEventListener('click', () => showPage('forgot-password-page'));

// From Signup page
document.getElementById('go-to-login').addEventListener('click', () => showPage('login-page'));

// From Forgot Password page
document.getElementById('back-to-login-from-forgot').addEventListener('click', () => showPage('login-page'));


// --- FORM SUBMISSIONS (Logic to move forward) ---

// Submit Login form -> Goes straight to Dashboard
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the browser from refreshing
    showPage('dashboard-page');
});

// Submit Signup form -> Takes user back to Login
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Account created successfully! Please log in.');
    showPage('login-page');
});

// Submit Forgot Password form -> Sends user to OTP check
document.getElementById('forgot-form').addEventListener('submit', (e) => {
    e.preventDefault();
    showPage('otp-page');
});

// Submit OTP verification -> Takes user to Dashboard
document.getElementById('otp-form').addEventListener('submit', (e) => {
    e.preventDefault();
    showPage('dashboard-page');
});

// Click Log Out from Dashboard -> Back to Login
document.getElementById('logout-btn').addEventListener('click', () => {
    showPage('login-page');
});
// Function for Task 16: Notification Popup trigger
function showToast() {
    const toast = document.getElementById("toast-notification");
    
    // Reveal the notification element
    toast.classList.remove("hidden-toast");
    
    // Automatically hide it again after 3 seconds
    setTimeout(() => {
        toast.classList.add("hidden-toast");
    }, 3000);
}
// 16. Toast Trigger Control
function triggerToast() {
    const toast = document.getElementById("toast-box");
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2800);
}

// 17. Loading Screen System Engine
function triggerLoadingScreen() {
    const overlay = document.getElementById("loading-overlay");
    overlay.classList.remove("hidden-overlay");
    setTimeout(() => {
        overlay.classList.add("hidden-overlay");
    }, 2500);
}

// 20. Search Optimization Live Filter Logic
function filterSearchItems() {
    const query = document.getElementById("live-search").value.toLowerCase();
    const listItems = document.querySelectorAll("#search-list li");
    
    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// 21 & 22. Commerce Add-To-Cart Abstract Pipeline
function addToOrder(itemName) {
    alert(`Food Order Added: 1x ${itemName} has been added to your tray.`);
}

function addToCart() {
    alert("Item added to your shopping bag safely.");
}

// 24. Banking Ledger Value Processor
let balanceValue = 14250.75;
function modifyBalance(amount) {
    balanceValue += amount;
    document.getElementById("wallet-balance").textContent = `$${balanceValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// 25. Chat Core Component Event Mechanics
function sendChat() {
    const inputField = document.getElementById("chat-typed-text");
    const container = document.getElementById("chat-messages");
    if (!inputField.value.trim()) return;

    // Append standard user string message
    const userMsg = document.createElement("div");
    userMsg.className = "msg outbound";
    userMsg.textContent = inputField.value;
    container.appendChild(userMsg);

    const temporaryValue = inputField.value;
    inputField.value = "";
    container.scrollTop = container.scrollHeight;

    // Trigger basic mock delayed system evaluation message
    setTimeout(() => {
        const platformResponse = document.createElement("div");
        platformResponse.className = "msg inbound";
        platformResponse.textContent = `Received: "${temporaryValue}". Simulation response acknowledged.`;
        container.appendChild(platformResponse);
        container.scrollTop = container.scrollHeight;
    }, 1000);
}

function handleChatKey(event) {
    if (event.key === "Enter") {
        sendChat();
    }
}

// 26. Social Card State Metrics
function likePost(buttonElement) {
    const countSpan = buttonElement.querySelector(".like-count");
    let currentLikes = parseInt(countSpan.textContent);
    
    if (!buttonElement.classList.contains("liked")) {
        buttonElement.classList.add("liked");
        countSpan.textContent = currentLikes + 1;
        buttonElement.style.color = "#ef4444";
    } else {
        buttonElement.classList.remove("liked");
        countSpan.textContent = currentLikes - 1;
        buttonElement.style.color = "var(--text-muted)";
    }
}

// 28. Task To-Do Manager Object Pipeline
function addTodoItem() {
    const input = document.getElementById("new-todo-text");
    const container = document.getElementById("todo-item-container");
    if (!input.value.trim()) return;

    const li = document.createElement("li");
    li.innerHTML = `<label><input type="checkbox"> ${input.value}</label>`;
    container.appendChild(li);
    input.value = "";
}

// 30. Flight Matrix Booking Simulator
function simulateFlightSearch() {
    alert("Searching for optimal global flight routes and current ticket pricing layout pricing matrices...");
}
