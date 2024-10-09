// Object-Oriented Programming in JavaScript

// Base Game class
class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 400;
        this.canvas.height = 300;
        this.players = [];
        this.enemies = [];
    }

    addPlayer(player) {
        this.players.push(player);
    }

    addEnemy(enemy) {
        this.enemies.push(enemy);
    }

    update() {
        // Clear the canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw players
        this.players.forEach(player => {
            player.update();
            player.draw(this.context);
        });

        // Update and draw enemies
        this.enemies.forEach(enemy => {
            enemy.update();
            enemy.draw(this.context);
        });
    }

    start() {
        setInterval(() => this.update(), 1000 / 60);  // 60 FPS
    }
}

// Player class (inherits from Entity)
class Player {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.speed = 3;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    update() {
        // For now, we don't have automatic movement
    }

    draw(context) {
        context.fillStyle = 'blue';
        context.fillRect(this.x, this.y, 30, 30);  // Draw a simple rectangle as the player
    }
}

// Enemy class (inherits from Entity)
class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 2;
    }

    update() {
        this.x += this.speed;  // Simple horizontal movement
        if (this.x > 400) {
            this.x = 0;  // Loop the enemy to the start
        }
    }

    draw(context) {
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, 30, 30);  // Draw a simple rectangle as the enemy
    }
}

// Initialize the game
const game = new Game('gameCanvas');

// Create players and enemies
const player1 = new Player('Hero', 50, 100);
const enemy1 = new Enemy(0, 200);

// Add players and enemies to the game
game.addPlayer(player1);
game.addEnemy(enemy1);

// Start the game
game.start();

// Optional: Control the player with keyboard input
window.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowUp':
            player1.moveUp();
            break;
        case 'ArrowDown':
            player1.moveDown();
            break;
        case 'ArrowLeft':
            player1.moveLeft();
            break;
        case 'ArrowRight':
            player1.moveRight();
            break;
    }
});
