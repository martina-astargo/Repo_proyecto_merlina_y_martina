<script>
const powerBtn = document.getElementById('powerBtn');
const intro = document.getElementById('intro-container');
const reportaje = document.getElementById('reportaje');
const screen = document.getElementById('screen');


document.querySelector('.btn-start').addEventListener('click', goToHome);
  function goToHome() {
    window.location.href = 'index.html';  
  }

  setTimeout(() => {
    intro.style.display = 'none';
    reportaje.style.display = 'block';
  }, 1000);
});
</script>