let surf = document.getElementById('surf');
let solBas = document.getElementById('solBas');
let perso = document.getElementById('perso');
let decalageX = 0 ;
let decalageY=0;

window.onload = () => {
    document.addEventListener("keydown", marcher);
}

function marcher(event){
    switch (event.key){
        case "ArrowLeft":
            parallaxeX();
            perso.classList.add('persoGauche');
            perso.classList.remove('persoDroite');
            surf.classList.add('surfGauche');
            surf.classList.remove('surfDroite');
            decalageX ++;
            parallaxeX();
            break;
        case "ArrowRight":
            parallaxeX();
            perso.classList.add('persoDroite');
            perso.classList.remove('persoGauche');
            surf.classList.add('surfDroite');
            surf.classList.remove('surfGauche');
            decalageX --;
            parallaxeX();
            break;

        case "ArrowUp":
            parallaxeY();
            perso.classList.add('persoUp');
            perso.classList.remove('persoDown');
            surf.classList.add('surfUp');
            surf.classList.remove('surfDown');
            decalageY ++;
            parallaxeY();
            break;

        case "ArrowDown":
            parallaxeY();
            perso.classList.add('persoDown');
            perso.classList.remove('persoUp');
            surf.classList.add('surfDown');
            surf.classList.remove('surfUp');
            decalageY --;
            parallaxeY();
            break;
    }
}
function parallaxeX() {
    solBas.style.backgroundPositionX = (decalageX * 10) + "px";};
function parallaxeY() {
    solBas.style.backgroundPositionY = (decalageY * 10) + "px";};