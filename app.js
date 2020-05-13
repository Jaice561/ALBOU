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
};

let suits = ["clubs", "diamonds","hearts","spades"]
let ranks = ["A","r02","r03","r04","r05","r06","r07","r08","r09","r10","J","Q","K"]
    let deck = getDeck();
    let path = './images/';

function getDeck() {
    let deck = new Array();
    for(let i = 0; i < suits.length; i++){
        for(let x = 0; x < ranks.length; x++){
            let card = {rank: ranks[x], suit: suits[i]}
            deck.push (card);
        }
    }
    // console.log(deck)
    return deck;
}

function shuffle() {
    let random = Math.floor(Math.random()*52);
    return deck[random];
}

function loadcards() {
 let playerdiv = document.getElementsByClassName('cardchoicetwo')[0];
 let computerdiv = document.getElementsByClassName('cardchoiceone')[0];
if(playerdiv.style.backgroundImage ==='' && computerdiv.style.backgroundImage ==='') {

    let playercard=shuffle();
    let computercard=shuffle();
    let playercardImage =path+ playercard.suit + '/' + playercard.suit + '-' + playercard.rank + '.svg'
    playerdiv.style.backgroundImage = "url(" + playercardImage + ")";
    playerdiv.style.backgroundSize = "contain";

    let computercardImage =path+ computercard.suit + '/' + computercard.suit + '-' + computercard.rank + '.svg'
    computerdiv.style.backgroundImage = "url(" + computercardImage + ")";
    computerdiv.style.backgroundSize = "contain";
}

else {
    let matchcard=shuffle();
    let matchcarddiv = document.getElementsByClassName('card')[0];
    let matchcardImage=path+ matchcard.suit + '/' + matchcard.suit + '-' + matchcard.rank + '.svg'
    matchcarddiv.style.backgroundImage = "url(" + matchcardImage + ")";
    matchcarddiv.style.backgroundSize = "contain";

    if(matchcarddiv.style.backgroundImage === playerdiv.style.backgroundImage) {
        let playerscore=parseInt(document.getElementById('playerscore').innerHTML)
        if(playerscore == 0)
            playerscore = 1;
        else
            playerscore +=1;
      document.getElementById('playerscore').innerHTML=playerscore;
      alert("Congrats!! You Won, Please play again!!")
    }
    else if(matchcarddiv.style.backgroundImage === computerdiv.style.backgroundImage){
        let computerscore=parseInt(document.getElementById('computerscore').innerHTML)
        if(computerscore == 0)
            computerscore = 1;
        else
            computerscore +=1;
      document.getElementById('computerscore').innerHTML=computerscore;
      alert("oops!! Computer Won, Please play again!!")

    }
}
}

function playAgain() {
    let playerdiv = document.getElementsByClassName('cardchoicetwo')[0];
    let computerdiv = document.getElementsByClassName('cardchoiceone')[0];
    let matchcarddiv = document.getElementsByClassName('card')[0];
        playerdiv.style.backgroundImage = "";
        computerdiv.style.backgroundImage = "";
        matchcarddiv.style.backgroundImage = "url("+path+"/backs/blue.svg)";
}





