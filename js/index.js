
function enviar(){
    let nomeRemedio = document.getElementById('nomeRemedio').value;
    let quantidade = document.getElementById('quantidade').value;
    
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
        .then((result) => API(result))
        .catch((error) => console.error(error));
}

async function API(){
    const requestOptions ={
        method: "GET"
    };

   const response = await fetch("http://localhost:3000/Remedios", requestOptions);
   const data = await response.json();

   console.log(data);

   const remedios = data;

   const tableElement = document.getElementById('res');

   tableElement.innerHTML = `
        <tr>
            <th>Remedio</th>
            <th>Quantidade</th>
            <th colspan="2">Ações</th>
        </tr>
   `

   tableElement.innerHTML += remedios.map((remedio) => {
        return `
                <tr>
                    <td>${remedio.nome}</td>
                    <td class="w-25">${remedio.quantidade}</td>
                    <td class="w-25"> <button type="button" onclick="pedido()" class="btn btn-outline-primary">Fazer Pedido</button></td> 
                    <td class="w-25"> <button type="button" onclick="excluir('${remedio.id}')" class="btn btn-outline-danger">Excluir</button></td> 
                </tr>
            `
   });
}

function excluir(id) {
    const requestOptions = {
        method: "DELETE"
    };

    fetch(`http://localhost:3000/Remedios/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => API(result))
        .catch((error) => console.error(error));
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

