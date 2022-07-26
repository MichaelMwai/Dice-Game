var randomNumber1 = Math.floor(Math.random() * 6)

var randomNumber2 = Math.floor(Math.random() * 6)


var diceImages = ['images/dicey1.png', 'images/dicey2.png', 'images/dicey3.png', 'images/dicey4.png', 'images/dicey5.png', 'images/dicey6.png']

document.querySelectorAll("img")[0].setAttribute("src", diceImages[randomNumber1])
document.querySelectorAll("img")[1].setAttribute("src", diceImages[randomNumber2])



if (randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "Player 1 Wins"
else if (randomNumber1 < randomNumber2)
    document.querySelector("h1").innerHTML = "Player 2 Wins"
    else
    document.querySelector("h1").innerHTML = "Draw"
// document.querySelector("img").setAttribute("src",
// "images/dicey3.png")
