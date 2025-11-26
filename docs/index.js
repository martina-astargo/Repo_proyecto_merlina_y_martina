window.onload = function() {
  document.querySelector('.btn-start').addEventListener('click', goToHome);

  function goToHome() {
    window.location.href = 'index.html';
  }

  setTimeout(() => {
    // Aquí debes asegurarte de que los elementos `intro` y `reportaje` existan
    let intro = document.querySelector('#intro-container');
    let reportaje = document.querySelector('#reportaje');

    if (intro && reportaje) {
      intro.style.display = 'none';
      reportaje.style.display = 'block';
    }
  }, 1000);
};
