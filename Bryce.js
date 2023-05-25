const changeDirection = () => {
    const flexBox = document.getElementById("FlexboxArea");
    const style = window.getComputedStyle(flexBox)
    const currentDirection = style.getPropertyValue("flex-direction");
    
    if (currentDirection === "row")
        flexBox.style.flexDirection = "column"
    else if (currentDirection === "column")
        flexBox.style.flexDirection = "row"
}