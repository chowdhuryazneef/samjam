function moveButton() {
  const noBtn = document.getElementById('noBtn');
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

function yesClick() {
  document.body.innerHTML = '<h1 class="response">Yay! Mwah <3</h1>';
  document.body.style.display = 'flex';
  document.body.style.alignItems = 'center';
  document.body.style.justifyContent = 'center';
}

// Add event listeners for both mouseover and touchstart
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);
