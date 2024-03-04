const iconMoon = document.getElementById('moon-icon');
const form = document.getElementById('login-form')

//Função para o DARK MODE (após o click)
// Se a classe tiver o ícone de lua, troca para o de sol.
iconMoon.addEventListener('click', () => {
    const container = document.getElementById('container')
    

    if(iconMoon.classList.contains('fa-moon')) {
        iconMoon.classList.replace('fa-moon', 'fa-sun') //Troca o ícone

        //Troca para o tema dark
        container.classList.add('dark')
        form.classList.add('dark')
        return;
    }
    //Else(faz o efeito contrário)
    iconMoon.classList.replace('fa-sun', 'fa-moon')


    container.classList.remove('dark')
    form.classList.remove('dark')

})



// Validação do Formulário (Após enviar)
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')


form.addEventListener("submit", (event) => {
    event.preventDefault(); //O método preventDefault() cancela o evento se for cancelável, o que significa que a ação padrão que pertence ao evento não ocorrerá, como envio de um formulário, se ele não estiver de acordo com os requisitos.
    
//Verifica se os campos estão vazios    
    if(nameInput.value === ""|| emailInput.value === ""|| passwordInput.value  === "") {
        alert("Preencha todos os campos")
        return;
    }


// alerta do email após validação e envio 
    if(!isEmailValid(emailInput.value)){
    alert("Preencha o email corretamente");
    return;
}

// alerta do email após validação e envio 
    if(!isNameValid(nameInput.value)){
    alert("Preencha o seu nome corretamente");
    return;
}

// Quando correto, envia o formulário (else)
form.submit()
})

//Funções que validam os campos através de regex (expressões regulares)
//Com regex você pode buscar, validar e alterar qualquer padrão de caracteres em qualquer texto.

//Email
function isEmailValid(email) {
    
    const emailRegex = new RegExp (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if(emailRegex.test(email)) {
        return true;
    }
    return false;
}

//Valida o nome
function isNameValid(name) {
    
    const nameRegex = new RegExp (
        /^[a-zA-Z ]{2,30}$/
    );
    if(nameRegex.test(name)) {
        return true;
    }
    return false;
}



// Função de mostrar e ocultarsenha
function showPassword() {
    

    if(passwordInput.type === 'password') {
        passwordInput.setAttribute('type', 'text') //Muda o tipo do atributo para texto
        return;   
    }

    passwordInput.setAttribute('type', 'password')
    return;
}

