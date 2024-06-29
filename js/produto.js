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