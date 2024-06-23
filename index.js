
function enviar(){
    let nomeRemedio = document.getElementById('nomeRemedio').value;
    let quantidade = document.getElementById('quantidade').value;
    let resposta = document.getElementById('res2')
    if(!nomeRemedio || !/^[^\d]+$/.test(nomeRemedio)){
        alert('digite um nome de remedio valido')
        return
    }
    if(!quantidade || quantidade < 0){
        alert('digite uma quantidade valida')
        return
    }
    let conteudo =
    `<table  class="table table-hover mt-3"> 
            <tr>
                <td>${nomeRemedio}</td>
                <td class="w-50">${quantidade}</td>
            </tr>
    </table>`
    resposta.innerHTML = conteudo 
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

