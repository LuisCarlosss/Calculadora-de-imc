
function imc(){
    var altura = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;
    var res = document.getElementById('res');
    res.style.fontSize = "25px";

    var imc = peso / (altura * altura)
    
    
    if (imc < 18.5){
        res.innerHTML = 'Você estar Muito Magro'
    }else if(imc < 24.9){
        res.innerHTML = 'Você estar Normal'
    }else if(imc < 29.9){
        res.innerHTML = 'Você estar com Sobrepeso'
    }else if(imc < 39.9){
        res.innerHTML = 'Você estar com obesidade'
    }else if(imc > 39.9){
        res.innerHTML = 'Você estar com obesidade grave'
    }else{
        window.alert('Erro : Valor invalido!')
    }
}