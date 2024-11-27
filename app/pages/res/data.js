function toggleGptMenu() {
  const gptMenu = document.getElementById('gptMenu');
  const ground = document.getElementById('ground');
  document.querySelector('.block').style.display = 'block'
  document.querySelector('.block').addEventListener('click', function() {
  document.querySelector('.block').style.display = 'none'
  gptMenu.style.display = 'none';
})
  if (gptMenu.style.display === 'none' || gptMenu.style.display === '') {
    gptMenu.style.display = 'block';
    ground.classList.add('locked'); // Kunci ground
  } else {
    document.querySelector('.block').style.display = 'none'
    gptMenu.style.display = 'none';
    ground.classList.remove('locked'); // Buka kunci ground
  }
}

function resetChat() {
  const gptVersion = document.getElementById('gptVersion').value;
  document.getElementById('iframe--content').src = gptVersion;
  document.querySelector('.block').style.display = 'none'
  toggleGptMenu(); // Tutup menu setelah memilih
}

