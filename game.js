const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');

function jump() {
  if (!player.classList.contains('jump')) {
    player.classList.add('jump');
    setTimeout(() => player.classList.remove('jump'), 500);
  }
}

document.addEventListener('keydown', e => {
  if (e.code === 'Space') jump();
});

document.addEventListener('touchstart', jump);

// Collision detection loop
setInterval(() => {
  const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));

  if (obstacleLeft > (window.innerWidth - 100) && obstacleLeft < (window.innerWidth - 50) && playerTop <= 40) {
    alert('💀 Game Over!');
    window.location.reload();
  }
}, 10);