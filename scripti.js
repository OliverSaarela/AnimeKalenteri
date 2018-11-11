var thisDay = new Date();
var paiva = thisDay.getDate();
var kuukausi = thisDay.getMonth();

function kuvanVaihto(luukku) {
    if (luukku <= paiva && kuukausi == 10) {
            document.getElementById("day" + luukku + "img").src = "images/test" + luukku + ".jpg";
        }
    }
}
