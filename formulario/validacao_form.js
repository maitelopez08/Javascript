/* SEGUNDO CODIGO CORRIGIDO

var formEl1  = document.getElementById("meuForm");

//CHAMA A FUNÇÃO CAPTURA_EVENTOS
captura_eventos(formEl1,'submit',formValid);

//FUNÇÃO PARA CAPTURAR EVENTOS
function captura_eventos(objeto, evento, funcao){
    //Teste addEventListener
    if(objeto.addEventListener){
        objeto.addEventListener(evento,funcao,true)
    }
    //Teste attachEvent
    else if(objeto.attachEvent)
        var evento = 'on' + evento;
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


    if(!checados){
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
    return true; */

//////////////////////////////////////////////////////////////////////////////////////////


var formEl1  = document.getElementById("meuForm");

// CHAMA A FUNÇÃO CAPTURA_EVENTOS
captura_eventos(formEl1, 'submit', formValid);

// FUNÇÃO PARA CAPTURAR EVENTOS
function captura_eventos(objeto, evento, funcao) {
    if(objeto.addEventListener) {
        objeto.addEventListener(evento, funcao, true);
    } else if(objeto.attachEvent) {
        objeto.attachEvent('on' + evento, funcao);
    }
}

// FUNÇÃO PARA CANCELAR EVENTOS
function cancela_evento(event) {
    if(event.preventDefault) {
        event.preventDefault();
    } else {
        window.event.returnValue = false;
    }
}

// FUNÇÃO QUE VERIFICA OS CAMPOS RADIO E CHECKBOX
function verificaCampos(campo, event) {
    var checados = false;
    for(var i = 0; i < campo.length; i++) {
        if(campo[i].checked) {
            checados = true;
            break;
        }
    }

    if(!checados) {
        alert('Marque o campo: ' + campo[0].name);
        cancela_evento(event);
        return false;
    }
    return true;
}

// FUNÇÃO PRINCIPAL DE VALIDAÇÃO
function formValid(event) {
    var campoNome = formEl1.textname.value;
    var campoCidade = formEl1.cidades;
    var campoRadios = formEl1.sexo;
    var campoCheckbox = formEl1.rede;

    // Verifica campo de texto
    if(campoNome.length === 0) {
        alert("O campo Nome é obrigatório.");
        cancela_evento(event);
        return false;
    }

    // Verifica se alguma cidade foi selecionada
    if(campoCidade.selectedIndex === 0) {
        alert('Selecione uma cidade.');
        cancela_evento(event);
        return false;
    }

    // Verifica os campos de sexo e redes sociais
    if(!verificaCampos(campoRadios, event)) return false;
    if(!verificaCampos(campoCheckbox, event)) return false;

    alert("O formulário será enviado!");
    return true;
}
