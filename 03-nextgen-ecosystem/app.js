// app.js - Next-Gen Interfaces Event Engine

document.addEventListener('DOMContentLoaded', () => {
  console.log("🚀 Next-Gen Ecosystem Interface Engine Activated Successfully.");

  // ==========================================================================
  // ⚡ TASK 111: SOLAR ENERGY METRIC ANIMATION
  // ==========================================================================
  const solarGenDisplay = document.querySelector('#s111 p');
  if (solarGenDisplay) {
    // Simulate real-time fluctuated grid offset yield updates every 4 seconds
    setInterval(() => {
      const simulatedYield = (4.5 + Math.random() * 0.8).toFixed(2);
      solarGenDisplay.innerHTML = `${simulatedYield} kWh`;
      solarGenDisplay.style.transition = 'color 0.3s ease';
      solarGenDisplay.style.color = '#34d399'; // Flash positive light green on change
      setTimeout(() => solarGenDisplay.style.color = 'var(--accent-green)', 400);
    }, 4000);
  }

  // ==========================================================================
  // 📊 TASK 112: BUSINESS ANALYTICS LIVE SIMULATION
  // ==========================================================================
  const mrrDisplay = document.querySelector('#s112 p');
  if (mrrDisplay) {
    setInterval(() => {
      // Simulate live fractional shifts in business performance trends
      const randomShift = (18.0 + Math.random() * 0.9).toFixed(1);
      mrrDisplay.innerHTML = `+${randomShift}%`;
    }, 6000);
  }

  // ==========================================================================
  // 🤖 TASK 113: AI platform MODULE CHANGER INTERACTION
  // ==========================================================================
  const aiLaunchBtn = document.querySelector('#s113 .action-btn');
  const aiInsightBox = document.querySelector('#s113 div');
  
  if (aiLaunchBtn && aiInsightBox) {
    aiLaunchBtn.addEventListener('click', () => {
      aiLaunchBtn.innerText = "Track Initializing...";
      aiLaunchBtn.disabled = true;
      aiLaunchBtn.style.opacity = '0.6';
      
      setTimeout(() => {
        aiInsightBox.innerHTML = `<strong>AI Tracker Update:</strong> Advanced Compilers Track initialized. Syncing environment workspace configuration keys...`;
        aiInsightBox.style.borderLeftColor = 'var(--accent-green)';
        aiLaunchBtn.innerText = "Module Active";
        aiLaunchBtn.style.backgroundColor = 'var(--accent-green)';
      }, 1500);
    });
  }

  // ==========================================================================
  // ☁️ TASK 114: CLOUD STORAGE ALLOCATION TRACKER
  // ==========================================================================
  const cloudProgressBar = document.querySelector('#s114 .progress-bar');
  const cloudTextLegend = document.querySelector('#s114 p');
  
  if (cloudProgressBar && cloudTextLegend) {
    // Initialize an interactive space checkup
    let initialSpace = 64.2;
    cloudTextLegend.style.cursor = 'pointer';
    cloudTextLegend.title = "Click to clear mock system cash cache space";

    cloudTextLegend.addEventListener('click', () => {
      if (initialSpace > 45) {
        initialSpace = (initialSpace - 12.4).toFixed(1);
        cloudProgressBar.style.width = `${initialSpace}%`;
        cloudTextLegend.innerText = `${initialSpace} GB used of 100 GB absolute capacity`;
        alert(`🧹 System cache cleared! 12.4 GB of space returned to local storage pool.`);
      }
    });
  }

  // ==========================================================================
  // 💳 TASK 115: DIGITAL WALLET QUICK CLEARENCE CHANNELS
  // ==========================================================================
  const sendFundsBtn = document.querySelector('#s115 .wallet-btn:first-child');
  const walletBalanceText = document.querySelector('#s115 h2');

  if (sendFundsBtn && walletBalanceText) {
    sendFundsBtn.addEventListener('click', () => {
      const sendAmount = 5000;
      let currentBalance = parseFloat(walletBalanceText.innerText.replace(/[₹,]/g, ''));
      
      if (currentBalance >= sendAmount) {
        currentBalance -= sendAmount;
        walletBalanceText.innerText = `₹${currentBalance.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
        alert(`💸 Payment Cleared successfully! ₹5,000.00 routed via IMPS secure token processing bridge.`);
      } else {
        alert("❌ Transaction Rejected: Insufficient Ledger Balance limits.");
      }
    });
  }

  // ==========================================================================
  // ☎️ TASK 116: CUSTOMER SUPPORT SEVERITY TRACKER
  // ==========================================================================
  const supportTableRows = document.querySelectorAll('#s116 tbody tr');
  
  supportTableRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
      row.style.cursor = 'pointer';
    });
    row.addEventListener('mouseleave', () => {
      row.style.backgroundColor = 'transparent';
    });
    row.addEventListener('click', () => {
      const ticketId = row.cells[0].innerText;
      alert(`📂 Opening Support Console Workspace for Ticket ${ticketId}. Pulling diagnostic webhook payloads...`);
    });
  });

  // ==========================================================================
  // 🛒 TASK 117: ECOMMERCE DISPATCH LOGGING ACTION
  // ==========================================================================
  const orderCountDisplay = document.querySelector('#s117 .panel-card:nth-child(2) p');
  if (orderCountDisplay) {
    // Simulate real-time orders arriving inside shop system pipeline
    setInterval(() => {
      if (Math.random() > 0.5) {
        let currentOrders = parseInt(orderCountDisplay.innerText);
        currentOrders += 1;
        orderCountDisplay.innerText = `${currentOrders} Items`;
      }
    }, 8000);
  }

  // ==========================================================================
  // 🤝 TASK 118: FREELANCER TALENT OFFER VALIDATION
  // ==========================================================================
  const marketplaceCards = document.querySelectorAll('#s118 .profile-card');
  
  marketplaceCards.forEach(card => {
    const actionBtn = document.createElement('button');
    actionBtn.innerText = "Send Contract Offer";
    actionBtn.className = "action-btn";
    actionBtn.style.marginTop = "12px";
    actionBtn.style.fontSize = "0.8rem";
    actionBtn.style.padding = "6px 12px";
    card.appendChild(actionBtn);

    actionBtn.addEventListener('click', () => {
      const roleTitle = card.querySelector('h3').innerText;
      alert(`🤝 Contract offer terms dispatched safely to ${roleTitle}. Awaiting validation keys token check...`);
      actionBtn.innerText = "Offer Pending";
      actionBtn.disabled = true;
      actionBtn.style.background = "#4b5563";
    });
  });

  // ==========================================================================
  // 🚛 TASK 119: LOGISTICS TELEMETRY COORDINATES UPDATER
  // ==========================================================================
  const logisticsStatusTag = document.querySelector('#s119 .tracking-box span');
  const logisticsTextPing = document.querySelector('#s119 p');

  if (logisticsStatusTag && logisticsTextPing) {
    const checkpoints = [
      "Terminal Port Storage Facility Node 4 Terminal Hub",
      "National Expressway Toll Route Sector 12 Gate",
      "Urban Fulfillment Distribution Sub-center Entry Vault",
      "Out For Final Address Node Delivery Dispatch Block"
    ];
    let routeStep = 0;

    setInterval(() => {
      routeStep = (routeStep + 1) % checkpoints.length;
      logisticsTextPing.innerText = `Last Checkpoint Ping: ${checkpoints[routeStep]}`;
      
      if (routeStep === 3) {
        logisticsStatusTag.innerText = "Out For Delivery";
        logisticsStatusTag.style.background = "var(--accent-blue)";
        logisticsStatusTag.style.color = "white";
      } else {
        logisticsStatusTag.innerText = "En Route";
        logisticsStatusTag.style.background = "var(--accent-orange)";
        logisticsStatusTag.style.color = "black";
      }
    }, 7000);
  }

  // ==========================================================================
  // 🏥 TASK 120: HEALTHCARE CLINIC SLOT BOOKING ALLOCATION
  // ==========================================================================
  const clinicalTimeSlots = document.querySelectorAll('#s120 .slot-btn');
  
  clinicalTimeSlots.forEach(slot => {
    slot.addEventListener('click', () => {
      if (!slot.classList.contains('booked-slot')) {
        const confirmBooking = confirm(`🏥 Do you want to reserve the clinical care consultation slot at ${slot.innerText}?`);
        if (confirmBooking) {
          slot.classList.add('booked-slot');
          slot.innerText = `${slot.innerText} (Booked)`;
          slot.style.backgroundColor = "var(--accent-red)";
          slot.style.borderColor = "var(--accent-red)";
          slot.style.color = "white";
          slot.style.cursor = "not-allowed";
        }
      }
    });
  });
});
