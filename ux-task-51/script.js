(() => {
  const STORAGE_KEY = 'ux_task_51_interviews_v1'
  const form = document.getElementById('interviewForm')
  const participant = document.getElementById('participant')
  const role = document.getElementById('role')
  const dateEl = document.getElementById('date')
  const notes = document.getElementById('notes')
  const rating = document.getElementById('rating')
  const list = document.getElementById('list')
  const clearAll = document.getElementById('clearAll')

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    } catch (e) { return [] }
  }

  function save(items) { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) }

  function render() {
    const items = load()
    list.innerHTML = ''
    if (!items.length) {
      list.innerHTML = '<div class="meta">No interviews saved yet.</div>'
      return
    }
    for (const it of items.slice().reverse()) {
      const el = document.createElement('div')
      el.className = 'interview-item'
      el.innerHTML = `
        <div class="meta"><strong>${escapeHtml(it.participant || '—')}</strong> • ${escapeHtml(it.role||'—')} • ${escapeHtml(it.date||'—')} • Rating: ${escapeHtml(it.rating||'—')}</div>
        <div class="note">${escapeHtml(it.notes||'')}</div>
      `
      list.appendChild(el)
    }
  }

  function escapeHtml(s){return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

  form.addEventListener('submit', e => {
    e.preventDefault()
    const items = load()
    items.push({
      participant: participant.value.trim(),
      role: role.value.trim(),
      date: dateEl.value,
      notes: notes.value.trim(),
      rating: rating.value
    })
    save(items)
    form.reset()
    render()
  })

  clearAll.addEventListener('click', () => {
    if (!confirm('Clear all saved interviews?')) return
    localStorage.removeItem(STORAGE_KEY)
    render()
  })

  render()
})();
