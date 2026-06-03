const searchInput = document.getElementById('taskSearch');
const taskLinks = document.querySelectorAll('.task-nav a');

if (searchInput) {
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        taskLinks.forEach(link => {
            const visible = link.textContent.toLowerCase().includes(query);
            link.closest('li').style.display = visible ? 'block' : 'none';
        });
    });
}

function showToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2800);
}

function showLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    loader.classList.remove('hidden');
    setTimeout(() => loader.classList.add('hidden'), 2400);
}

function sendChat() {
    const input = document.getElementById('chatInput');
    const panel = document.getElementById('chatPanel');
    if (!input || !panel || !input.value.trim()) return;
    const message = document.createElement('div');
    message.className = 'message outbound';
    message.textContent = input.value.trim();
    panel.appendChild(message);
    input.value = '';
    panel.scrollTop = panel.scrollHeight;
}

function addTask() {
    const input = document.getElementById('todoInput');
    const list = document.getElementById('todoList');
    if (!input || !list || !input.value.trim()) return;
    const item = document.createElement('li');
    item.textContent = input.value.trim();
    list.appendChild(item);
    input.value = '';
}
