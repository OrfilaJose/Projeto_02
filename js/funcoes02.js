$(function(){
	$('form').submit(function(e){
		e.preventDefault();
		var nome = $('input[name=nome]').val();
		var email = $('input[name=email]').val();
		var telefone  = $('input[name=telefone]').val();

		if(verificarNome(nome) == false){
			aplicarCampoInvalido($('input[name=nome]'));
		}
		else{
			console.log("Campo Nome OK.");
		}
		if(verificarEmail(email) == false){
			aplicarCampoInvalido($('input[name=email]'));
		}
		else{
			console.log("Campo Email OK.");
		}
		if(verificarTelefone(telefone) == false){
			aplicarCampoInvalido($('input[name=telefone]'));
		}
		else{
			console.log("Campo Telefone OK.");
		}
	})

	function verificarNome(nome){
		if(nome == ''){
			return false;
		}
		var amount = nome.split(' ').length - 1;
		var totalNomes = nome.split(' ');
		if(amount >= 2){
			for(var i = 0; i <= amount; i++){
				if(totalNomes[i].match(/^[A-ZÁÉÍÓÚÀÉÍÓÚÃÕÇ]{1}[a-záéíóúàèìòùãõç]{1,}$/)){

				}
				else{
					return false;
				}
			}
		}else{
			return false;
		}
	}

	function verificarEmail(email){
		if(email == ''){
			return false;
		}
		if(email.match(/(^[a-z0-9_.-]{1,})+@+([a-z_.]{1,})$/) == null){
		   return false;
		}
	}
	function verificarTelefone(telefone){
		if(telefone == ''){
			return false;
		}
		if(telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null){
			return false;
		}
	}

	function aplicarCampoInvalido(el){
		el.css("border","2px solid red");
		el.data("invalido","true");
		el.css("color","red");
		el.val("Campo Inválido.");
	}
	function resetarCampo(cx){
		cx.css("border","2px solid #c0c4c2");
		cx.val("");
		cx.css("color","black");
	}

	$('input[type=text]').focus(function(){
		var conteudo = $(this).val();
		if(conteudo == "Campo Inválido."){
			resetarCampo($(this));
		}
	})
})