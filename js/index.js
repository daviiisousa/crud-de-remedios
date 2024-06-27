
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
    if(!quantidade || quantidade <= 0){
        Swal.fire({
            title: `O campo quantidade esta incorreto`,
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
                <td>${quantidade}</td>
            </tr>
    </table>`

    const div = document.createElement('div')

    div.appendChild(conteudo)
    resposta.appendChild(div)

    const payload = {
        nome: nomeRemedio,
        quantidade: quantidade
    }

    const requestOptions = {
        method: "POST",
        redirect: "follow",
        body: JSON.stringify(payload)
      };
      
      fetch("http://localhost:3000/Remedios", requestOptions)
        .then((response) => response.text( ))
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
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
        <td class="w-25">${remedio.quantidade}</td>
        <td class="w-25"> <button type="button" onclick="pedido()" class="btn btn-outline-primary">Fazer Pedido</button></td> 
    </tr>
    </table>
    `  
   })

}

function pedido(){
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Pedido feito com sucesso"
      });
    
    }

API()

