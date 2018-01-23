// Paramètres
const p = {
    agentCount: 1000,
    agentSize: 5,
    agentAlpha: 5, // Pour de meilleurs effets de trace, on désactive complètement le rafraîchissement de l'écran et on dessine en transparence
    minStepSize: 0.2,
    maxStepSize: 2,
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
    stroke(0, p.agentAlpha); // Autre manière de spécifier une couleur en niveau de gris avec de la transparence
    strokeWeight(p.agentSize);
    noFill();
    agents.forEach(function (a) {
        line(a.previousPosition.x, a.previousPosition.y, a.position.x, a.position.y);
    });
}
