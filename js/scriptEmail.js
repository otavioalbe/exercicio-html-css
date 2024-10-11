const novoEmail = document.getElementById("novoEmail");
const formularioEmail = document.getElementById("formularioEmail")
const cancelarEmail = document.getElementById("cancelarEmail")

novoEmail.addEventListener('click', function(){
    formularioEmail.classList.remove('hidden')
});

cancelarEmail.addEventListener('click', function(){
    formularioEmail.classList.add('hidden')
})