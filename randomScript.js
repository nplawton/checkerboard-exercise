
function randomColor(){
    //0x before a hexidecimal number / 0xff (will result in 255) where as 0XFFFFFF (will result in 1677215) // max value in color.
    let hexColor = 0xFFFFFF;
    //returns a float number based on the previous variable color length
    let randomNum = Math.random() * hexColor;
    //converts the float into a interger
    randomFloat = Math.floor(randomNum);
    //turns the interger into a string to be used
    let randColor = randomFloat.toString(16);
    //ensures that if the number is less than 6 that generates enough 0s to have the full color length
    let finColor = randColor.padStart(6, 0);
    //test to ensure color is generated.
    console.log(finColor);
    //the color doesn't reconize lower case letters in the hexidecimal range.
    return `#${finColor.toUpperCase()}`
}

for ( let i = 1; i <= 81; i++){
    if (i % 2 === 0){
        let square1 = document.createElement("div");
        square1.style.backgroundColor = randomColor();
        square1.style.cssFloat = "Left";
        square1.style.width = '11.1%';
        square1.style.paddingBottom = '11.1%';
        document.body.appendChild(square1);
       //console.log(square1);
    }else {
        let square2 = document.createElement("div");
        square2.style.backgroundColor = randomColor();
        square2.style.cssFloat = "Left";
        square2.style.width = '11.1%';
        square2.style.paddingBottom = '11.1%';
        document.body.appendChild(square2);
        //console.log(square2);
    }
}