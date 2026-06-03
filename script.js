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
// Local database array simulating a cloud registry of movies
const moviesCollection = [
    { id: 1, title: "Inception", genre: "Sci-Fi", img: "https://unsplash.com" },
    { id: 2, title: "The Dark Knight", genre: "Action", img: "https://unsplash.com" },
    { id: 3, title: "Avatar: Way of Water", genre: "Fantasy", img: "https://unsplash.com" },
    { id: 4, title: "Blade Runner 2049", genre: "Sci-Fi", img: "https://unsplash.com" },
    { id: 5, title: "The Matrix", genre: "Action", img: "https://unsplash.com" }
];

const movieGrid = document.getElementById('movieGrid');
const searchBar = document.getElementById('searchBar');

// Function to render movie cards to the grid layout interface
function displayMovies(moviesArray) {
    movieGrid.innerHTML = "";
    if(moviesArray.length === 0) {
        movieGrid.innerHTML = `<p style="color: #aaa; grid-column: 1/-1;">No movies match your search.</p>`;
        return;
    }
    
    moviesArray.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.onclick = () => openPlayer(movie.title);
        
        card.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}">
            <div class="movie-info">
                <h4>${movie.title}</h4>
                <p style="font-size: 0.85rem; color:#888;">${movie.genre}</p>
            </div>
        `;
        movieGrid.appendChild(card);
    });
}

// Search filtering feature logic
searchBar.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredMovies = moviesCollection.filter(movie => 
        movie.title.toLowerCase().includes(query) || 
        movie.genre.toLowerCase().includes(query)
    );
    displayMovies(filteredMovies);
});

// Interactive Player controls
function openPlayer(title) {
    document.getElementById('modalMovieTitle').innerText = `Now Streaming: ${title}`;
    document.getElementById('videoModal').style.display = 'flex';
}

function closePlayer() {
    document.getElementById('videoModal').style.display = 'none';
}

// Initial bootstrap rendering launch
displayMovies(moviesCollection);
// Local Audio Track Manifest Data Array
const trackList = [
    { title: "Neon Horizon", artist: "CyberPulse", duration: "2:45" },
    { title: "Stardust Melancholy", artist: "Luna Veil", duration: "3:12" },
    { title: "Retro Midnight Run", artist: "Arcade Echo", duration: "2:58" }
];

let currentTrackIndex = 0;
let isPlaying = false;
let playbackTimer; // Simulated backend playback interval handle

// DOM Handles Hooking
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');
const artDisc = document.getElementById('artDisc');
const playBtn = document.getElementById('playBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationTimeDisplay = document.getElementById('durationTime');
const playlistTracks = document.getElementById('playlistTracks');

let simulatedSeconds = 0;

// Initialize app UI view with target dataset item row
function loadTrack(index) {
    currentTrackIndex = index;
    const track = trackList[currentTrackIndex];
    trackTitle.innerText = track.title;
    trackArtist.innerText = track.artist;
    durationTimeDisplay.innerText = track.duration;
    
    resetTimeline();
    renderPlaylistView();
}

function resetTimeline() {
    clearInterval(playbackTimer);
    simulatedSeconds = 0;
    progressBar.style.width = '0%';
    currentTimeDisplay.innerText = "0:00";
    if (isPlaying) startSimulatedPlayback();
}

// Controller logic rules
function togglePlayback() {
    if (isPlaying) {
        isPlaying = false;
        playBtn.innerText = "▶";
        artDisc.classList.remove('spinning');
        clearInterval(playbackTimer);
    } else {
        isPlaying = true;
        playBtn.innerText = "⏸";
        artDisc.classList.add('spinning');
        startSimulatedPlayback();
    }
}

// Track execution timelines calculation logic
function startSimulatedPlayback() {
    const track = trackList[currentTrackIndex];
    const totalParts = track.duration.split(":");
    const totalSeconds = (parseInt(totalParts[0]) * 60) + parseInt(totalParts[1]);

    playbackTimer = setInterval(() => {
        simulatedSeconds++;
        if (simulatedSeconds > totalSeconds) {
            nextTrack();
            return;
        }
        
        // Update view nodes
        const pct = (simulatedSeconds / totalSeconds) * 100;
        progressBar.style.width = `${pct}%`;
        
        const mins = Math.floor(simulatedSeconds / 60);
        const secs = simulatedSeconds % 60;
        currentTimeDisplay.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }, 1000);
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
    loadTrack(currentTrackIndex);
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
    loadTrack(currentTrackIndex);
}

// Render dynamic track collection component tree elements 
function renderPlaylistView() {
    playlistTracks.innerHTML = "";
    trackList.forEach((track, idx) => {
        const item = document.createElement('li');
        item.innerText = `${track.title} - ${track.artist}`;
        if(idx === currentTrackIndex) item.classList.add('active-track');
        item.onclick = () => {
            loadTrack(idx);
            if(!isPlaying) togglePlayback();
        };
        playlistTracks.appendChild(item);
    });
}

// Event Listeners Assignments
playBtn.addEventListener('click', togglePlayback);
document.getElementById('nextBtn').addEventListener('click', nextTrack);
document.getElementById('prevBtn').addEventListener('click', prevTrack);

// System Boot
loadTrack(currentTrackIndex);
// Medical Specialists Database Array
const doctorDatabase = [
    { id: 101, name: "Dr. Sarah Jenkins", specialty: "Cardiologist", experience: "12 yrs exp" },
    { id: 102, name: "Dr. Marcus Vance", specialty: "Neurologist", experience: "8 yrs exp" },
    { id: 103, name: "Dr. Elena Rostova", specialty: "Pediatrician", experience: "15 yrs exp" },
    { id: 104, name: "Dr. Amit Patel", specialty: "Dermatologist", experience: "10 yrs exp" }
];

let selectedDoctor = null;
const bookedAppointmentsList = [];

const doctorContainer = document.getElementById('doctorContainer');
const doctorSearch = document.getElementById('doctorSearch');
const appointmentQueue = document.getElementById('appointmentQueue');
const bookingModal = document.getElementById('bookingModal');
const modalDocName = document.getElementById('modalDocName');
const bookingDateInput = document.getElementById('bookingDate');

// Setup Heart Rate Pulsing simulation engine loop
setInterval(() => {
    const baseHeartRate = 72;
    const variance = Math.floor(Math.random() * 7) - 3; // variance range (-3 to +3)
    document.getElementById('heartValue').innerText = baseHeartRate + variance;
}, 3000);

// Render Specialists Catalog Listing View
function renderDoctors(doctorsArray) {
    doctorContainer.innerHTML = "";
    doctorsArray.forEach(doc => {
        const row = document.createElement('div');
        row.classList.add('doctor-card');
        row.innerHTML = `
            <div class="doc-info">
                <h4>${doc.name}</h4>
                <p>${doc.specialty} • ${doc.experience}</p>
            </div>
            <button class="btn-book" onclick="openBookingFlow(${doc.id})">Book Visit</button>
        `;
        doctorContainer.appendChild(row);
    });
}

// Global Filter Logic Engine hook setup
doctorSearch.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const matches = doctorDatabase.filter(doc => 
        doc.name.toLowerCase().includes(term) || 
        doc.specialty.toLowerCase().includes(term)
    );
    renderDoctors(matches);
});

// Modal Dialog Interactivity Controls
function openBookingFlow(doctorId) {
    selectedDoctor = doctorDatabase.find(d => d.id === doctorId);
    modalDocName.innerText = `Booking consultation with ${selectedDoctor.name} (${selectedDoctor.specialty})`;
    bookingModal.style.display = 'flex';
}

function closeModal() {
    bookingModal.style.display = 'none';
    bookingDateInput.value = "";
    selectedDoctor = null;
}

// Appointment pipeline confirmation transaction handler logic
document.getElementById('confirmBtn').onclick = () => {
    const pickedDate = bookingDateInput.value;
    if(!pickedDate) {
        alert("Please explicitly select an appointment schedule calendar execution target.");
        return;
    }

    // Insert scheduled object metadata item record into pipeline storage tracking
    bookedAppointmentsList.push({
        doctor: selectedDoctor.name,
        specialty: selectedDoctor.specialty,
        date: pickedDate
    });

    updateAppointmentsUI();
    closeModal();
};

function updateAppointmentsUI() {
    if(bookedAppointmentsList.length === 0) {
        appointmentQueue.innerHTML = `<p class="empty-state">No scheduled medical sessions configured yet.</p>`;
        return;
    }

    appointmentQueue.innerHTML = "";
    bookedAppointmentsList.forEach(appt => {
        const item = document.createElement('div');
        item.classList.add('appointment-card');
        item.innerHTML = `
            <h5>${appt.doctor}</h5>
            <p>Specialty: ${appt.specialty}</p>
            <p style="font-weight: 600; margin-top: 4px; color: #0ea5e9;">📅 Date: ${appt.date}</p>
        `;
        appointmentQueue.appendChild(item);
    });
}

// Main initial environment boot
renderDoctors(doctorDatabase);
// Pricing rate database configuration ruleset Matrix
const fleetCollection = [
    { type: "UrbanX Economy", ratePerKm: 12, eta: "3 mins", icon: "🚗" },
    { type: "Urban Prime Sedan", ratePerKm: 18, eta: "2 mins", icon: "🚙" },
    { type: "Urban Max SUV", ratePerKm: 25, eta: "5 mins", icon: "🚐" }
];

let selectedVehicle = null;
let calculatedDistance = 0;

const fleetSection = document.getElementById('fleetSection');
const fleetGrid = document.getElementById('fleetGrid');
const confirmRideBtn = document.getElementById('confirmRideBtn');
const mapStatusText = document.getElementById('mapStatusText');
const pulseRadar = document.getElementById('pulseRadar');

// Event handler computing dynamic trip metrics
document.getElementById('calcFareBtn').onclick = () => {
    const fromAddr = document.getElementById('pickup').value.trim();
    const toAddr = document.getElementById('dropoff').value.trim();

    if (!fromAddr || !toAddr) {
        alert("Please explicitly supply both structural routing waypoint nodes.");
        return;
    }

    // Simulate standard distance engine metrics generation calculation
    calculatedDistance = Math.floor(Math.random() * 18) + 3; // 3km to 20km range
    
    renderFleetOptions(calculatedDistance);
    fleetSection.classList.remove('hidden');
    
    mapStatusText.innerHTML = `🗺️ Route mapped: <strong>${calculatedDistance} km</strong> transit pipeline calculated successfully from ${fromAddr} to ${toAddr}. Choose your workspace fleet option below.`;
};

// Map options list compilation engine array template string logic
function renderFleetOptions(distance) {
    fleetGrid.innerHTML = "";
    selectedVehicle = null;
    confirmRideBtn.disabled = true;

    fleetCollection.forEach((car, index) => {
        const fare = distance * car.ratePerKm;
        const optionRow = document.createElement('div');
        optionRow.classList.add('vehicle-card');
        optionRow.id = `car-${index}`;
        
        optionRow.innerHTML = `
            <div style="display: flex; gap: 12px; align-items: center;">
                <span style="font-size: 1.5rem;">${car.icon}</span>
                <div class="v-meta">
                    <h4>${car.type}</h4>
                    <p>ETA: ${car.eta}</p>
                </div>
            </div>
            <div class="v-fare">₹${fare}</div>
        `;

        optionRow.onclick = () => selectFleetCategory(index, car, fare);
        fleetGrid.appendChild(optionRow);
    });
}

function selectFleetCategory(activeIndex, carData, totalFare) {
    // Clear old active selection nodes classes
    document.querySelectorAll('.vehicle-card').forEach(card => card.classList.remove('selected'));
    
    document.getElementById(`car-${activeIndex}`).classList.add('selected');
    selectedVehicle = { ...carData, finalFare: totalFare };
    
    confirmRideBtn.disabled = false;
}

// Dispatches dispatcher matching simulation engine logic
confirmRideBtn.onclick = () => {
    if (!selectedVehicle) return;

    // Transition interface tracking nodes into search processing state modes
    fleetSection.classList.add('hidden');
    pulseRadar.classList.remove('hidden');
    mapStatusText.innerHTML = `🔎 Locating closest available <strong>${selectedVehicle.type}</strong> dispatcher network pods near your coordinates. Connecting...`;

    // Dispatch completion countdown sequence pipeline tracking frame triggers
    setTimeout(() => {
        pulseRadar.classList.add('hidden');
        const driverName = ["Rajesh Kumar", "Amit Sharma", "Vikram Singh"][Math.floor(Math.random() * 3)];
        const otpCode = Math.floor(1000 + Math.random() * 9000);
        
        mapStatusText.innerHTML = `
            🎉 <strong>Ride Confirmed!</strong><br><br>
            Driver <strong>${driverName}</strong> is en route. <br>
            Arriving in <strong>${selectedVehicle.eta}</strong>.<br>
            Total fare: <strong>₹${selectedVehicle.finalFare}</strong>.<br>
            🔐 Share PIN with driver: <span style="background: #111; color: #fff; padding: 2px 6px; border-radius: 4px;">${otpCode}</span>
        `;
    }, 4000);
};
// Local Live Events Registry Database Array
const globalEventsRegistry = [
    { id: 201, title: "Rock Beats Festival 2026", category: "music", date: "June 14, 2026", venue: "Sunset Arena", seatsLeft: 4, banner: "https://unsplash.com" },
    { id: 202, title: "Global AI Innovators Forum", category: "tech", date: "July 22, 2026", venue: "Convention Hall B", seatsLeft: 45, banner: "https://unsplash.com" },
    { id: 203, title: "Street Food Carnival & Expo", category: "food", date: "August 05, 2026", venue: "Downtown Square", seatsLeft: 12, banner: "https://unsplash.com" },
    { id: 204, title: "Indie Sound Showcase", category: "music", date: "September 19, 2026", venue: "The Echo Lounge", seatsLeft: 0, banner: "https://unsplash.com" }
];

let targetBookingEvent = null;

const eventsGrid = document.getElementById('eventsGrid');
const bookingModal = document.getElementById('bookingModal');
const ticketModal = document.getElementById('ticketModal');

// Render Catalog Cards Engine
function renderEvents(filterCategory = "all") {
    eventsGrid.innerHTML = "";
    
    const filteredList = filterCategory === "all" 
        ? globalEventsRegistry 
        : globalEventsRegistry.filter(ev => ev.category === filterCategory);

    filteredList.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('event-card');
        
        // Dynamic seat styling checks
        let seatStatusText = `${event.seatsLeft} Tickets Remaining`;
        let seatClass = "";
        if (event.seatsLeft === 0) {
            seatStatusText = "Sold Out";
            seatClass = "low";
        } else if (event.seatsLeft <= 5) {
            seatClass = "low";
        }

        card.innerHTML = `
            <img src="${event.banner}" class="event-banner" alt="${event.title}">
            <div class="event-details">
                <span class="event-tag">${event.category}</span>
                <h3>${event.title}</h3>
                <p class="event-meta">📅 ${event.date} | 📍 ${event.venue}</p>
                <div class="event-footer">
                    <span class="seats-count ${seatClass}">${seatStatusText}</span>
                    <button class="book-ticket-btn" ${event.seatsLeft === 0 ? 'disabled' : ''} onclick="openBookingModal(${event.id})">
                        ${event.seatsLeft === 0 ? 'Full' : 'Get Passes'}
                    </button>
                </div>
            </div>
        `;
        eventsGrid.appendChild(card);
    });
}

// Wire Category Nav Filter Node Listeners 
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderEvents(e.target.dataset.category);
    };
});

// Modal Component Interface Controls Logic
function openBookingModal(eventId) {
    targetBookingEvent = globalEventsRegistry.find(ev => ev.id === eventId);
    document.getElementById('modalEventTitle').innerText = `Secure Passes: ${targetBookingEvent.title}`;
    document.getElementById('modalEventMeta').innerText = `Venue: ${targetBookingEvent.venue} | Date: ${targetBookingEvent.date}`;
    document.getElementById('ticketCount').max = Math.min(targetBookingEvent.seatsLeft, 5);
    bookingModal.style.display = 'flex';
}

function closeBookingModal() {
    bookingModal.style.display = 'none';
    document.getElementById('registrationForm').reset();
}

// Secure Pipeline Booking Form Registration Checkout Confirmation
document.getElementById('registrationForm').onsubmit = () => {
    const requestedQty = parseInt(document.getElementById('ticketCount').value);
    
    if(requestedQty > targetBookingEvent.seatsLeft) {
        alert("Transaction Aborted: Requested ticket pool inventory depth is unavailable.");
        return;
    }

    // Deduct available stock seats count safely in state
    targetBookingEvent.seatsLeft -= requestedQty;

    // Capture values into Digital Ticket nodes fields elements
    document.getElementById('tktEvent').innerText = targetBookingEvent.title;
    document.getElementById('tktName').innerText = document.getElementById('userName').value;
    document.getElementById('tktEmail').innerText = document.getElementById('userEmail').value;
    document.getElementById('tktQty').innerText = `${requestedQty} Standard Access Pass(es)`;

    // Close checkout box, update master display grid and trigger ticket window view
    closeBookingModal();
    renderEvents();
    ticketModal.style.display = 'flex';
};

function closeTicketModal() {
    ticketModal.style.display = 'none';
    targetBookingEvent = null;
}

// Initial Boot Application Launch
renderEvents();
// Local Projects Registry Matrix Array
const creationsDatabase = [
    { name: "CloudScale Analytics Engine", tags: ["fullstack"], summary: "High throughput performance analytics aggregation visual dashboard framework pipeline optimized for SaaS structures.", visual: "https://unsplash.com" },
    { name: "E-Commerce Fluid UI Interface", tags: ["frontend"], summary: "Ultra-fast headless commerce visual components framework layout stack including full complex filtering engines architectures.", visual: "https://unsplash.com" },
    { name: "Distributed Micro-Task API Registry", tags: ["fullstack"], summary: "Resilient real-time distributed execution queuing microservice pipeline managing millions of daily operational hooks.", visual: "https://unsplash.com" },
    { name: "NeonGlass Design Kit Component Core", tags: ["frontend"], summary: "Exquisite visual modern component kit layout engine based strictly on CSS glassmorphism standard specification layers.", visual: "https://unsplash.com" }
];

const galleryGrid = document.getElementById('galleryGrid');
const contactForm = document.getElementById('portfolioContactForm');
const feedbackBanner = document.getElementById('formFeedbackMessage');

// Filter Gallery Grid Engine Loader Framework
function displayGalleryGrid(targetTag = "all") {
    galleryGrid.innerHTML = "";
    
    const elementsSubset = targetTag === "all" 
        ? creationsDatabase 
        : creationsDatabase.filter(item => item.tags.includes(targetTag));

    elementsSubset.forEach(proj => {
        const itemBlock = document.createElement('div');
        itemBlock.classList.add('gallery-card');
        itemBlock.innerHTML = `
            <img src="${proj.visual}" class="card-thumb" alt="${proj.name}">
            <div class="card-body">
                <h3>${proj.name}</h3>
                <p>${proj.summary}</p>
            </div>
        `;
        galleryGrid.appendChild(itemBlock);
    });
}

// Bind Click Listeners to Filter Tag Buttons Nodes Elements 
document.querySelectorAll('.filter-tag').forEach(button => {
    button.onclick = (e) => {
        document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        displayGalleryGrid(e.target.dataset.filter);
    };
});

// Mock Messaging Transaction Router Logic Pipeline handler
contactForm.onsubmit = () => {
    const sender = document.getElementById('senderName').value.trim();
    
    feedbackBanner.innerText = `🔄 Transmission processing for execution routing pipelines, please stand by...`;
    feedbackBanner.classList.remove('hidden');
    feedbackBanner.style.backgroundColor = "#3b82f6";

    setTimeout(() => {
        feedbackBanner.innerText = `⚡ Success! Thank you, ${sender}. Your project inquiry was captured by our secure communication matrix routers.`;
        feedbackBanner.style.backgroundColor = "#10b981";
        contactForm.reset();
        
        setTimeout(() => { feedbackBanner.classList.add('hidden'); }, 5000);
    }, 2000);
};

// Start initial compilation render boot loops
displayGalleryGrid();
// Executive Team Profile Registry Array
const leadershipRoster = [
    { name: "Victoria Sterling", role: "Chief Technology Officer", bio: "Former Infrastructure Architect lead engine designer overseeing web services scaling projects across global frameworks.", pic: "https://unsplash.com" },
    { name: "Devon Vance", role: "Managing Director", bio: "Specialist in legacy cloud migration lifecycles with over two decades coordinating technical business consulting.", pic: "https://unsplash.com" }
];

let activeSlideIndex = 0;

const teamWrapper = document.getElementById('teamWrapper');
const leadCaptureForm = document.getElementById('leadCaptureForm');
const leadFeedbackMsg = document.getElementById('leadFeedbackMsg');

// Load Executive Profiles Into Slider Matrix View Tree
function renderLeadershipSlider() {
    teamWrapper.innerHTML = "";
    leadershipRoster.forEach(member => {
        const item = document.createElement('div');
        item.classList.add('profile-card');
        item.innerHTML = `
            <img src="${member.pic}" alt="${member.name}">
            <h4>${member.name}</h4>
            <span>${member.role}</span>
            <p>"${member.bio}"</p>
        `;
        teamWrapper.appendChild(item);
    });
}

function slideTeam(direction) {
    activeSlideIndex = (activeSlideIndex + direction + leadershipRoster.length) % leadershipRoster.length;
    teamWrapper.style.transform = `translateX(-${activeSlideIndex * 100}%)`;
}

// Task 38: Educational Institute Support
const educationProgramsDatabase = [
    { id: 401, title: "Web Development Bootcamp", level: "Undergraduate", category: "engineering", duration: "16 weeks", seats: 12, description: "A fully immersive coding program for building real web applications from scratch." },
    { id: 402, title: "AI & Machine Learning", level: "Postgraduate", category: "business", duration: "12 weeks", seats: 8, description: "Advanced AI model training, data science workflows, and production-ready automation pipelines." },
    { id: 403, title: "UX Design Masterclass", level: "Diploma", category: "design", duration: "10 weeks", seats: 15, description: "Hands-on design thinking, user research, prototyping, and UI delivery for modern digital experiences." },
    { id: 404, title: "Cloud Engineering", level: "Undergraduate", category: "engineering", duration: "14 weeks", seats: 10, description: "Cloud-native infrastructure, DevOps automation, and scalable architecture for enterprise-grade systems." }
];

const programList = document.getElementById('productsGrid');
const cartDrawer = document.getElementById('cartDrawer');
const cartCountBadge = document.getElementById('cartCountBadge');
let shortlistCount = 0;

function renderInstitutePrograms(filterLevel = 'all') {
    if (!programList) return;
    programList.innerHTML = '';

    const programs = filterLevel === 'all'
        ? educationProgramsDatabase
        : educationProgramsDatabase.filter(program => program.category === filterLevel);

    programs.forEach(program => {
        const card = document.createElement('div');
        card.className = 'program-card';
        card.innerHTML = `
            <h3>${program.title}</h3>
            <p class="program-meta">${program.duration} • ${program.level.replace(/^[a-z]/, s => s.toUpperCase())}</p>
            <p>${program.description}</p>
            <p class="program-seats">Seats left: <strong>${program.seats}</strong></p>
            <div class="program-actions">
                <button onclick="triggerShortlistAlert('${program.title}')">Shortlist</button>
                <button onclick="toggleCartDrawer()">View Cart</button>
            </div>
        `;
        programList.appendChild(card);
    });
}

function filterDecorSpace(level) {
    document.querySelectorAll('.space-filters .filter-chip').forEach(btn => btn.classList.toggle('active', btn.dataset.filter === level));
    renderInstitutePrograms(level);
}

function toggleCartDrawer(forceClose) {
    if (!cartDrawer) return;
    if (forceClose === false) {
        cartDrawer.classList.remove('open');
        return;
    }
    cartDrawer.classList.toggle('open');
}

function triggerShortlistAlert(title) {
    shortlistCount += 1;
    if (cartCountBadge) cartCountBadge.innerText = shortlistCount;
    alert(`✅ "${title || 'Selected program'}" has been added to your shortlist.`);
}

// Task 39: Restaurant Menu and Wishlist Support
const bookMenuItems = [
    { id: 501, name: "Masala Dosa", genre: "appetizers", price: 180, description: "Crispy rice crepe served with potato masala and chutney." },
    { id: 502, name: "Butter Chicken", genre: "mains", price: 320, description: "Creamy tomato curry with tender chicken pieces." },
    { id: 503, name: "Comfort Soup", genre: "mains", price: 140, description: "Warm, nourishing soup with fresh herbs and vegetables." },
    { id: 504, name: "Gourmet Salad", genre: "desserts", price: 210, description: "Seasonal greens, toasted nuts, and house vinaigrette." }
];

const bookSearchInput = document.getElementById('bookSearchInput');
const bookMenuGrid = document.getElementById('bookMenuGrid');
const wishlistCountBadge = document.getElementById('wishlistCountBadge');
const wishlistItemsQueue = document.getElementById('wishlistItemsQueue');
let wishlistItems = [];

function renderBookMenu(filterGenre = 'all') {
    if (!bookMenuGrid) return;
    bookMenuGrid.innerHTML = '';

    const searchQuery = bookSearchInput?.value.trim().toLowerCase() || '';
    const filteredByGenre = filterGenre === 'all'
        ? bookMenuItems
        : bookMenuItems.filter(item => item.genre === filterGenre);

    const items = filteredByGenre.filter(item => {
        return !searchQuery || item.name.toLowerCase().includes(searchQuery) || item.description.toLowerCase().includes(searchQuery);
    });

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p class="menu-meta">${item.genre.replace(/^[a-z]/, s => s.toUpperCase())} • ₹${item.price}</p>
            <p>${item.description}</p>
            <div class="menu-actions">
                <button onclick="triggerOrderAlert('${item.name}')">Order Now</button>
                <button onclick="saveToWishlistState('${item.name}')">Save to Wishlist</button>
            </div>
        `;
        bookMenuGrid.appendChild(card);
    });
}

function filterBookGenre(genre) {
    document.querySelectorAll('.genre-button').forEach(btn => btn.classList.toggle('active', btn.dataset.genre === genre));
    renderBookMenu(genre);
}

if (bookSearchInput) {
    bookSearchInput.oninput = () => {
        const activeGenre = document.querySelector('.genre-button.active')?.dataset.genre || 'all';
        renderBookMenu(activeGenre);
    };
}

function triggerOrderAlert(itemName = 'your order') {
    alert(`🍽️ Order booked successfully for ${itemName}. Enjoy your meal!`);
}

function saveToWishlistState(itemName) {
    if (!wishlistItems.includes(itemName)) {
        wishlistItems.push(itemName);
        if (wishlistItemsQueue) wishlistItemsQueue.innerText = wishlistItems.join(', ');
        if (wishlistCountBadge) wishlistCountBadge.innerText = `${wishlistItems.length} Items`;
        alert(`❤️ ${itemName} has been saved to your wishlist.`);
    } else {
        alert(`💡 ${itemName} is already in your wishlist.`);
    }
}

// Task 40: Real Estate Listings Support
const propertyListings = [
    { id: 601, title: "Lakeview Apartments", type: "apartment", listingType: "sale", price: "₹65L", location: "Lake Road, Chennai", beds: 2, baths: 2, area: "950 sq.ft", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", description: "Sunlit apartments with lake views and modern community amenities.", agent: "Asha Rao" },
    { id: 602, title: "Garden Villa", type: "house", listingType: "rent", price: "₹30K/mo", location: "Green Acres, Chennai", beds: 4, baths: 3, area: "2100 sq.ft", img: "https://images.unsplash.com/photo-1494526585095-c41746248156", description: "A spacious villa with landscaped gardens and premium interiors.", agent: "Rahul Nair" },
    { id: 603, title: "Tech Hub Studio", type: "commercial", listingType: "rent", price: "₹48K/mo", location: "IT Park, Chennai", beds: 1, baths: 1, area: "620 sq.ft", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", description: "Efficient studio space near major tech campuses and transit lines.", agent: "Priya Menon" },
    { id: 604, title: "Luxury Penthouse", type: "apartment", listingType: "sale", price: "₹95L", location: "Skyline Towers, Chennai", beds: 3, baths: 3, area: "1750 sq.ft", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", description: "Premium penthouse featuring panoramic city views and concierge service.", agent: "Vikram Shah" }
];

const propertyList = document.getElementById('propertyList');
const recipeDetailModal = document.getElementById('recipeDetailModal');
const modalBodyScroll = document.getElementById('modalBodyScroll');
const recipeSearchInput = document.getElementById('recipeSearchInput');

function renderPropertyList(filterType = 'all') {
    if (!propertyList) return;
    propertyList.innerHTML = '';

    const query = recipeSearchInput?.value.trim().toLowerCase() || '';
    const matchedProperties = propertyListings.filter(property => {
        const matchesType = filterType === 'all' ? true : property.type === filterType;
        const matchesQuery = !query || property.title.toLowerCase().includes(query) || property.location.toLowerCase().includes(query);
        return matchesType && matchesQuery;
    });

    matchedProperties.forEach(property => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <img src="${property.img}" alt="${property.title}">
            <div class="property-details">
                <h3>${property.title}</h3>
                <p class="property-meta">${property.location} • ${property.area}</p>
                <p class="property-price">${property.price}</p>
                <div class="property-tags">${property.beds} Beds • ${property.baths} Baths • ${property.type}</div>
                <button onclick="openPropertyModal(${property.id})">View Details</button>
            </div>
        `;
        propertyList.appendChild(card);
    });
}

function switchMealCategory(type) {
    document.querySelectorAll('.category-row button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
    });
    renderPropertyList(type);
}

function openPropertyModal(propertyId) {
    const property = propertyListings.find(item => item.id === propertyId);
    if (!property || !modalBodyScroll || !recipeDetailModal) return;

    modalBodyScroll.innerHTML = `
        <img src="${property.img}" class="modal-property-image" alt="${property.title}">
        <h2>${property.title}</h2>
        <p class="modal-meta">${property.location} • ${property.area}</p>
        <p class="modal-price">${property.price}</p>
        <p>${property.description}</p>
        <div class="modal-feature-list">
            <span>${property.beds} Beds</span>
            <span>${property.baths} Baths</span>
            <span>${property.type}</span>
            <span>${property.listingType.toUpperCase()}</span>
        </div>
        <p class="modal-agent">Listing agent: <strong>${property.agent}</strong></p>
        <button onclick="closeRecipeModal()">Close Details</button>
    `;
    recipeDetailModal.style.display = 'flex';
}

function closeRecipeModal() {
    if (!recipeDetailModal) return;
    recipeDetailModal.style.display = 'none';
}

if (recipeSearchInput) {
    recipeSearchInput.oninput = () => renderPropertyList();
}

// Initialize task views
renderInstitutePrograms();
renderBookMenu();
renderPropertyList();


