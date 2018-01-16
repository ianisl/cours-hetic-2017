// Paramètres
// Bonne pratique : stocker les paramètres dans une variable initialisée en début de sketch
const p = {
    agentSize: 10, // Taille de l'agent
    stepSize: 2 // Increment de position (vitesse de l'agent)
};
// ----------

let agentPosition; // Les variables 'utilitaires' (qui doivent être globales mais ne sont pas des paramètres) sont placées juste avant la fonction 'setup'

function setup() {
    createCanvas(540, 540);
    agentPosition = createVector(0, height/2); // Les fonctions et variables définies par la librairie p5.js ne sont pas disponibles en dehors des fonctions 'setup', 'draw', etc.
    background(255);
}

function draw() {
    // Mise à jour de la position
    agentPosition.x += p.stepSize;
    // Conditions aux limites
    if (agentPosition.x > width) {
        agentPosition.x = 0;
    }
    // Dessin
    background(255);
    noStroke();
    fill(0);
    ellipse(agentPosition.x, agentPosition.y, p.agentSize, p.agentSize);
}
