const novoEmail = document.getElementById("novoEmail");
const formularioEmail = document.getElementById("formularioEmail")
const cancelarEmail = document.getElementById("cancelarEmail")
const checkboxes = document.querySelectorAll('input[type="checkbox"]')

novoEmail.addEventListener('click', function(){
    formularioEmail.classList.remove('hidden')
});

cancelarEmail.addEventListener('click', function(){
    formularioEmail.classList.add('hidden')
})

checkboxes.forEach((checkbox)=> {
    checkbox.addEventListener('change', function(){
        const fila = checkbox.closest('tr');
        checkbox.checked ? fila.classList.add('bg-yellow-200') : fila.classList.remove('bg-yellow-200');  
    })
})