function yeniEleman(){
    var text = document.getElementById("inputumuz").value;
    var li = "<li>" + text + " </li>";
    // var addspan =""+" <span id='silme' onclick='this.parentNode.style.display = 'none'; ' class='closebtn'>&times;</span>";
    // document.getElementById("list").innerHTML += addspan; // span eklendi fakat style ekliyemedim
    document.getElementById("list").innerHTML += li;
    document.getElementById("inputumuz").value = ""; // clear the value
    document.getElementById("list").style.listStyleType = "none";

}



// on click create a line on words
let ciz = document.getElementById("list");
ciz.addEventListener("click", function (ciz){
    ciz.target.style.textDecoration = "line-through";
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

// delete border after short delay
let border = document.getElementById("list");
test.addEventListener("mouseover", function (addborder){
    addborder.target.style.border = "0.5px solid";
    setTimeout(function () {
        addborder.target.style.border = "none";
    }, 500);
    
});











