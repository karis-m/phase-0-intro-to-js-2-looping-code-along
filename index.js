
function writeCards(names = ["Guadalupe", "Ollie", "Aki"], event = "surprise") {

    for (let i = 0; i < names.length; i++) {
        let myArray = new Array("Thank you, " + names[0] + ", for the wonderful " + event + " gift!",
            "Thank you, " + names[1] + ", for the wonderful " + event + " gift!",
            "Thank you, " + names[2] + ", for the wonderful " + event + " gift!");
        return myArray;
    }
}

function countDown(num =10){
    let i=0;
    while (i <= num){
    console.log(num--);
    }
}
