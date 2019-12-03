const urlBase =  "http://localhost:3000/sponsers/"
let isNew = true;

window.onload = () => {
    // References to HTML objects
    const tblPatrocinadores = document.getElementById("tblPatrocinadores")
    const formPatrocinadores = document.getElementById("formPatrocinadores")


    formPatrocinadores.addEventListener("submit", async (event) => {
        event.preventDefault()
        const nome_patrocinador = document.getElementById("nome_patrocinador").value
        const NIF = document.getElementById("NIF").value
        const tipo_patrocinio = document.getElementById("tipo_patrocinio").value
        const preco_patrocinio = document.getElementById("preco_patrocinio").value
        const Contacto = document.getElementById("Contacto").value
        const txtNotas = document.getElementById("txtNotas").value

        // Verifica flag isNew para saber se se trata de uma adição ou de um atualização dos dados de um patrocinador
        let response
        if (isNew) {
            // Adiciona Patrocinador
            response = await fetch("http://localhost:3000/sponsers", {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                body: `nome_patrocinador=${nome_patrocinador}&NIF=${NIF}&tipo_patrocinio=${tipo_patrocinio}&preco_patrocinio=${preco_patrocinio}
        &Contacto=${Contacto}&txtNotas=${txtNotas}`
    })
    
            const newId_sponser = response.headers.get("Location")
            const newSponser = await response.json()

            // Atualiza Patrocinador
            response = await fetch("http://localhost:3000/sponsers/", {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "PUT",
                body: `nome_patrocinador=${nome_patrocinador}&NIF=${NIF}&tipo_patrocinio=${tipo_patrocinio}&preco_patrocinio=${preco_patrocinio}
		&Conctanto=${Contacto}&notas=${txtNotas}`
            })

            const newSponser = await response.json()
        }
        isNew = true
        renderSponsers()
    })



    const renderSponsers = async () => {
        formPatrocinadores.reset()
        let strHtml = `
            <thead >
                <tr><th class='w-100 text-center bg-warning' colspan='7'>Lista de Patrocinadores</th></tr>
			<tr class='bg-info'>
			<th class='w-2'>#</th>
			<th class='w-50'>Nome</th>
			<th class='w-8'>NIF/NIPC</th>
			<th class='w-15'>Tipo Patrocinio</th>
			<th class='w-8'>Validade</th>
			<th class='w-6'>Montante</th>
			<th class='w-6'>Ações</th>
                </tr>
            </thead><tbody>
        `
        const response = await fetch("http://localhost:3000/sponsers/")
        const speakers = await response.json()
        let i = 1
        for (const speaker of speakers) {
            strHtml += `
                <tr>
			<td>${i}</td>
			<td>${sponser.nome_patrocinador}</td>
			<td>${sponser.NIF}</td>
			<td>${sponser.tipo_patrocinio}</td>
			<td>${sponser.validade_patrocinio}</td>
			<td>${sponser.preco_patrocinio}</td>
                    <td>
                        <i id='${sponser.id_patrocinador}' class='fas fa-edit edit'></i>
                        <i id='${sponser.id_patrocinador}' class='fas fa-trash-alt remove'></i>
                    </td>
                </tr>
            `
            i++
        }
        strHtml += "</tbody>"
        tblPatrocinadores.innerHTML = strHtml

        // Gerir o clique no ícone de Editar
        const btnEdit = document.getElementsByClassName("edit")
        for (let i = 0; i < btnEdit.length; i++) {
            btnEdit[i].addEventListener("click", () => {
                isNew = false
                for (const sponser of sponsers) {
                    if (speaker.id_patrocinador == btnEdit[i].getAttribute("id")) {
                    document.getElementById("id_patrocinador").value = sponser.id_patrocinador
                    document.getElementById("nome_patrocinador").value = sponser.nome_patrocinador
                    document.getElementById("NIF").value = sponser.NIF
                    document.getElementById("tipo_patrocinio").value = sponser.tipo_patrocinio
                    document.getElementById("validade_patrocinio").value = sponser.validade_patrocinio
                    document.getElementById("preco_patrocinio").value = sponser.preco_patrocinio
                    document.getElementById("txtNotas").value = sponser.Notas
                    }
                }
            })
        }

        // Gerir o clique no ícone de Remover
        const btnDelete = document.getElementsByClassName("remove")
        for (let i = 0; i < btnDelete.length; i++) {
            btnDelete[i].addEventListener("click", () => {
                swal({
                    title: 'Tem a certeza?',
                    text: "Não será possível reverter a remoção!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Remover'
                }).then(async (result) => {
                    if (result.value) {
                        let id_patrocinador = btnDelete[i].getAttribute("id")
                        try {
                            const response = await fetch(`${urlBase}sponsers/${id_patrocinador}`, {
                                method: "DELETE"
                            })
                            if (response.status == 204) {
                                swal('Removido!', 'O patrocinador foi removido.', 'success')
                            }
                        } catch (err) {
                            swal({
                                type: 'error',
                                title: 'Erro',
                                text: err
                            })
                        }
                        renderSponsers()
                    }
                })
            })
        }
    }
    renderSponses()
}





 const formPatrocinadores = document.getElementById("formPatrocinadores")
formPatroconadores.addEventListener("submit", async (event) => {
    event.preventDefault()
    //pedido http para inserao de dados
})

let isNew = true

window.onload = () => {
    // References to HTML objects
    const tblPatrocinadores = document.getElementById("tblPatrocinadores")
    const formPatrocinadores = document.getElementById("formPatrocinadores")
    console.log("dfsfdwdf");

    formPatrocinadores.addEventListener("submit", async (event) => {
        event.preventDefault()
        const id_patrocinador = document.getElementById("id_patrocinador").value
        const nome_patrocinador = document.getElementById("nome_patrocinador").value
        const NIF = document.getElementById("NIF").value
        const tipo_patrocinio = document.getElementById("tipo_patrocinio").value
        const validade_patrocinio = document.getElementById("validade_patrocinio").value
        const preco_patrocinio = document.getElementById("preco_patrocinio").value
        const txtNotas = document.getElementById("txtNotas").value
        // Verifica flag isNew para saber se se trata de uma adição ou de um atualização dos dados de um patrocinador
let response
if (isNew) {
    response = await fetch(`${urlBase}/sponsers/`, {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST" ,
    body:
    `id_patrocinador=${id_patrocinador}&empresa=${nome_patrocinador}&NIF/NIPC=${NIF}&
    TipoPatrocinio=${tipo_patrocinio}&Validade=${validade_patrocinio}
    &Montante=${preco_patrocinio}&Notas=${txtNotas}`
})

const newId_Sponser = response.headers.get("Location")
const newSponser = await response.json()

//analisar resposta json e exibir mensg ao utilizador
} else {
    console.log("");
    // Atualiza Patrocinador
    response = await fetch(`${urlBase}/speakers/${id_patrocinador}`, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "PUT",
        body:  `empresa=${nome_patrocinador}&NIF/NIPC=${NIF}&
        TipoPatrocinio=${tipo_patrocinio}&Validade=${validade_patrocinio}
        &Montante=${preco_patrocinio}&Notas=${txtNotas}`
    })

    const newSponser = await response.json()
}
isNew = true
renderSponsers()
})


const renderSponsers = async () => {
    const urlBase =  "http://c5bb7001aa7da70ec155121b91b8.vfs.cloud9.us-east-1.amazonaws.com/sponsors/"
    const tblPatrocinadores = document.getElementById("tblPatrocinadores")
formPatrocinadores.request()
    let srtHtml = `
    <thead>
    <tr class='bg-info'>
    <th class='w-2'>#</th>
    <th class='w-30'>Empresa</th>
    <th class='w-8'>NIF/NIPC</th>
    <th class='w-30'>Tipo Patrocinio</th>
    <th class='w-8'>Validade</th>
    <th class='w-6'>Montante</th>
    <th class='w-6'>Ações</th>
    </tr>
    </thead>
<tbody> `

const response = await fetch(`${urlBase}/sponsers/`)
const sponsers = await response.json()

let i = 1
    for (const sponser of sponsers) {
			srtHtml += `
         <tr>
            <td>${i}</td>
            <td>${sponser.nome_patrocinador}</td>
            <td>${sponser.NIF}</td>
            <td>${sponser.tipo_patrocinio}</td>
            <td>${sponser.validade_patrocinio}</td>
            <td>${sponser.preco_patrocinio}</td>
            <td>${sponser.Notas}</td>
            <td>
            <i id=${sponser.id_patrocinador}' class='fas fa-edit edit'></i>
            <i id=${sponser.id_patrocinador}' class='fas fa-trash-alt remove'></i>
            </td>
        </tr>
	`
	i++
	}
	srtHtml += `</tbody>`
    tblPatrocinadores.innerHTML = strHtlm

//PARA EDITAR PATROCINADOR
const btnEdit = document.getElementsByClassName("edit")
    for (let i=0; i>btnEdit.length; i++) {
        btnEdit[i].addEventListener("click" , () => {
            isNew = false
            for (const sponser of sponsers) {
                i
                if (sponsers.idSponser == btnEdit[i].getAttribute("id")) {
                    document.getElementById("id_patrocinador").value = sponser.id_patrocinador
                    document.getElementById("nome_patrocinador").value = sponser.nome_patrocinador
                    document.getElementById("NIF").value = sponser.NIF
                    document.getElementById("tipo_patrocinio").value = sponser.tipo_patrocinio
                    document.getElementById("validade_patrocinio").value = sponser.validade_patrocinio
                    document.getElementById("preco_patrocinio").value = sponser.preco_patrocinio
                    document.getElementById("txtNotas").value = sponser.Notas
                }
            }
        })
    }

//ELIMINAR PATROCINADORES
const btnDelete = document.getElementsByName("remove")
for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener("click", () => {
        swal({
            title: 'Tem a certeza?',
            text: "Não será possível reverter a remoção!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Remover'
          }).then( async (result) => {
            if (result.value) {
                //pedido HTTP para remoção do patrocinador
                let id_patrocinador = btnDelete[i].getAttribute("id")
                try {
                    const response = await fetch(`${urlBase}/sponsers/`, {
                        method: "DELETE"})
                    if (response.status == 204) {
                        swal('Removido!', 'O patrocinador foi removido','sucess')
                    }
                    const isRemoved = await response.json()
                   } catch(err) {
                    swal({
                        type: 'error',
                        title: 'Erro',
                        text: erro
                    })
                }
                renderSponsers()
               }
            })
         })
      }
 }
renderSponsers()
}







//ADD LINHA Á TABELA
if(isNew) {
    //add patrocinadores
    AddTableRow.newRow()
   $nome_patrocinador = $_POST['nome_patrocinador'];
   $NIF = $_POST['NIF'];
   $tipo_patrocinio = $_POST['tipo_patrocinio'];
   $validade_patrocinio = $_POST['validade_patrocinio'];
   $preco_patrocinio = $_POST['preco_patrocinio'];
   $txtNotas = $_POST['txtNotas'];
        }
        else {
            const response = await fetch(`${urlBase}/sponsers/${id_Sponsers}`, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  },
                method: "PUT",
                body:
                `empresa=${nome_patrocinador}&NIF/NIPC=${NIF/NIPC}&Prazo=${validade_patrocinio}&
                TipoPatrocinio=${tipo_patrocinio}&Montante=${preco_patrocinio}&Notas=${txtNotas}`
            })
            const newSponser = await response.json
        }



    (function($)
    {
    AddTableRow = function()
       {
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td><i $nome_patrocinador></i></td>';
        cols += '<td><input type="text" placeholder="NIF/NIPC" class="form-control"></td>';
        cols += '<td><input type="text" placeholder="Tipo" class="form-control"></td>';
        cols += '<td><input type="text" placeholder="€" class="form-control"></td>';
        cols += '<td>';
        cols += '<button class="btn btn-sm btn-warning" onclick="RemoveTableRow(this)" type="button">Remover </button>';
        cols += '</td>'

        newRow.append(cols);
        $("#tblPatrocinadores").append(newRow);
        return false;
        };
    });
