const searchInput = document.getElementById('taskSearch');
const links = document.querySelectorAll('.task-menu a');

if (searchInput) {
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        links.forEach(link => {
            const label = link.textContent.toLowerCase();
            const visible = label.includes(query);
            const li = link.closest('li');
            if (li) li.style.display = visible ? 'block' : 'none';
            else link.style.display = visible ? 'block' : 'none';
        });
    });
}

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

function showNotification() {
    const toast = document.getElementById('notificationToast');
    if (!toast) return;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2600);
}

function showLoader() {
    const loader = document.getElementById('loaderOverlay');
    if (!loader) return;
    loader.classList.remove('hidden');
    setTimeout(() => loader.classList.add('hidden'), 2200);
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const container = document.getElementById('chatMessages');
    if (!input || !container) return;
    const text = input.value.trim();
    if (!text) return;
    const message = document.createElement('div');
    message.className = 'chat-message outgoing';
    message.textContent = text;
    container.appendChild(message);
    input.value = '';
    container.scrollTop = container.scrollHeight;
}

function addTodo() {
    const input = document.getElementById('todoInput');
    const list = document.getElementById('todoList');
    if (!input || !list) return;
    const text = input.value.trim();
    if (!text) return;
    const item = document.createElement('li');
    item.textContent = text;
    list.appendChild(item);
    input.value = '';
}
