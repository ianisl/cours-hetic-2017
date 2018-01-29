// Paramètres
const p = {
    noiseIntensity: 255,
    noiseScale: 300 // Ce paramètre permet de contrôler l'échelle du bruit de Perlin.
};
// ----------

function setup() {
    createCanvas(540, 540);
    drawPerlinValues();
    initGUI();
}

function drawPerlinValues() {
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let v = noise(i / p.noiseScale, j / p.noiseScale); // La division est préférée à la multiplication car elle donne des résultats plus intuitifs : plus 'noiseScale' aura une valeur élevée, et plus la taille des structures visuelles produites sera grande.
            stroke(v * p.noiseIntensity);
            point(i, j);
        }
    }
}

function initGUI() {
    let gui = new dat.GUI();
    gui.add(p, 'noiseIntensity', 0, 255).onChange(function(v) {
        drawPerlinValues();
    });
    gui.add(p, 'noiseScale', 1, 500).onChange(function(v) {
        drawPerlinValues();
    });
}
