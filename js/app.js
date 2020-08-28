var counter = Cookies.get("counterValue");

if(counter==undefined) {
    counter=0;

}



function addOne() {
   
    Cookies.set("counterValue","yellowflower");
    window.open("selection.html");
    
  
}
function addTwo() {
   
    Cookies.set("counterValue","redflower");
    window.open("selection.html");
    
  
}
function addThree() {
    Cookies.set("counterValue","blueflower");
    window.open("selection.html");

    
  
}