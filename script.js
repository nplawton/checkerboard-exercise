
for ( let i = 1; i <= 81; i++){
    if (i % 2 === 0){
        let square1 = document.createElement("div");
        square1.style.backgroundColor = 'Black';
        square1.style.cssFloat = "Left";
        square1.style.width = '11.1%';
        square1.style.paddingBottom = '11.1%';
        document.body.appendChild(square1);
       console.log(square1);
    }else {
        let square2 = document.createElement("div");
        square2.style.backgroundColor = 'Red';
        square2.style.cssFloat = "Left";
        square2.style.width = '11.1%';
        square2.style.paddingBottom = '11.1%';
        document.body.appendChild(square2);
        console.log(square2);
    }
}

