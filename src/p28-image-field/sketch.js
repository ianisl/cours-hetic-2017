// Paramètres
const p = {
    fieldIntensity: 0.005,
    agentCount: 10,
    agentSize: 1.5,
    agentAlpha: 120,
    stepSize: 10,
};
// ----------

let image;
let agents;
let field;

function preload() {
    image = loadImage('img/x.jpg'); // En appelant la fonction asynchrone 'loadImage' dans la méthode 'preload', on garantit que la suite du sketch ne s'exécutera qu'une fois l'image chargée
}

function setup() {
    createCanvas(540, 540);
    agents = [];
    let a;
    for (let i = p.agentCount - 1; i >= 0; i--) {
        a = new Agent();
        a.stepSize = p.stepSize;
        agents.push(a);
    };
    field = new ImageField(p.fieldIntensity, image);
    field.applyBlur(10);
    background(255);
}

function draw() {
    agents.forEach(function(a) {
        a.angle = field.getFieldValue(a.position);
        a.updatePosition();
        stroke(0, p.agentAlpha);
        strokeWeight(p.agentSize);
        line(a.previousPosition.x, a.previousPosition.y, a.position.x, a.position.y);
    });
}
