document.addEventListener('DOMContentLoaded', () => {
  // Navigation Tabs Switch Engine Logic
  const tabs = document.querySelectorAll('.tab-nav-btn');
  const panels = document.querySelectorAll('.screen-view-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active-tab'));
      panels.forEach(p => p.classList.remove('display-active'));
      tab.classList.add('active-tab');
      document.getElementById(tab.getAttribute('data-target')).classList.add('display-active');
    });
  });

  // 101. College Management
  let students = 14204;
  document.getElementById('add-student-btn').addEventListener('click', () => {
    students++;
    document.getElementById('student-count-label').textContent = `Total Registered Students: ${students}`;
  });

  // 102. HR Directory Row Generation
  setTimeout(() => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>#EMP-1102</td><td>Priya Patel</td><td><span class="status-tag" style="background:var(--accent-orange)">On Leave</span></td>`;
    document.getElementById('hr-table-body').appendChild(row);
  }, 1500);

  // 103. Inventory Control System
  document.getElementById('restock-btn').addEventListener('click', () => {
    document.getElementById('inventory-alert-log').textContent = "✓ All item volumes restored to catalog maximum levels.";
    document.getElementById('inventory-alert-log').style.color = "var(--accent-green)";
  });

  // 104. Attendance Monitoring System
  document.getElementById('biometric-check-btn').addEventListener('click', () => {
    document.getElementById('attendance-status').textContent = "✓ Authentication successful. Check-in captured at " + new Date().toLocaleTimeString();
    document.getElementById('attendance-status').style.color = "var(--accent-green)";
  });

  // 105. Employee Tasks Management
  document.getElementById('complete-task-btn').addEventListener('click', () => {
    const list = document.getElementById('task-list-backlog');
    if (list.children.length > 0) {
      list.removeChild(list.children[0]);
      alert("Task popped off production backlog queue successfully.");
    }
  });

  // 106. Exam Portal Timer Engine
  let time = 600;
  const clockElement = document.getElementById('exam-timer');
  const timerLoop = setInterval(() => {
    let mins = Math.floor(time / 60);
    let secs = time % 60;
    clockElement.textContent = `Time Left: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
    if (time <= 0) clearInterval(timerLoop);
    time--;
  }, 1000);

  // 107. Internship Placement Workspace
  document.querySelectorAll('.intern-apply-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = "Application Submitted Successfully";
      btn.disabled = true;
      btn.style.background = "var(--text-secondary)";
    });
  });

  // 108. LMS Course Progress Update
  let progress = 40;
  document.getElementById('next-lesson-btn').addEventListener('click', () => {
    if (progress < 100) {
      progress += 20;
      document.getElementById('lms-progress-fill').style.width = `${progress}%`;
    }
  });

  // 109. Hospitality Booking Filter Logic
  document.getElementById('hotel-search-btn').addEventListener('click', () => {
    const q = document.getElementById('hotel-query').value;
    document.getElementById('hotel-results-log').textContent = q ? `Searching available vacancies inside "${q}"...` : "Please type a destination target city.";
  });

  // 110. Aviation Log Engine
  let hrs = 184.5;
  document.getElementById('log-flight-btn').addEventListener('click', () => {
    hrs += 1.0;
    document.getElementById('flight-hours-label').textContent = `${hrs.toFixed(1)} hrs`;
  });
});
