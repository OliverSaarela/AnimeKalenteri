var thisDay = new Date();
var paiva = thisDay.getDate();
var kuukausi = thisDay.getMonth();

function kuvanVaihto(luukku) {
    if (luukku <= paiva && kuukausi == 11) {
        document.getElementById("day" + luukku + "img").src = "images/img" + luukku + ".png";
    }
}
