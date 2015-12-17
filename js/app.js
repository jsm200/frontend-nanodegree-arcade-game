
// Enemies our player must avoid
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
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (Math.random() * 400 * dt);
   

    //this.x = this.x + this.speed*dt;
    if (this.x > 500) {

        this.x = -100 + this.speed*dt;

    };


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//Player Class
var Player = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our player, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    


    
    this.sprite = 'images/char-boy.png';
};

// Update the player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
        this.x; 
        this.y ;
        checkCollisions();


};

// Reset Player position
Player.prototype.reset = function() {
        this.x = 200;
        this.y = 400;


};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player Movement
Player.prototype.handleInput = function(arrowDir) {
    if (arrowDir === 'up') { // up key held
        this.y -= 100;
        console.log(this.y);
        if (this.y < 0) {
            //this.sprite = 'images/enemy-bug.png';
            
            this.reset();
        };
    };
    if (arrowDir === 'down') { // down key held
        this.y += 100;

       if (this.y >= 430) {
           this.y = 430;
        };
    };
    if (arrowDir === 'left') { // left key held
        this.x -= 100;

        if (this.x <= -25) {
            this.x = -25;
        };
        
    };
    if (arrowDir === 'right') { // right key held
        this.x += 100;
        
        if (this.x >= 425) {
            this.x = 425;
        };
        console.log(this.x);
    };
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemy1 = new Enemy(0,145,randomInt(0,8));
var enemy2 = new Enemy(0,65,randomInt(250,450));
var enemy3 = new Enemy(0,145,randomInt(250,450));
var enemy4 = new Enemy(0,230,randomInt(250,450));

/*var enemy1 = new Enemy(0,65,300);
var enemy2 = new Enemy(0,65,200);
var enemy3= new Enemy(0,145,Math.random()*300);
var enemy4 = new Enemy(0,230,Math.random()*300);*/

var allEnemies = [enemy1,enemy2,enemy3,enemy4];

var player = new Player(200,400);

function checkCollisions(){
    
    for (var i = 0; i < allEnemies.length; i++) {
        
        
        if ((allEnemies[i].x) <= player.x + 60 &&
            
            (allEnemies[i].x + 60) >= (player.x) &&
            (allEnemies[i].y)<= player.y + 70 &&
            (allEnemies[i].y + 70) >= (player.y)) {
          console.log('ok to here');
          player.x = 200;
            player.y = 400;
        };
    };
};


function randomInt(min,max){
    return (Math.random()*(max-min +1)) + min;

};




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

