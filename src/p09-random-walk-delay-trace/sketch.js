// Paramètres
const p = {
    agentSize: 2,
    stepSize: 2,
    timeIntervalBetweenUpdates: 100
};
// ----------

let agentPosition;
let agentAngle;
let timeOfLastUpdate;

function setup() {
    createCanvas(540, 540);
    initPosition();
    agentAngle = random(0, TWO_PI);
    background(255);
    timeOfLastUpdate = millis();
}

function draw() {
    let currentTime = millis();
    // Mise à jour de la position
    if (currentTime - timeOfLastUpdate > p.timeIntervalBetweenUpdates) {
        timeOfLastUpdate = currentTime;
        agentAngle = random(0, TWO_PI);
    }
    updatePosition();
    // Conditions aux limites
    if (agentPosition.x < 0 || agentPosition.x > width || agentPosition.y < 0 || agentPosition.y > height) {
        initPosition();
    }
    // Dessin
    background(255, 255, 255, 3); // Rafraîchissement de l'écran avec une couleur transparente
    noStroke();
    fill(0);
    ellipse(agentPosition.x, agentPosition.y, p.agentSize, p.agentSize);
}

function initPosition() {
    agentPosition = createVector(random(width), random(height));
}

function updatePosition() {
    agentPosition.x += cos(agentAngle) * p.stepSize;
    agentPosition.y += sin(agentAngle) * p.stepSize;
}
