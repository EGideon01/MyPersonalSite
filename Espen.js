/*Attempting to utilize block coding. 

With block coding, we have the format:
    1 - Define/Declare
         In this step, we are simply stating the constant or initial value (for variables) that will affect or be affected by our action code.
    2 - Action
        As implied, this step will dictate what happens to our site compenents based upon user input.
    3 - Output
        This demonstrates the result of the reaction between both our code and user input. This is difficult to visualize without viewing the holistic makeup of the code. Viewing the HTML & CSS code can help better understand the impact JS has on the site.


*/

// 1 - Define/Declare
let bigNum = 5 //var list
let smallNum = 1
let averageNum = 3
const aMan = 25 //const list
const bMan = "Big Number"
const number1 = 10e4


// 2 - Action
    //For Loops
for (let i = 0; i < 5; i++) {
    text = "Dis da number:"  + i + "<br>"
  }

    //Button Inclusion
function showMic() {
    var img = document.getElementById('mic');
    img.style.visibility = 'visible';
}
function hideMic() {
    var img = document.getElementById('mic');
    img.style.visibility = 'hidden';
}


// 3 - Output
console.log("Hello There")
console.log(((bigNum*smallNum*averageNum/aMan)*number1) + " " + "⬅" + " " + bMan);



//valid vars, in case they're needed
    //let _example = #
    //let $example = #
        //note: this still makes them a different var than just "example"
