function yeniEleman(){
    var text = document.getElementById("inputumuz").value;
    var li = "<li>" + text + " </li>";
    var addspan =""+ " <span id='silme' onclick='this.parentNode.style.display = 'none'; ' class='closebtn'>&times;</span>";
    document.getElementById("list").innerHTML += addspan; // span eklendi fakat style ekliyemedim
    document.getElementById("list").innerHTML += li;
    document.getElementById("inputumuz").value = ""; // clear the value
    document.getElementById("list").style.listStyleType = "none";
    // document.getElementById("list").style.width ="1px"; eklenen her elemana style atmak (çalışmıyor)
}


function tiklanma() {
    document.getElementById("aid").style.textDecorationLine = "line-through";
}




