
function enviar(){
    let nomeRemedio = document.getElementById('nomeRemedio').value;
    let quantidade = document.getElementById('quantidade').value;
    let resposta = document.getElementById('res')
    
    if(!nomeRemedio || !/^[^\d]+$/.test(nomeRemedio)){
        Swal.fire({
            title: `O campo nome do remedio esta incorreto`,
            icon: "error"
        }) 
        return
    }
    if(!quantidade || quantidade < 0){
        Swal.fire({
            title: `O campo quantidade esta vazio`,
            icon: "error"
        })
        return
    }
    if(nomeRemedio && quantidade){
        Swal.fire({
            title: `remedio cadastrado`,
            icon: "success"
        })
        
    }

    const conteudo = document.createElement('p')
    conteudo.innerHTML = 
    `<table  class="table table-hover mt-3"> 
            <tr>
                <td>${nomeRemedio}</td>
                <td class="w-50">${quantidade}</td>
            </tr>
    </table>`

    const div = document.createElement('div')

    div.appendChild(conteudo)
    resposta.appendChild(div) 
}

async function API(){
    const requestOptions ={
        method: "GET"
    };

    let resposta = document.getElementById('res');

   const response = await fetch("http://localhost:3000/Remedios", requestOptions);
   const data = await response.json();

   console.log(data);

   const remedios = data;

   remedios.map((remedio) =>{

    const div = document.createElement('div');

    const quantidade = document.createElement('p')
    
    const nome = document.createElement('p');
    
    div.appendChild(nome);
    div.appendChild(quantidade);
    resposta.appendChild(div).innerHTML = 
    `<table class="table table-hover">
    <tr>
        <td>${remedio.nome}</td>
        <td class="w-50">${remedio.quantidade}</td>
    </tr>
    </table>
    `  
   })

}

API()

