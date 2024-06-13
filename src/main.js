    //numero introduciod por el usuario
    const inputNum = document.getElementById('numero');
    //numero mostrado
    const numeroM = document.querySelector('.cout');
    //pantalla de ganar o perder proxi
    const win_screen = document.querySelector('.off');
    const por_poco_screem =  document.querySelector('.off');
    const lose_screen = document.querySelector('.off');
    //boton
    const btn_adivinar = document.getElementById('btn_adivinar');
    //numero random
    let random = Math.floor(Math.random() * 30);
    

    btn_adivinar.addEventListener('click', () => {
        //VALIDAR SI  LO  DATOS SOLO SON  NUMEROS
        inputNum.addEventListener("input", function() {
            this.value = this.value.replace(/[^0-9]/g, "");
        });        
        if(random == inputNum.value){
            inputNum.value = "";
            win_screen.classList.remove("off");
            win_screen.classList.add("win");
            setTimeout(function(){;
                win_screen.classList.remove("win");
                win_screen.classList.add("off");
            } ,2000);
        }
        if(random >= inputNum.value){
            inputNum.value = "";
            win_screen.classList.remove("off");
            win_screen.classList.add("por-poco");
            setTimeout(function(){
                win_screen.classList.remove("por-poco");
                win_screen.classList.add("off");
            } ,2000);
        }
        else{

            lose_screen.classList.add("lose");
            numeroM.innerHTML = random;
            setTimeout(function(){
                lose_screen.classList.remove("lose");
                lose_screen.classList.add("off");
                inputNum.focus();
            } ,2000);
        }
    });
