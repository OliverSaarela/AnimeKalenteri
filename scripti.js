var thisDay = new Date();
var paiva = thisDay.getDate();
var kuukausi = thisDay.getMonth();


function kuvanVaihto(luukku) {
    if (luukku <= paiva && kuukausi == 11) {
        document.getElementById("day" + luukku + "img").src = "images/img" + luukku + ".png" ;
		document.getElementById("day" + luukku + "img").setAttribute("onclick","avaa()");
        document.getElementById("valittu").src = "images/img" + luukku + ".png" ;
    }
    
}


function nollaa() { 
    document.getElementById("showcase").style.display = "none";
    document.getElementById("valittu").src = "" ;
}

function avaa() {
    document.getElementById("showcase").style.display = "block";
    document.getElementById("valittu").src = "images/img" + luukku + ".png" ;
}

