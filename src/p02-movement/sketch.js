let x; // Coordonnées de position
let y;

function setup() {
    createCanvas(540, 540);
    x = 0;
    y = height/2;
    background(255);
}

function draw() {
    // Mise à jour de la position
    x += 2;
    // Dessin
    background(255);
    noStroke();
    fill(0);
    ellipse(x, y, 10, 10);
}
