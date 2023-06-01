var funkyList = document.getElementById("FunkyArea")
funkyList[0] = document.getElementById("FunkyArea1")
funkyList[1] = document.getElementById("FunkyArea2")
funkyList[2] = document.getElementById("FunkyArea3")
funkyList[3] = document.getElementById("FunkyArea4")
funkyList[4] = document.getElementById("FunkyArea5")

    //I know using properties like "thing1, thing2, thing3, etc." is frowned upon
    //Was implementing this as a quick fix to the last pr (will reword it all later)

const funkyRotate = () => {
    const flexBox = funkyList;
    const style = window.getComputedStyle(flexBox)
    const currentDirection = style.getPropertyValue("flex-direction");

    if (currentDirection === "row")
    flexBox.style.flexDirection = "column"
else if (currentDirection === "column")
    flexBox.style.flexDirection = "row"
}

//The rest of the file will eventually be the full rotation of all the flexboxes
//Wanted to get my code consolidated first before destroying it some more lol

const currentPosition = () => {
    document.getElementById("spotOne")
}

const funkyRotateMain = () => {
    const flexBox = document.getElementById("Funky1");
    const currentPosition = style.getPropertyValue("flex-direction");
    
    if (currentPosition === "topLeft")
        boxDisplacement = "right"
    else if (currentPosition === "topMiddle")
        boxDisplacement === "right"
    else if (currentPosition === "topRight")
        boxDisplacement === "down"
    else if (currentPosition === "rightMiddle")
        boxDisplacement = "down"
    else if (currentPosition === "bottomRight")
        boxDisplacement = "left"
    else if (currentPosition === "bottomMiddle")
        boxDisplacement = "left"
    else if (currentPosition === "bottomLeft")
        boxDisplacement === "up"
    else if (currentPosition === "leftMiddle")
        boxDisplacement = "up"
}
