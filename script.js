const heading = document.querySelector('h1');

heading.addEventListener('click', () => {
  heading.style.color = heading.style.color === 'red' ? '#0070f3' : 'red';
});