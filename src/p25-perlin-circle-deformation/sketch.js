// Paramètres
const p = {
    fieldIntensity: 10,
    fieldScale: 30,
    agentCount: 500,
    circleRadius: 150, // Rayon du cercle à déformer
    circleAlpha: 20,
    circleLineWeight: 1.5,
};
// ----------

let field;
let agents;

function setup() {
    createCanvas(540, 540);
    field = new PerlinField(p.fieldIntensity, p.fieldScale);
    let angleStep = TWO_PI / p.agentCount; // Calcul de l'écart angulaire entre deux positions initiales d'agents
    agents = [];
    let a, x, y;
    for (let i = p.agentCount - 1; i >= 0; i--) {
        x = width / 2 + cos(i * angleStep) * p.circleRadius;
        y = height / 2 + sin(i * angleStep) * p.circleRadius;
        a = new Agent(createVector(x, y)); // Placement de départ des agents sur un cercle
        a.isPositionResetWhenOutside = false; // Les agents ne sont pas ramenés dans l'espace du sketch lorsqu'ils en sortent
        agents.push(a);
    };
    initGUI();
    background(255);
}

function draw() {
    beginShape();
    agents.forEach(function(a) {
        a.angle = field.getFieldValue(a.position);
        a.updatePosition();
        stroke(0, p.circleAlpha);
        strokeWeight(p.circleLineWeight);
        noFill();
        curveVertex(a.position.x, a.position.y);
    });
    if (agents.length > 3) {
        curveVertex(agents[0].position.x, agents[0].position.y);
        curveVertex(agents[1].position.x, agents[1].position.y);
        curveVertex(agents[2].position.x, agents[2].position.y);
    }
    endShape();
}

function initGUI() {
    let gui = new dat.GUI();
    gui.add(field, 'fieldIntensity', 0, 200);
    gui.add(field, 'fieldScale', 1, 500);
    gui.add(p, 'circleAlpha', 1, 255);
    gui.add(p, 'circleLineWeight', 0.5, 50);
}
