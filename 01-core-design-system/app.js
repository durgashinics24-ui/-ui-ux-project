document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('system-toast');
  const primaryBtn = document.getElementById('primary-action');
  const secondaryBtn = document.getElementById('secondary-action');
  const counterLog = document.getElementById('counter-log');
  const icons = document.querySelectorAll('.icon-asset');
  let clickCount = 0;

  function fireToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }

  primaryBtn.addEventListener('click', () => {
    clickCount++;
    counterLog.textContent = `Clicks recorded: ${clickCount}`;
    fireToast('Primary component activated!');
  });

  secondaryBtn.addEventListener('click', () => {
    fireToast('Secondary variant configuration verified.');
  });

  icons.forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', () => {
      fireToast(`Interacted with vector token ID: ${icon.id}`);
    });
  });
});
