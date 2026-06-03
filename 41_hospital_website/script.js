document.getElementById('book-appointment')?.addEventListener('click', ()=>{
  alert('Appointment booking simulated. Implement backend to persist appointments.');
});

document.getElementById('contact-form')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Contact form submitted (client side). Replace with API call.');
  e.target.reset();
});
