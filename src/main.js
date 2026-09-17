import './style.css'

document.getElementById('year').textContent = new Date().getFullYear()
document.getElementById('last-updated').textContent = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
