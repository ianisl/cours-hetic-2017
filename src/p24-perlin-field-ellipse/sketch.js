// Paramètres
const p = {
    fieldIntensity: 20,
    fieldScale: 300,
    agentCount: 200,
    agentSize: 50,
    agentAlpha: 40
};
// ----------

let field;
let agents;

function setup() {
    createCanvas(540, 540);
    field = new PerlinField(p.fieldIntensity, p.fieldScale);
    agents = [];
    let a;
    for (let i = p.agentCount - 1; i >= 0; i--) {
        a = new Agent();
        agents.push(a);
    };
    initGUI();
    background(255);
}

function draw() {
    agents.forEach(function(a) {
        a.angle = field.getFieldValue(a.position);
        a.updatePosition();
        stroke(0, p.agentAlpha);
        strokeWeight(1);
        noFill();
        ellipse(a.position.x, a.position.y, p.agentSize, p.agentSize); // Représentation des agents par des cercles
    });
}

function initGUI() {
    let gui = new dat.GUI();
    gui.add(field, 'fieldIntensity', 0, 200);
    gui.add(field, 'fieldScale', 1, 500);
    gui.add(p, 'agentAlpha', 1, 255);
    gui.add(p, 'agentSize', 0.5, 50);
    gui.add(this, 'refreshBackground');
}

function refreshBackground() {
    background(255);
}
