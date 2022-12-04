//déclaration variables
let dice = document.getElementById("dice");
let valeurTour = 0;
let bouton1 = document.getElementById('bouton1');
let bouton2 = document.getElementById('bouton2');
bouton2.disabled = true;
let stockagePlayer1 = document.getElementById('stockPlayer1');
let stockagePlayer2 = document.getElementById('stockPlayer2');
let player = 1;



//nouvelle partie
let newGame = document.getElementById('newGame');
newGame.addEventListener('click', function () {
  document.getElementById('stockPlayer1').innerHTML = "";
  document.getElementById('stockPlayer2').innerHTML = "";
  document.getElementById('scoreTamponPlayer').innerHTML = "";
  document.getElementById('player1').innerHTML = "PLAYER 1";
  document.getElementById('player2').innerHTML = "PLAYER 2";
  document.getElementById("verreBiere1").src = 'biereVide.png';
  document.getElementById("verreBiere2").src = 'biereVide.png';
  bouton2.disabled = true;
  bouton1.disabled = false;
  stockagePlayer1 = 0;
  stockagePlayer2 = 0;
  player = 1;
});

//nom du joueur
let playerName = document.getElementById('playerName');
playerName.addEventListener('click', function () {
  let player1 = prompt('quel est le nom du joueur 1 ?');
  let player2 = prompt('quel est le nom du joueur 2 ?');

  document.getElementById('player1').innerHTML = (player1 !== '' && player1 != null) ? player1 : 'Anonymous 1';
  document.getElementById('player2').innerHTML = (player2 !== '' && player2 != null) ? player2 : 'Anonymous 2';

});

//règle du jeu
let gameRules = document.getElementById('gameRules');
gameRules.addEventListener('click', function () {
  document.getElementById('html').classList.add("fondGris");
  document.getElementById('cardRules').style.display = "block";
  document.getElementById('bouton1').style.display = "none";
  document.getElementById('bouton2').style.display = "none";


  //clique en dehors de la règle pour disparaitre
  document.addEventListener("mouseup", function (event) {
    let obj = document.getElementById("gameRules");
    (!obj.contains(event.target))
    document.getElementById('cardRules').style.display = "none"; document.getElementById('html').classList.remove("fondGris");
    document.getElementById('bouton1').style.display = "inline-block";
    document.getElementById('bouton2').style.display = "inline-block";
  });
})

//lancé du dé
dice.addEventListener('click', function () {
  dice.classList.add("rotate");
  setTimeout(function () {
    let result = Number(Math.floor((Math.random() * 6) + 1));

    dice.classList.remove('rotate');

    document.getElementById("dice").src = result + '.png';

    if (result === 1) {
      if (player === 1) {
        bouton1.disabled = true;
        bouton2.disabled = false;
        player = 2;
      } else if (player === 2) {
        bouton2.disabled = true;
        bouton1.disabled = false;
        player = 1;
      }
      document.getElementById('scoreTamponPlayer').innerHTML = '';
    } else if (result === 2) {
    } else if (result === 3) {
    } else if (result === 4) {
    } else if (result === 5) {
    } else if (result === 6) {
    } else {
      alert("vous n\'avez pas bien lancé");
    }

    //somme des résultats de dés
    if (result !== 1) {
      valeurTour = valeurTour + result;
    } else {
      valeurTour = 0;

    }



    document.getElementById('scoreTamponPlayer').innerHTML = parseInt(valeurTour);

  }, 1000);
  document.getElementById("dice").src = "deSvg.svg";

});



// stockage point player1
bouton1.addEventListener('click', function () {
  document.getElementById('verreBiere2').classList.add('biereRotate');    
  setTimeout (function(){
    document.getElementById('verreBiere2').classList.remove('biereRotate');    
  },1000)

  stockagePlayer1 = parseInt(valeurTour + stockagePlayer1);
  document.getElementById('stockPlayer1').innerHTML = "points : " + stockagePlayer1;
  valeurTour = 0;

  if (bouton1.click) {
    bouton1.disabled = true;
    bouton2.disabled = false;
  } else {
    bouton1.disabled = false;
    bouton2.disabled = true;
  }
  player = 2;

  document.getElementById('scoreTamponPlayer').innerHTML = '';
  document.getElementById("dice").src = 'deSvg.svg';


  if (stockagePlayer1 >= 100) {
    let player1 = document.getElementById('player1').innerHTML;
    document.getElementById("verreBiere1").src = 'bierePleine.png';

    alert(player1 + " a gagné !");

  }



});



// stockage point player2
bouton2.addEventListener('click', function () {
  
  document.getElementById('verreBiere1').classList.add('biereRotate');    
  setTimeout (function (){
    document.getElementById('verreBiere1').classList.remove('biereRotate');    
  }, 1000)

  stockagePlayer2 = parseInt(valeurTour + stockagePlayer2);
  document.getElementById('stockPlayer2').innerHTML = "points : " + stockagePlayer2;
  valeurTour = 0;
  player = 1;

  if (bouton2.click) {
    bouton2.disabled = true;
    bouton1.disabled = false;
  } else {
    bouton2.disabled = false;
    bouton1.disabled = true;
  }

  document.getElementById('scoreTamponPlayer').innerHTML = '';
  document.getElementById("dice").src = 'deSvg.svg';

  if (stockagePlayer2 >= 100) {
    let player2 = document.getElementById('player2').innerHTML;
    document.getElementById("verreBiere2").src = 'bierePleine.png';
    alert(player2 + " a gagné !");


  }


});

