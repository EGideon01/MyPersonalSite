console.log("Wassup G")
document.getElementById("mic").style.visibility = "hidden"

//var list
let bigolNum = 5
let smolNum = 1
let averageNum = 3
//valid vars, in case they're needed
    //let _example = #
    //let $example = #
        //note: this still makes them a different var than just "example"

//const list
const gMan = 25
const aMan = "Woah, das a big number"
const number1 = 10e4

//symbols list (new to js)
const ayo = Symbol("ayooo")
let sampleObjectKey = Symbol("disaSampleDawg")
let regularSampleDawg = {
    name: "Dawg",

    //adding symbol as a key
    [sampleObjectKey]: "One, two, three and to the fo'" //brackets for object keys
}

//For Loops
for (let i = 0; i < 5; i++) {
    text = "Dis da number:"  + i + "<br>"
  }

//Button Inclusion
    function showMic() {
        var img = document.getElementById('mic');
        img.style.visibility = 'invisible';
}


console.log(((bigolNum*smolNum*averageNum/gMan)*number1) + " " + "⬅" + " " + aMan);
console.log(ayo.description)
console.log(regularSampleDawg)