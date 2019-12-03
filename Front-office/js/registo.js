window.onload = function() {
    //codigo dom
    refreshUsers(); //adicionar função de validação ao formulário
    validator();
    document.getElementById("contact-form").onsubmit = function (e) {
    //validação do formulário ao submeter
    validator();
    };

//função de validação
function validator() {
    let validator = new Validator(document.querySelector('form[name="contact-form"]'), function
    (err, res) {
    //se validador for válido, res=true e executa o saveUsers()
    if (res) {
     saveUsers();
     }
    },
    {//cria novas regras, verificase o valor do campo que valida é igual ao campo pwd
    rules: {
    password: function (value) {
    return (value === document.getElementById("pwd").value);
         }
    },
    messages: {
    en: {
    password: {
    incorrect: "Password diferentes!"
    }
    }
    }
    });
    }    

    function saveUsers() {
        var data = {};
        data.nome = document.getElementById("nome").value;
        data.username = document.getElementById("username").value;
        data.email = document.getElementById("email").value;
        data.pass = document.getElementById("pwd").value;
        console.log(data); //debugging para ver os dados que foram enviados
        //chamada fetch para envio dos dados para o servior via POST
        fetch('https://umpw-cfportela.c9users.io/users',
         {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(data)
        }).then(function (response) {
        if (!response.ok)
         {
        console.log(response.status); //=> number 100–599
        console.log(response.statusText); //=> String
        console.log(response.headers); //=> Headers
        console.log(response.url); //=> String
        if (response.status === 409) {
        alert("Duplicated Email");
        } else {
        throw Error(response.statusText);
        }
        } else {
        document.getElementById("formNewUser").reset(); //limpeza dos dados do form
        alert("submitted with success");
        refreshUsers();
        }
        }).then(function (result) {console.log(result);
        }).catch(function (err) {alert("Submission error"); console.error(err);
        });
        }

const btnRegisto = document.getElementById(btnRegisto)
btnRegisto.addEventListener("click", function() {
    //ABERTURA JANELA MODAL
})