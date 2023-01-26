    //numero introduciod por el usuario
    const numeroUser = document.getElementById('inputN');
    //numero mostrado
    const numeroM = document.querySelector('#winNumeroP');
    //pantalla de ganar o perder
    const G_P = document.querySelector('#win');
    //boton
    const btn = document.getElementById('btn');
    //numero random
    let numero = Math.floor(Math.random() * 100);
    

    btn.addEventListener('click', () => {
        if(parseInt(numero) == parseInt(numeroUser.value)){
            G_P.textContent = "GANASTE :)";
            numeroM.textContent = numero;
            document.getElementById('inputN').value = " ";
            document.querySelector('#winNumeroP').value = numeroUser;
            setTimeout(function(){
                    G_P.textContent = " ";
                    numeroM.textContent = " ";
                    document.getElementById('inputN').focus();
            } ,2000);
        }else{
        G_P.textContent = "PERDISTE :(";
        numeroM.textContent = parseInt(numeroUser.value);
            document.getElementById('inputN').value = " ";
            document.querySelector('#winNumeroP').value = numeroUser;
            setTimeout(function(){
                    G_P.textContent = " ";
                    numeroM.textContent = " ";
                    document.getElementById('inputN').focus();
            } ,2000);
        }
        
    });
