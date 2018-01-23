// Paramètres
const p = {
    agentCount: 10,
    agentAlpha: 5,
    minStepSize: 0.2,
    maxStepSize: 0.5,
    timeIntervalBetweenUpdates: 100
};
// ----------

let agents;
let timeOfLastUpdate;

function setup() {
    createCanvas(540, 540);
    agents = [];
    let a;
    for (let i = p.agentCount - 1; i >= 0; i--) {
        a = new Agent();
        a.stepSize = random(p.minStepSize, p.maxStepSize);
        agents.push(a);
    };
    background(255);
    timeOfLastUpdate = millis();
}

function draw() {
    let currentTime = millis();
    // Mise à jour de la position
    if (currentTime - timeOfLastUpdate > p.timeIntervalBetweenUpdates) {
        timeOfLastUpdate = currentTime;
        agents.forEach(function(a) {
            a.angle = random(0, TWO_PI);
        });
    }
    agents.forEach(function(a) {
        a.updatePosition();
    });
    // Dessin
    stroke(0, p.agentAlpha);
    noFill();
    beginShape();
    agents.forEach(function (a) {
        vertex(a.position.x, a.position.y);
    });
    endShape(CLOSE); // L'option 'CLOSE' permet la fermeture du tracé
}
