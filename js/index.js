function addMsg(){
    const novaMsg = document.getElementById("campo-msg").value;
    var apagaMsg = document.getElementById("campo-msg");
    apagaMsg.value = "";

    let divAut = document.createElement("div");
    let divTxt = document.createElement("div");

    divAut.innerHTML = `${"Você diz:"}`;
    divTxt.innerHTML = `${novaMsg}`;
    divAut.className = 'msg-usuario';
    divTxt.className = 'txt-usuario';

    const novaDiv = document.getElementById("area-mensagens");
    novaDiv.appendChild(divAut);
    novaDiv.appendChild(divTxt);
  }