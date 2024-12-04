document.getElementById("felni").addEventListener("mouseover", f1);
document.getElementById("felfuggesztes").addEventListener("mouseover", f2);
document.getElementById("fekek").addEventListener("mouseover", f3);
document.getElementById("szarny").addEventListener("mouseover", f4);
document.getElementById("motor").addEventListener("mouseover", f5);
document.getElementById("kipuf").addEventListener("mouseover", f6);
document.getElementById("felfuggesztes2").addEventListener("mouseover", f2);
document.getElementById("subilogo").addEventListener("click", f7);

let szamlalo = 0

const lista = ["felni", "felfuggesztes", "fekek", "szarny", "motor", "kipuf", "felfuggesztes2"]

function eltuntetes(){
    /*for (let l= 0 ;l < lista.length; l++){
        document.getElementById(`${lista[l]}`).hidden = true
    }*/
    for (let r = 1; r < 7; r++){
        document.getElementById(`valasz${r}`).hidden = true
    }
}

function groupload(){
    eltuntetes();
    hidemenu();
    gratula()
}

function f1(){
    document.getElementById("valasz1").hidden = false;
    szamlalo += 1
}
function f2(){
    document.getElementById("valasz2").hidden = false;
    szamlalo += 1
}
function f3(){
    document.getElementById("valasz3").hidden = false;
    szamlalo += 1
}
function f4(){
    document.getElementById("valasz4").hidden = false;
    szamlalo += 1
}
function f5(){
    document.getElementById("valasz5").hidden = false;
    szamlalo += 1
}
function f6(){
    document.getElementById("valasz6").hidden = false;
    szamlalo += 1
}

function hidemenu() {
    if (window.innerWidth <= 600) {
        document.getElementById("chadmenu").hidden = true;
        document.getElementById("lilmenu").hidden = true;
    } else {
        document.getElementById("chadmenu").hidden = false;
    }
}

function f7() {
    if (window.innerWidth <= 600) {
        document.getElementById("lilmenu").hidden = false;
    }
}

function gratula(){
    if(szamlalo == 6){
        alert("Gratulálok megtaláltál mindent!")
    }
}