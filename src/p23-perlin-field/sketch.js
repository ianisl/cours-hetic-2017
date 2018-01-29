// Paramètres
const p = {
    fieldIntensity: 10,
    fieldScale: 300,
    agentCount: 1000,
    agentSize: 1.5,
    agentAlpha: 90,
    stepSize: 10
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
        a.stepSize = p.stepSize;
        agents.push(a);
    };
    initGUI();
    background(255);
}

function draw() {
    agents.forEach(function(a) {
        a.angle = field.getFieldValue(a.position); // Utilisation de la valeur du champ à l'endroit où se trouve l'agent comme nouvelle valeur de l'angle.
        a.updatePosition();
        stroke(0, p.agentAlpha);
        strokeWeight(p.agentSize);
        line(a.previousPosition.x, a.previousPosition.y, a.position.x, a.position.y);
    });
}

function initGUI() {
    let gui = new dat.GUI();
    gui.add(field, 'fieldIntensity', 0, 200); // On doit modifier les propriétés de l'objet 'field', et non les paramètres du sketch : ces derniers deviennent inutiles une fois l'objet initialisé.
    gui.add(field, 'fieldScale', 1, 500);
    gui.add(p, 'agentAlpha', 1, 255);
    gui.add(p, 'agentSize', 0.5, 50);
    gui.add(p, 'stepSize', 1, 20).onChange(function(v) {
        agents.forEach(function(a) {
            a.stepSize = p.stepSize; // On utilise ici un listener pour surveiller l'action de l'utilisateur sur l'interface graphique. On transmets ensuite la nouvelle valeur du paramètre 'stepSize' à tous les agents.
        });
    });
    gui.add(this, 'refreshBackground');
}

function refreshBackground() {
    background(255);
}
