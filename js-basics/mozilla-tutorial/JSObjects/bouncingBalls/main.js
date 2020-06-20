// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}


// create the Shape object
function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}

// create a Ball object that inherits from Shape
function Ball(x, y, velX, velY, exists, color, size) {
    Shape.call(x, y, velX, velY, exists);
    this.color = color;
    this.size = size;
}

// functino to draw ball onto the screen
Ball.prototype.draw = function() {
    ctx.beginPath();    // state that we are drawing a shape
    ctx.fillStyle = this.color; // the color we want the shape to be
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); // x, y are the position of the arc's center; radius of the arc; start and end number of degrees
    ctx.fill();         // finish drwaing the path from beginPath()
}

// function to move the ball
Ball.prototype.update = function() {
    // check if the ball has readed the edge of the canvas,
    // if it has, reverse the polarity of the velocity

    // if going off the right edge
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }
    // if going off the left edge
    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }
    // if going off the bottom edge
    if ((this.y - this.size) >= height) {
        this.velY = -(this.velY);
    }
    // if going off the top edge
    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    // move the ball
    this.x += this.velX;
    this.y += this.velY;
}


// function to detect collision
Ball.prototype.collisionDetect = function() {
    // for each ball, check if it has collided with the current ball
    for (let j = 0; j < balls.length; j++) {
        // do not compare this ball with itself
        if (!(this === balls[j])) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')';
            }
        }
    }
}


// create balls 
let balls = [];

while (balls.length < 25) {
    let size = random(10, 20);
    let ball = new Ball(
        // ball poistion always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        true,
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')',
        size
    );

    balls.push(ball);
}

// draw and animate the balls
function loop() {
    // set canvas fill color to semi-transparent black
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    // run each ball's draw() and update() function
    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    // run the function again -- repeatedly run
    requestAnimationFrame(loop);
}

// call the function to begin the animation
loop();