function readMore (){
   
    document.getElementById ("readmore").style.display="block";
    document.getElementById ("Readmore").style.display="none";
}

function readLess (){
    
    document.getElementById ("readmore").style.display="none";
    document.getElementById ("Readmore").style.display="block";
}

function initial (){
    document.getElementById ("readmore").style.display="none"; 
}

let suits = ["Clubs", "Diamonds","Hearts","Spades"]
let ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

function getDeck() {
    let deck = new Array();
    for(let i = 0; i < suits.length; i++){
        for(let x = 0; x < ranks.length; x++){
            let card = {rank: ranks[x], suit: suits[i]}
            deck.push (card)
        }
    }
    // console.log(deck)
    return deck;
}

shuffle();
function shuffle() {
    let deck = getDeck();
    let random = Math.floor(Math.random()*52);
    console.log(random)
    return deck[random];
}




