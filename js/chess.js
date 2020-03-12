"use strict"

/*let HTML = "";

let rowcounter = 4;
let columncounter = 4;
let lenta = document.querySelector(".board")
let firstcolor = "#fff";
let secondcolor = "#000";
let color = "";



for (let y = 1; y<=rowcounter; y++){
    HTML += `<div class="row"
    style = "height: calc(100% / ${rowcounter});">`

    for(let x=1; x<=columncounter; x++){
        if((x+y) % 2 === 0){
            color = firstcolor;
        }

        else {color = secondcolor}

            HTML += `<div class="cell"
            style = "width: calc(100% / ${columncounter}); background-color: ${color};">w
            </div>`
    }
    
    HTML += `</div>`
}

lenta.innerHTML = HTML


console.log('kjhtfd');*/


let HTML = "";

let rowcounter = 10;
let columncounter = 10;
let board = document.querySelector(".board")
let innerboard = board.querySelector(".innerboard")
let Row = board.querySelector(".Row")
let Column = board.querySelector(".Column")
let RowBottom = board.querySelector(".RowBottom")
let ColumnRight = board.querySelector(".ColumnRight")
let firstcolor = "#fff";
let secondcolor = "#000";
let color = "";
let topHTML = "";
let bottomHTML = "";
let leftHTML = "";
let rightHTML = "";
let abc = "abcdefghijklmnopqrstuvwxyz";

for (let x = 0; x<columncounter; x++){
    topHTML += `<div class="topcell"
    style = "width: calc(100% / ${columncounter})">${x+1}
    </div>`
    console.log(topHTML)
}

for (let x = 0; x<columncounter; x++){
    bottomHTML += `<div class="bottomcell"
    style = "width: calc(100% / ${columncounter})">${x+1}
    </div>`
    
}

for(let y = 0; y<rowcounter; y++){
    let raides = abc[y]
    if (rowcounter > abc.length){
        for(let i = 0; i<Math.floor(y/abc.length); i++){
            raides = abc[i]+abc[y-abc.length]
        }
    }
    leftHTML += `<div class="leftcell"
    style = "height: calc(100% / ${rowcounter})">${raides}
    </div>`
}


for(let y = 0; y<rowcounter; y++){

    let raides = abc[y]
    if (rowcounter > abc.length){
        for(let i = 0; i<Math.floor(y/abc.length); i++){
            raides = abc[i]+abc[y-abc.length]
        }
    }
    rightHTML += `<div class="rightcell"
    style = "height: calc(100% / ${rowcounter})">${raides}
    </div>`
}

for (let y = 1; y<=rowcounter; y++){
    
    HTML += `<div class="row"
    style = "height: calc(100% / ${rowcounter})">`

    for(let x=1; x<=columncounter; x++){
        if((x+y) % 2 === 0){
            color = firstcolor;
        }

        else {color = secondcolor}

            HTML += `<div class="cell"
            style = "width: calc(100% / ${columncounter}); background-color: ${color};">
            </div>`
    }
    
    HTML += `</div>`
}

innerboard.innerHTML = HTML;

Row.innerHTML = topHTML;
Column.innerHTML = leftHTML;
RowBottom.innerHTML = bottomHTML;
ColumnRight.innerHTML = rightHTML;


console.log('kjhtfd');



