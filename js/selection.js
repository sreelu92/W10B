var counter1 = Cookies.get("counterValue");
//var choice=document.getElementById("h2tag");
//choice.innerHTML=counter1;
if (counter1 == "yellowflower") {
    var choice = document.getElementById("image");
    choice.setAttribute("src", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/yellow-flower-dahlia-1587061007.jpg?crop=0.557xw:1.00xh;0.0569xw,0&resize=480:*");
    var select = document.getElementById("h2tag");
    select.innerHTML = "You picked yellow flower";
    choice.classList.add("imageSize");

}
if (counter1 == "redflower") {
    var choice = document.getElementById("image");
    choice.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQl9oniML48tIr3NmhHuJxMFTGNmD8-w9OmAw&usqp=CAU");
    var select = document.getElementById("h2tag");
    select.innerHTML = "You picked red flower";
    choice.classList.add("imageSize");

}
if (counter1 == "blueflower") {
    var choice = document.getElementById("image");
    choice.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUDihhmBk1GBVtXgVoeMC_3Knxocl07AeX4A&usqp=CAU");
    var select = document.getElementById("h2tag");
    select.innerHTML = "You picked blue flower";
    choice.classList.add("imageSize");

}
if (counter1 == undefined) {
    var noSelection = document.getElementById("h1tag");
    noSelection.innerHTML = "Make your selection";
}

function removing(counter1) {

    Cookies.remove(counter1);
    window.open("index.html");

}


