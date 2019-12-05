/**
 * Função que trava o enter
 */

$(document).ready(function () {
    $('input').keypress(function (e) {
        var code = null;
        code = (e.keyCode ? e.keyCode : e.which);
        return (code == 13) ? false : true;
    });
});

$('.navbar-nav li a').click(function () {
    if (!$(this).parent().hasClass('dropdown')) {
        $('.navbar-collapse').collapse('hide');
    }
});

/*document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".navbar-nav li a:not([href='#'])");
    for (var x = 0; x < links.length; x++) {
        links[x].onclick = function () {
            document.querySelector("button.navbar-toggler").click();
        }
    }
});*/



$(document).ready(
    function () {
        document.getElementById('inputMensagem').innerHTML = '';
    }
)

function validarMensagem() {

    if (document.getElementById('inputNome').value == '') {

        $('#modalErro').modal('show')
        //alert("Erro: Preencha o campo nome antes de enviar a mensagem!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha o nome corretamente!'

        document.getElementById('inputNome').focus();
        return false;
    }

    if (document.getElementById('inputEmail').value == '') {
        $('#modalErro').modal('show')
        //alert("Erro: Preencha o campo email antes de enviar a mensagem!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha o campo E-mail corretamente!';
        document.getElementById('inputEmail').focus();
        return false;
    }

    if (document.getElementById('inputMensagem').value == '') {
        $('#modalErro').modal('show')
        //alert("Erro: Preencha o campo mensagem antes de enviar!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha a mensagem corretamente!';
        document.getElementById('inputMensagem').focus();
        return false;
    }
    $('#modalSucesso').modal('show')
    //alert('Mensagem enviada com sucesso!')
    //document.getElementById('msg-erro').innerHTML = 'Enviado com sucesso!';
    document.getElementById('inputNome').value = ''
    document.getElementById('inputEmail').value = ''
    document.getElementById('inputMensagem').value = ''
    return true;

}


function validarPreAtendimento() {

    if (document.getElementById('nome').value == '') {

        $('#modalErro').modal('show')
        //alert("Erro: Preencha o campo nome antes de enviar a mensagem!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha o nome corretamente!'

        document.getElementById('nome').focus();
        return false;
    }

    if (document.getElementById('data').value == '') {

        $('#modalErro').modal('show')
        //alert("Erro: Preencha o campo nome antes de enviar a mensagem!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha o nome corretamente!'

        document.getElementById('data').focus();
        return false;
    }

    if (document.getElementById('endereco').value == '') {
        $('#modalErro').modal('show')
        //alert("Erro: Preencha o campo email antes de enviar a mensagem!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha o campo E-mail corretamente!';
        document.getElementById('endereco').focus();
        return false;
    }
    if (document.getElementById('email').value == '') {
        $('#modalErro').modal('show')
        //alert("Erro: Preencha o campo email antes de enviar a mensagem!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha o campo E-mail corretamente!';
        document.getElementById('email').focus();
        return false;
    }
    if (document.getElementById('CPF').value == '') {
        $('#modalErro').modal('show')
        //alert("Erro: Preencha o campo email antes de enviar a mensagem!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha o campo E-mail corretamente!';
        document.getElementById('CPF').focus();
        return false;
    }
    if (document.getElementById('naturalidade').value == '') {
        $('#modalErro').modal('show')
        //alert("Erro: Preencha o campo email antes de enviar a mensagem!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha o campo E-mail corretamente!';
        document.getElementById('naturalidade').focus();
        return false;
    }

    if (document.getElementById('telefone1').value == '') {
        $('#modalErro').modal('show')
        //alert("Erro: Preencha o campo mensagem antes de enviar!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha a mensagem corretamente!';
        document.getElementById('telefone1').focus();
        return false;
    }
    $('#modalSucesso').modal('show')

    //alert('Mensagem enviada com sucesso!')
    //document.getElementById('msg-erro').innerHTML = 'Enviado com sucesso!';
    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('endereco').value = ''
    document.getElementById('CPF').value = ''
    document.getElementById('telefone1').value = ''
    document.getElementById('telefone').value = ''
    document.getElementById('naturalidade').value = ''
    document.getElementById('data').value = ''
    document.getElementById('rg').value = ''
    document.getElementById('segunda').value = ''
    document.getElementById('terca').value = ''
    document.getElementById('quarta').value = ''
    document.getElementById('quinta').value = ''
    document.getElementById('sexta').value = ''
    document.getElementById('manha').value = ''
    document.getElementById('tarde').value = ''
    document.getElementById('noite').value = ''

    var inputs = $('input[type=checkbox]');

    inputs.attr('checked', false);
    inputs.prop('checked', false);


    return true;

}





function validarModalResponsavel() {

    if (document.getElementById('nomeResponsavel').value == '') {

        $('#modalErroResponsavel').modal('show')
        //alert("Erro: Preencha o campo nome antes de enviar a mensagem!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha o nome corretamente!'

        document.getElementById('nomeResponsavel').focus();
        return false;
    }

    if (document.getElementById('enderecoResponsavel').value == '') {
        $('#modalErroResponsavel').modal('show')
        //alert("Erro: Preencha o campo email antes de enviar a mensagem!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha o campo E-mail corretamente!';
        document.getElementById('enderecoResponsavel').focus();
        return false;
    }
    if (document.getElementById('emailResponsavel').value == '') {
        $('#modalErroResponsavel').modal('show')
        //alert("Erro: Preencha o campo email antes de enviar a mensagem!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha o campo E-mail corretamente!';
        document.getElementById('emailResponsavel').focus();
        return false;
    }
    if (document.getElementById('CPFResponsavel').value == '') {
        $('#modalErroResponsavel').modal('show')
        //alert("Erro: Preencha o campo email antes de enviar a mensagem!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha o campo E-mail corretamente!';
        document.getElementById('CPFResponsavel').focus();
        return false;
    }

    if (document.getElementById('telefone1Responsavel').value == '') {
        $('#modalErroResponsavel').modal('show')
        //alert("Erro: Preencha o campo mensagem antes de enviar!")
        //document.getElementById('msg-erro').innerHTML = 'Erro: Preencha a mensagem corretamente!';
        document.getElementById('telefone1Responsavel').focus();
        return false;
    }
    $('#modalSucesso').modal('show')
    //alert('Mensagem enviada com sucesso!')
    //document.getElementById('msg-erro').innerHTML = 'Enviado com sucesso!';
    document.getElementById('nomeResponsavel').value = ''
    document.getElementById('emailResponsavel').value = ''
    document.getElementById('enderecoResponsavel').value = ''
    document.getElementById('CPFResponsavel').value = ''
    return true;

}
function MostrarModalResponsavelNovamente() {
    $('#menor').modal('show')
}

function MostrarResponsavelFinalizado() {
    $('#modalSucesso').modal('show')
}

document.getElementById('formResponsavel').style.display = "none"

var campoData = document.getElementById('data')
function openForm() {
    //campoData.addEventListener("blur", function(event){
    var anoNascimento = document.getElementById('data').value.substr(0, 4)
    var idade = 2019 - anoNascimento
    if (idade < 18) {
        //document.getElementById('formResponsavel').style.display="block"
        $('#menor').modal('show')
    } else {
        document.getElementById('formResponsavel').style.display = "none"
    }

    //})
}

/*
 ** Essa parte é caso ocorra uma mudança na idade 
 */
$('formResponsavel').change(function () {

})




const menuItems = document.querySelectorAll('.menu a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault()
    const to = getScrollTopByHref(event.target) - 80

    scrollToPosition(to)

}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    })
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}
