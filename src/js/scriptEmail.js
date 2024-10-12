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

// Aplicar eventos aos checkboxes já existentes
checkboxes.forEach(adicionarEventosCheckbox);

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

    // Adiciona eventos ao novo checkbox
    const novoCheckbox = novaFileira.querySelector('input[type="checkbox"]');
    adicionarEventosCheckbox(novoCheckbox); // Adiciona os eventos de seleção e exclusão

    // Limpa o formulário e fechar a página de formulário do email
    formularioEmail.reset();
    novoEmailPagina.classList.add('hidden');
})

// Função para adicionar as novas checkboxes para seleção e exclusão
function adicionarEventosCheckbox(checkbox){
    // Evento para mudar a cor ao selecionar o email
    checkbox.addEventListener('change', function(){
        const fileira = checkbox.closest('tr');
        checkbox.checked ? fileira.classList.add('bg-yellow-200') : fileira.classList.remove('bg-yellow-200');  
    });

    // Evento para remover o email selecionado
    deletarEmail.addEventListener('click', function(){
        const fileira = checkbox.closest('tr');
        if(checkbox.checked) {
            fileira.remove();
        }
    });
}