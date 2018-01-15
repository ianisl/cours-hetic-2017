function setup() {
    createCanvas(540, 540);
    background(255); // Bonne pratique : rafraîchir l'arrière-plan une première fois dans le 'setup'
}

function draw() {
    background(255); // Rafraîchissement de l'arrière-plan
    fill('#6ee2e2');
    stroke(234, 163, 80);
    strokeWeight(4);
    ellipse(width/2, height/2, 200, 200);
}
