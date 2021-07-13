// JavaScript from Calculator

/** 
//Numbers
const nove = document.getElementById("noveBnt")
const oito = document.getElementById("oitoBnt")
const sete = document.getElementById("seteBnt")
const seis = document.getElementById("seisBnt")
const cinco = document.getElementById("cincoBnt")
const quatro = document.getElementById("quatroBnt")
const tres = document.getElementById("tresBnt")
const dois = document.getElementById("doisBnt")
const um = document.getElementById("umBnt")

//Operations
const soma = document.getElementById("somaBnt")
const dividir = document.getElementById("dividirBtn")
const multiplicar = document.getElementById("multiplicarBtn")
const subtrair = document.getElementById("subtrairBtn")
const somar = document.getElementById("somarBtn")
const igualdade = document.getElementById("igualBtn")

//Events
nove.onclick = function(){
    console.log(nove.innerText);
};
oito.onclick = function(){
    console.log(oito.innerText);
};
sete.onclick = function(){
    console.log(sete.innerText);
};
seis.onclick = function(){
    console.log(seis.innerText);
};
cinco.onclick = function(){
    console.log(cinco.innerText);
};
quatro.onclick = function(){
    console.log(quatro.innerText);
};
tres.onclick = function(){
    console.log(tres.innerText);
};
dois.onclick = function(){
    console.log(dois.innerText);
};
um.onclick = function(){
    console.log(um.innerText);
};
somar.onclick = function(){
    console.log(somar.innerText);
};
subtrair.onclick = function(){
    console.log(subtrair.innerText);
};
dividir.onclick = function(){
    console.log(dividir.innerText);
};
nove.onclick = function(){
    multiplicar.log(multiplicar.innerText);
};
igualdade.onclick = function(){
    console.log(igualdade.innerText);
};

*/


(function () {
    function criaCal() {
        return {
            display: document.querySelector(`.display`),
            
            starta() {
                this.clickBotto();
                alert(`Ola! jovem. \nFaça bom uso da calculadora :)`);
                this.pressionaEnter();
            },

            pressionaEnter(){
                document.addEventListener(`keypress`, e =>{
                    if(e.keyCode === 13){
                        this.realizaConta();
                    }
                })
            },

            clearDisplay(){
                this.display.value = ``;
            },

            deletOne(){
                this.display.value = this.display.value.slice(0, -1);// apaga ultimo valor
            },

            realizaConta(){
                let conta = this.display.value;
                try{
                    conta = eval(conta);

                    if(!conta){
                        alert(`Formula Errada!`);
                        return;
                    }
                    this.display.value = String(conta);
                }catch(e){
                    alert(`Formula Errada!`);
                    return;
                }
            },

            clickBotto(){
                //document.addEventListener(`click`,function); É usado para
                //capiturar algo do DOM.
                document.addEventListener(`click`,event =>{
                    const el = event.target;//target é oq vc ta clicando
                    console.log(this);

                    if(el.classList.contains(`btn-num`)){
                        this.btnParaDisplay(el.innerText);
                    }

                    if(el.classList.contains(`btn-clear`)){
                        this.clearDisplay();
                    }

                    if(el.classList.contains(`btn-del`)){
                        this.deletOne();
                    }

                    if(el.classList.contains(`btn-eq`)){
                        this.realizaConta();
                    }
                });
            },

            btnParaDisplay(valor){
                this.display.value += valor;
                this.display.focus();
            },
        };
    }

    const calculadora = criaCal();
    calculadora.starta();
})();

