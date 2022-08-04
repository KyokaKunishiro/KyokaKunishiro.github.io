'use strict'

// window.onload = function(){
//     var img = document.getElementById("myPuzzle1");
//     snapfit.add(img, { mixed : true, level:0, aimage : true, simple:true});
//     }

function ziguzo(){
    let img = document.getElementById("myPuzzle");
    snapfit.add(img, { mixed : true, level:0, aimage : true, simple:true});
}

let Flag = false;

function returnTrue(){
    return true;
};


function hyoji(obj){

    let index = obj.selectedIndex;
    let value = obj.options[index].value;
    console.log(Flag)

    if(Flag === false){
      const insertNode = document.getElementsByTagName("div")[1]
      const newIMG = document.createElement("img");
      newIMG.src = value + ".jpg";
      newIMG.id = "myPuzzle";
      newIMG.className = "select";
      insertNode.appendChild(newIMG);
      Flag = returnTrue();
    }else{
        let aaa = document.getElementById("myPuzzle")
        aaa.src = value + ".jpg";
        //console.log(aaa)
    }
};