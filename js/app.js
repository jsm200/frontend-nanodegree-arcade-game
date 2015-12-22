


// Enemies our player must avoid input x and y position coordinates and speed
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
    this.x = x;
    this.y = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    /* You should multiply any movement by the dt parameter
     which will ensure the game runs at the same speed for
     all computers. */
    this.x = this.x + (Math.random() * 400 * dt);
    //this.x = this.x + this.speed*dt;
    if (this.x > 500) {
        this.x = -100 + this.speed*dt;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//Player Class input x and y position coordinates
var Player = function(x,y) {
    /* Variables applied to each of our instances go here,
       we've provided one for you to get started
       The image/sprite for our player, this uses
       a helper we've provided to easily load images */
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    /* You should multiply any movement by the dt parameter
     which will ensure the game runs at the same speed for
     all computers. */
    
   // checkCollisions();
};

 //Send player to "home" position
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
};

 //player x-axis screen limit
Player.prototype.xPlayerLimit = function() {
    if (this.x <= -25) {
        this.x = -25;
        }
    if (this.x >= 425) {
        this.x = 425;
        }
};

//player y-axis screen limit
Player.prototype.yPlayerLimit = function() {
    if (this.y <= 0) {
        this.reset();
        }
    if (this.y >= 430) {
        this.y = 430;
    }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//Player Movement
Player.prototype.handleInput = function(arrowDir) {
    
    switch (arrowDir) {
    case 'up':
        this.y -= 50;
        this.yPlayerLimit();
        break;
    case 'down':
        this.y += 100;
        this.yPlayerLimit();
        break;
    case 'left':
        this.x -= 100;
        this.xPlayerLimit();
        break;
    case 'right':
        this.x += 100;
        this.xPlayerLimit(); 
        break;
    default: 
        document.write("You need to press an 'Arrow' key")
    }

//Previous reviewer of code suggested using Switch Statement
    /*if (arrowDir === 'up') { // up key held
        this.y -= 50;
        this.yPlayerLimit();
    }
    if (arrowDir === 'down') { // down key held
        this.y += 100;
        this.yPlayerLimit();
    }
    if (arrowDir === 'left') { // left key held
        this.x -= 100;
        this.xPlayerLimit();
    }
    if (arrowDir === 'right') { // right key held
        this.x += 100;
        this.xPlayerLimit();
    } */
};










//Player Movement
Player.prototype.handleInput = function(arrowDir) {
    if (arrowDir === 'up') { // up key held
        this.y -= 50;
        this.yPlayerLimit();
    }
    if (arrowDir === 'down') { // down key held
        this.y += 100;
        this.yPlayerLimit();
    }
    if (arrowDir === 'left') { // left key held
        this.x -= 100;
        this.xPlayerLimit();
    }
    if (arrowDir === 'right') { // right key held
        this.x += 100;
        this.xPlayerLimit();
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player 65 145 230

var enemy1 = new Enemy(40,65,randomInt(0,450));
var enemy2 = new Enemy(475,145,randomInt(0,450));
var enemy3 = new Enemy(350,145,randomInt(0,450));
var enemy4 = new Enemy(220,230,randomInt(0,450));

var allEnemies = [enemy1,enemy2,enemy3,enemy4];

var player = new Player(200,400);

//detect when player comes in contact with enemy
function checkCollisions(){
    for (var i = 0; i < allEnemies.length; i++) {
        if ((allEnemies[i].x) <= player.x + 40 &&
            (allEnemies[i].x + 80) >= (player.x) &&
            (allEnemies[i].y)<= player.y + 60 &&
            (allEnemies[i].y + 70) >= (player.y)) {
          console.log('ok to here');
          //send player to "home" position
            player.reset();
        }
    }
}

//generate initial random speed for each enemy
function randomInt(min,max){
    return (Math.random()*(max-min +1)) + min;
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
     player.handleInput(allowedKeys[e.keyCode]);
});
