
let maxDepth = 9;

function setup() {
    let container = document.querySelector("#mobileCanvas");

    let canvas = createCanvas(
        container.offsetWidth || windowWidth,
        container.offsetHeight || windowHeight
    );

    canvas.parent("mobileCanvas");
    angleMode(RADIANS);

    if (window.innerWidth > 768) {
        noLoop();
    }
}

function draw() {
    clear();

    translate(width / 2, height / 1.5);

    let sway = sin(millis() * 0.001) * 0.15;

    drawTree(100, 0, sway, 0);
}

function drawTree(len, angle, sway, depth) {

    if (depth > maxDepth || len < 4) return;

    let thickness = map(depth, 0, maxDepth, 12, 1);

    let black = color(0, 0, 0, 100);
    let grey = color(150, 150, 150, 20);

    let branchColor = lerpColor(black, grey, depth / maxDepth);

    stroke(branchColor);
    strokeWeight(thickness);
    strokeCap(ROUND);

    line(0, 0, 0, -len);

    translate(0, -len);

    let branchAngle = 0.5 + sway;

    push();
    rotate(-branchAngle);
    drawTree(len * 0.72, angle, sway, depth + 1);
    pop();

    push();
    rotate(branchAngle);
    drawTree(len * 0.72, angle, -sway, depth + 1);
    pop();
}

function windowResized() {
    let container = document.querySelector("#mobileCanvas");

    if (window.innerWidth <= 768) {
        resizeCanvas(container.offsetWidth, container.offsetHeight);
        loop();
    } else {
        noLoop();
    }
}
