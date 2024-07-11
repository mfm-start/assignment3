/**
Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak minimal 3 karakter lain (termasuk spasi). 
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Contoh: 
barbarian akan mengembalikan nilai true
you are boring akan mengembalikan nilai true
bacon sand meat akan mengembalikan nilai false

 */ 

function checkAB(text) {
   let output = "";
   let isB = false;
   let isA = false;

   
    for (let index = 0; index < text.length; index++) {
        if (text[index]=="a") {
            isA = true;
        } else if (text[index]=="b"){
            isB = true;
        }   
    }
    
    if (isA && isB) {
        output="true";
    } else {
        output="false";
    }

   return output;
}

function posAB(text,posA,posB){
    let outputA = [];
    let outputB = [];
    console.log(text);
    for (let index = 0; index < text.length; index++) {
        if (text[index]=="a") {
            outputA.push(index);
            // console.log("outputA = "+outputA);
        } else if (text[index]=="b") {
            outputB.push(index);
            // console.log("outputB = "+outputB);
        }
    }

    posA=outputA;
    posB=outputB;    
}

function threeStepsAB(text){
    let output = false;
    for (let index = 0; index < text.length; index++) {
        if (text[index]=="a") {
            if(text[index+4]=="b"){output=true;}
        } else if (text[index]=="b") {
            if(text[index+4]=="a"){output=true;}
        }
    }
    return output;
}



// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false
console.log(threeStepsAB("arsyad")); // false


