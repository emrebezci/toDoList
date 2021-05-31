function yeniEleman(){
    var text = document.getElementById("inputumuz").value;
    var li = "<li>" + text + "</li>";
    document.getElementById("list").innerHTML += li;
    document.getElementById("inputumuz").value = ""; // clear the value
    document.getElementById("list").style.listStyleType = "none";
}


function tiklanma() {
    document.getElementById("aid").style.textDecorationLine = "line-through";
}