var formEl1  = document.getElementById("meuForm");

//CHAMA A FUNÇÃO CAPTURA_EVENTOS
captura_eventos(formEl,'submit',formValid);

//FUNÇÃO PARA CAPTURAR EVENTOS
function captura_eventos(objeto, evento, funcao){
    //Teste addEventListener
    if(objeto.addEventListener){
        objeto.addEventListener(evento,funcao,true)
    }
    //Teste attachEvent
    else if(objeto.attachEvent)
        var event = 'on' + evento;
        objeto.attachEvent(evento,funcao);
}

// FUNÇÃO PARA CANCELAR EVENTOS
function cancela_evento(evento){
    if(event.preventDefault){
        event.preventDefault()
    }else{
        window.event.returnValue = false;
    }
}

//FUNÇÃO QUE VERIFICA OS CAMPOS RADIO E CHECKBOX
function verificaCampos(campo){
    //variavel que verifica os radios
    var checados = false;
    //verifica os radios
    for(var i=0;i<campo.length; i++){
        if(campo[i].checked){
            checados=true;
        }
    }


    if(!chegados){
        alert('Marque o campo' + campo[0].name);
        cancela_evento(evento);
        return false;
    }
}

function formValid(event){
    //pega os campos text e select
    var campoNome = formEl1.textname.value;
    var campoCidade = formEl1.cidades;
    var campoRadios = formEl1.sexo;
    var campoCheckbox = formEl1.rede;

// VERIFICA CAMPO DE TEXTO
    if(campoNome.length == 0){
        alert("O campo Nome é obrigatório.");
        return false;
    }

    //LAÇO QUE PERCORRE TODAS AS OPÇÕES
    for (var i=0;i<campoCidade.length; i++){
        if(campoCidade[i].value ==""){
            alert('Selecione uma opção');
            cancela_evento(evento);
        }
    } 
   
}
//CHAMA A FUNÇÃO VERIFICA CAMPOS PARA O RADIO
    verificaCampos(camposRadios);

//CHAMA A FUNÇÃO VERIFICA CAMPOS PARA O RADIO
    verificaCampos(camposCheckbox);
    alert("O formulario será enviado");
    return true;





