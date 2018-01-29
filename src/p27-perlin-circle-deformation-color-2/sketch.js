// Paramètres
const p = {
    fieldIntensity: 10,
    fieldScale: 30,
    agentCount: 500,
    circleRadius: 150,
    circleAlpha: 20,
    circleLineWeight: 1.5,
    circleHue: 125,
    circleSaturation: 65,
    circleBrightness: 0,
    hueStep: 0.6,
    saturationStep: -0.1,
    brightnessStep: 0.2,
};
// ----------

let field;
let agents;
let fader;
let fader2;

function setup() {
    createCanvas(540, 540);
    field = new PerlinField(p.fieldIntensity, p.fieldScale);
    let angleStep = TWO_PI / p.agentCount;
    agents = [];
    let a, x, y;
    for (let i = p.agentCount - 1; i >= 0; i--) {
        x = width / 2 + cos(i * angleStep) * p.circleRadius;
        y = height / 2 + sin(i * angleStep) * p.circleRadius;
        a = new Agent(createVector(x, y));
        a.isPositionResetWhenOutside = false;
        agents.push(a);
    };
    fader = new ColorFader(0, p.circleSaturation, p.circleBrightness, 0, p.saturationStep, p.brightnessStep);
    fader2 = new ColorFader(p.circleHue, 0, 0, p.hueStep, 0, 0); // On utilise ici un second fader pour faire évoluer la teinte du cercle au cours du temps
    initGUI();
    background(255);
    colorMode(HSB, 360, 100, 100, 255);
}

function draw() {
    beginShape();
    agents.forEach(function(a) {
        a.angle = field.getFieldValue(a.position);
        a.updatePosition();
        stroke(fader2.x, fader.y, fader.z, p.circleAlpha); // 'fader2' contrôle la teinte, 'fader' la saturation et la luminosité
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
