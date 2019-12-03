window.onload = () => {
    const p =  await fetch(`${urlBase}/spaceManager/getU', id_gestor_espaco`, {
        method:"POST", 
    })
    const Nome = document.getElementById("nome").innerHTML= p.nome_gestor_espaco;
    const Email = document.getElementById("email").innerHTML=p.email;
    const UserName = document.getElementById("username").innerHTML=p.user_userName;
    const Morada= document.getElementById("morada").innerHTML=p.morada;
    const NIF = document.getElementById("nif").innerHTML=p.nif;
    const Data = document.getElementById("nascimento").innerHTML=p.data_nascimento;
    const Telefone = document.getElementById("telefone").innerHTML=p.telefone;
}
