// o cosigo abaixo nao deu certo
// function enviar(){
//     let nomeRemedio = document.getElementById('nomeRemedio').value;
//     let quantidade = document.getElementById('quantidade').value;
//     let resposta = document.getElementById('res')
//     resposta.innerHTML = 
//     `<table  class="table table-hover mt-3"> 
//             <tr>
//                 <th>Remedio</th>
//                 <th>Quantidade</th>
//             </tr>
//             <tr>
//                 <td>${nomeRemedio}</td>
//                 <td>${quantidade}</td>
//             </tr>
//     </table>`
// }

async function API(){
    const metodos ={
        method: "GET"
    };

    let resposta = document.getElementById('res');

   const response = await fetch("http://localhost:3000/Remedios", metodos);
   const data = await response.json();

   console.log(data);

   const remedios = data;

   remedios.map((remedio) =>{

    const div = document.createElement('div');

    const quantidade = document.createElement('p')
    
    const nome = document.createElement('p');
    
    div.appendChild(nome);
    div.appendChild(quantidade);
    resposta.appendChild(div);

    resposta.innerHTML = `<table class="table table-striped table-hover mt-5">
            <tr>
                <th>Remedio</th>
                <th>Quantidade</th>
            </tr>
            <tr>
                <td>${remedio.nome}</td>
                <td>${remedio.quantidade}</td>
            </tr>
        </table>`
    
   })

}

API()