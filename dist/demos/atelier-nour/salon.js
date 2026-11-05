const dateField = document.querySelector('#day');
const today = new Date();
const localDay = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
dateField.min = localDay;
document.querySelector('#booking-form').addEventListener('submit', event => { event.preventDefault(); const chosen = new Date(`${dateField.value}T12:00:00`); document.querySelector('#result').textContent = `Preview only: ${document.querySelector('#treatment').value}, requested for ${chosen.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}. No appointment has been booked and no information has been sent.`; });
