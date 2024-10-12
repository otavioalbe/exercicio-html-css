const novoEmailBotao = document.getElementById('novoEmailBotao');
const novoEmailPagina = document.getElementById('novoEmailPagina');
const cancelarEmail = document.getElementById('cancelarEmail');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const deletarEmail = document.getElementById('deletarEmail');
const formularioEmail = document.getElementById('formularioEmail')
const tableBody = document.querySelector('tbody')

// Fazer a página de formulário aparecer apertando em "+ novo email"
novoEmailBotao.addEventListener('click', function(){
    novoEmailPagina.classList.remove('hidden');
});

// Fazer a página de formulário se esconder apertando em "cancel"
cancelarEmail.addEventListener('click', function(){
    novoEmailPagina.classList.add('hidden');
})

// Quando selecionar a fila, aparecer amarelo ou tirar quando deselecionar a checkbox
checkboxes.forEach((checkbox)=> {
    checkbox.addEventListener('change', function(){
        const fileira = checkbox.closest('tr');
        checkbox.checked ? fileira.classList.add('bg-yellow-200') : fileira.classList.remove('bg-yellow-200');  
    })
})

// Remover a fileira (email) selecionado apertando na lixeira
checkboxes.forEach((checkbox)=> {
    deletarEmail.addEventListener('click', function(){
        const fileira = checkbox.closest('tr');
        if(checkbox.checked)
            fileira.remove();
    })
})

// Quando enviado o formulário aparece o email na caixa de entrada
formularioEmail.addEventListener('submit', function(e){
    e.preventDefault();

    const remetente = document.getElementById('remetente').value;
    const assunto = document.getElementById('assunto').value;

    const novaFileira = document.createElement('tr');
    novaFileira.innerHTML = `
        <td><input type="checkbox" class="w-5 h-5 flex mx-auto"></td>
        <td class="p-2">${remetente}</td>
        <td class="font-bold p-2">${assunto}</td>
    `;

    tableBody.appendChild(novaFileira);

    // Limpa o formulário e fechar a página de formulário do email
    formularioEmail.reset();
    novoEmailPagina.classList.add('hidden');
})