var gameElement;
var gameCanvas
var playerName;
var UIElement;
var playerNameElement;
var playerScoreElement;
var playerCoinsElement;
var playerTilesElement;
var playerColor;
var ctx;
var score;
var tiles;
var coins;
var grd;

// this 'local' refers to the local unit of how many blocks are on the x and y axis. Changing these values will influence map size.
const mapXlocal=30;
const mapYlocal=30;

function start()
{  
	gameElement = document.getElementById("gamePanel");
	gameElement.innerHTML = "Username<br><input type='text' id='usernameInput'></input><br><br> <button href ='#' class='joinButton' type='button' onclick='joinGame()'>Join Game</button>";
}  
function joinGame()
{
	playerName = document.getElementById("usernameInput").value;
	gameElement.innerHTML = "<p>Game internally initialized! Everything looks good. The map should now generate and replace this.</p>";
	playerColor = "#"+Math.floor(Math.random()*16777215).toString(16);
	score = 0;
	coins = 10;
	tiles = 1;
	//gameElement.style.backgroundColor = playerColor;
	instantiateMap();
	
}
function instantiateMap()
{
	gameElement.innerHTML = "<div class='lineSort'><div class='overlay align' id='overlay'><p id='playerNameUI' class='bold'></p><p id='playerScoreUI'></p><p id='playerCoinsUI'></p><p id='playerTilesUI'></p></div><div position: absolute class='draggable align'id='draggable'><canvas id='gamespace' class='gamespace' width='1510' height='1510'></canvas></div></div>";
	playerNameElement = document.getElementById("playerNameUI");
	playerNameElement.innerHTML = playerName;
	playerScoreElement = document.getElementById("playerScoreUI");
	playerScoreElement.innerHTML = "Score: "+score;
	playerCoinsElement = document.getElementById("playerCoinsUI");
	playerCoinsElement.innerHTML = "Coins: "+coins;
	playerTilesElement = document.getElementById("playerTilesUI");
	playerTilesElement.innerHTML = "Tiles: "+tiles;
	UIElement = document.getElementById("overlay");
	UIElement.style.color = playerColor;
	gameCanvas = document.getElementById('gamespace');
	ctx = gameCanvas.getContext('2d');
	createRect();
}
function createRect()
{
	
	for(let gY = 0;mapYlocal>gY;gY++)
	{
		for(let gX = 0;mapXlocal>gX;gX++)
		{
			grd = ctx.createLinearGradient((50*gX)+10, (50*gY)+10, (50*gX)+60, (50*gY)+10);
			grd.addColorStop(0, "#feebbc");
			grd.addColorStop(.5, "#e9d2ba");
			grd.addColorStop(1, "#f9d9b6");
			ctx.fillStyle = '#828282';
			ctx.fillRect((50*gX)+10, 50*(gY)+10, 50, 50);
			ctx.fillStyle = grd;
			ctx.fillRect((50*gX)+11, 50*(gY)+11, 48, 48);
		}
	}
	var r=Math.round(Math.random()*200);
	var g=Math.round(Math.random()*200);
	var b=Math.round(Math.random()*200);
	var randomLocX = getRandomInt(mapXlocal-1);
	var randomLocY = getRandomInt(mapYlocal-1);
	ctx.fillStyle = '#000000';
	ctx.fillRect(10+(50*randomLocX), 10+(50*randomLocY), 50, 50);
	ctx.fillStyle = playerColor;
    ctx.fillRect(11+(50*randomLocX), 11+(50*randomLocY), 48, 48);
}
var max;
function getRandomInt(max) 
{
  return Math.floor(Math.random() * max);
}