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
    
    btn_adivinar.addEventListener('click', () => {
            // numeros aliatorio
            let randoM = Math.floor(Math.random() * 30) + 1;
            const numeroIngresado =  parseInt(inputN.value);
            console.log(randoM, " == " , numeroIngresado);
            if(randoM == numeroIngresado){
                win(10000);
                clear();
            }else if(randoM > numeroIngresado || randoM  < numeroIngresado){
                cerca(1500);
                clear();
            }
            clear();
    });
    function win(time){
        win_screen.classList.remove("win-off");
        win_screen.classList.add("win");
        setTimeout(function(){
            win_screen.classList.remove("win");
            win_screen.classList.add("win-off");
        } ,time);
    }
    function cerca(time){
            por_poco_screem.classList.remove("poco-off");
            por_poco_screem.classList.add("por-poco");
        setTimeout(function(){
            por_poco_screem.classList.remove("por-poco");
            por_poco_screem.classList.add("poco-off");
        } ,time);
    }
    function clear(){
        inputN.value = "";
    }