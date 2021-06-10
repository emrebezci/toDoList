function yeniEleman(){
    var text = document.getElementById("inputumuz").value;
    var li = "<li>" + text +"</li>";
    var addspan = "" + "<span class='close'>X</span>";
    document.getElementById("list").innerHTML += addspan;
    document.getElementById("list").innerHTML += li;
    document.getElementById("inputumuz").value = ""; // clear the value
    document.getElementById("list").style.listStyleType = "none";

}




// on click create a line on words
var ciz = document.getElementById("list");
    ciz.addEventListener("click", function (ciz){
    ciz.target.style.textDecoration = "line-through";
});
//  on doubleclick remove line on words
var cizme = document.getElementById("list");
    cizme.addEventListener("dblclick", function (cizme){
        cizme.target.style.textDecoration = "none";
    })








let test = document.getElementById("list");

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    event.target.style.color = "orange";
    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);

// delete border after short delay
let border = document.getElementById("list");
test.addEventListener("mouseover", function (addborder){
    addborder.target.style.border = "0.1px solid";
    setTimeout(function () {
        addborder.target.style.border = "none";
    }, 500);
});


//  close button
// yeni eklenen elemanlarda kapat butonu çalışmıyor BUG
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}


function myFunction() {
    var element = document.getElementById("list");
    element.target.classList.toggle("mystyle");
}











