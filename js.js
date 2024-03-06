function addItem(){
    var newItem = document.createElement("h2");
    newItem.innerHTML = document.getElementById("box").value;
    newItem.onclick =  deleteItem;
    document.getElementById("list").appendChild(newItem);
    
    document.getElementById("box").value = ""

    Save();
}
function deleteItem(){
    document.getElementById("list").removeChild(this);
    Save();
}

function addImage(){
    var newImg = document.createElement("img");
    newImg.src = "Cat_November_2010-1a.jpg";
    newImg.onclick = deleteImage
    document.getElementById("list").appendChild(newImg);
}

function deleteImage(){
    document.getElementById("list").removeChild(this);
}

function clearItem(){
    document.getElementById("box").value = "";
}

function Save(){
    localStorage.savedlist = document.getElementById("list").innerHTML;
}

function Load(){
    document.getElementById("list").innerHTML = localStorage.savedlist;
    
    //Перебираемый список
    for (var i=0; i< list.children.length; i++){
    list.children[i].onclick = deleteItem;    
    }

}


if(localStorage.savedlist){
    Load();
}



function Bigger(){
    var Big = document.getElementById("h1");

    Big.style.fontSize = "60px";    
}

function ChangeGradient(){
    var Change = document.getElementById("torso");

    Change.style.backgroundImage = "linear-gradient(145deg, orange, lightblue, pink, red)";

}

function BackGradient(){
    var Back = document.getElementById("torso");

    Back.style.backgroundImage = "linear-gradient(145deg, #ee82ee, slateblue, #ffd86a, purple)";
}