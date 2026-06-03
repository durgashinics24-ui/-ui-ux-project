document.getElementById('search').addEventListener('click', function(){
  const q = document.getElementById('q').value.trim();
  const el = document.getElementById('results');
  el.innerHTML = '';
  if(!q){ el.textContent = 'Enter a search term.'; return }
  // Demo: fake results
  const li = document.createElement('div');
  li.className = 'job-card';
  li.innerHTML = `<h3>${q} - Senior</h3><p>Acme Corp • Remote</p>`;
  el.appendChild(li);
});