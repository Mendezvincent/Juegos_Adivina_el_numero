    //numero introduciod por el usuario
    const inputN= document.querySelector('#numero');
    //numero mostrado
    const numeroM = document.querySelector('.cout');
    //pantalla de ganar, perder,  cerca
    const win_screen = document.querySelector('.win-off');
    const por_poco_screem =  document.querySelector('.poco-off');
    const lose_screen = document.querySelector('.lose-off');
    //boton
    const btn_adivinar = document.getElementById('btn_adivinar');
    // numeros aliatorio
    let randoM = Math.floor(Math.random() * 30);

    btn_adivinar.addEventListener('click', () => {
        comprobar(randoM,soloNumero(inputN));
    });
    function  comprobar (random, numeros){
        if(random == numeros){
            win(500);
            setTimeout(function(){
                off_On_Boton(true);
            } ,500);
            clear();
            off_On_Boton(false);
        }else if(random > numeros &&  random  < numeros){
            cerca(500);
            setTimeout(function(){
                off_On_Boton(true);
            } ,500);
            clear();
            off_On_Boton(false);
        }else{
            cerca(500);
            setTimeout(function(){
                off_On_Boton(true);
            } ,500);
            clear();
            off_On_Boton(false);
        }
    }

    function off_On_Boton(active) {
        btn_adivinar.disabled = active;
    }
    function soloNumero(input){
        var regex = /^\d+$/; 
        if(!regex.test(input.value.trim())) {
            alert("El dato ingresado no es válido. Por favor, ingresa solo números."); 
        }
    }

    function win(time){
        win_screen.classList.remove("win-off");
        win_screen.classList.add("win");
        setTimeout(function(){
            win_screen.classList.remove("win");
            win_screen.classList.add("win-off");
        } ,time);
    }
    function lose(time){
        lose_screen.classList.remove("lose-off");
        lose_screen.classList.add("lose");
        numeroM.innerHTML = randoM;
        setTimeout(function(){
            lose_screen.classList.remove("lose");
            lose_screen.classList.add("lose-off");
        } ,time);
    }
    function cerca(time){
            por_poco_screem.classList.remove("poco-off");
            por_poco_screem.classList.add("por-poco");
        setTimeout(function(){
            por_poco_screem.classList.remove("por-poco");
            por_poco_screem.classList.add("poco-off");
            btn_adivinar.setAttribute("disabled", "true");
        } ,time);
    }
    function clear(input){
        input.value = "";
    }