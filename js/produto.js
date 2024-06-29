function Pedido(){
    let rua = document.getElementById("rua").value;
    let telefone = document.getElementById("telefone").value;
    if(!rua){
        Swal.fire({
            title: `O campo nome do rua esta vazio`,
            icon: "error"
        }) 
        return
    }
    if(!telefone){
        Swal.fire({
            title: `O campo telefone esta vazio`,
            icon: "error"
        }) 
        return
    }
    Swal.fire({
        title: "Agradecemos a preferencia ",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
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