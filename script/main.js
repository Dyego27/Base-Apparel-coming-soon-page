const emailInput = document.getElementById('input');
const validarButton = document.getElementById('bttn');
const erroImagem = document.getElementById('errorImg');
const erroTexto = document.getElementById('errorSpan')
validarButton.addEventListener('click', function() {
  const email = emailInput.value;
  if (validarEmail(email)) {
    erroImagem.style.display = 'none';
    erroTexto.style.display = 'none';
  } else {
    erroImagem.style.display = 'inline';
    erroTexto.style.display = 'block';
  }
});

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}