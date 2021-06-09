function yeniEleman(){
    var text = document.getElementById("inputumuz").value;
    var li = "<li>" + text + " </li>";
    // var addspan =""+" <span id='silme' onclick='this.parentNode.style.display = 'none'; ' class='closebtn'>&times;</span>";
    // document.getElementById("list").innerHTML += addspan; // span eklendi fakat style ekliyemedim
    document.getElementById("list").innerHTML += li;
    document.getElementById("inputumuz").value = ""; // clear the value
    document.getElementById("list").style.listStyleType = "none";
}

// on click delete listed item
let sil = document.getElementById("list");
sil.addEventListener("click", function (sil){
    sil.target.innerHTML = "";
});




let test = document.getElementById("list");

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    event.target.style.color = "white";


    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.color = "";
    }, 500);
}, false);










