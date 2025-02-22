function selector1(){
    document.getElementById("hangar").src = "imagenes/spaceship_1.png";
}
function selector2(){
    document.getElementById("hangar").src = "imagenes/spaceship_2.png";
}
function selector3(){
    document.getElementById("hangar").src = "imagenes/spaceship_3.png";
}
function selector4(){
    document.getElementById("hangar").src = "imagenes/spaceship_4.png";
}
function numrandom(){
        A = parseInt (Math.random()*150000 + 425000);
        console.log(A);
        document.querySelector(".Number").textContent = A;
}