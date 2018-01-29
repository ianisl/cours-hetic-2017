// Paramètres
const p = {
    noiseIntensity: 255
};
// ----------

function setup() {
    createCanvas(540, 540);
    drawPerlinValues(); // Il serait beaucoup trop coûteux de dessiner les valeurs du bruit de manière répétée (i.e. dans la boucle 'draw'). On les dessine donc dans la fonction 'setup'. Un sketch p5.js peut tout à fait s'exécuter sans que l'on ait précisé la fonction 'draw'.
    initGUI();
}

function drawPerlinValues() {
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let v = noise(i, j);
            stroke(v * p.noiseIntensity); // La fonction 'noise' renvoie des valeurs entre 0 et 1. Après multiplication, nous obtenons donc des valeurs de gris entre 0 et 'noiseIntensity'.
            point(i, j);
        }
    }
}

function initGUI() {
    let gui = new dat.GUI();
    gui.add(p, 'noiseIntensity', 0, 255).onChange(function(v) {
        drawPerlinValues(); // L'ajout d'un listener permet de redessiner l'écran à chaque modification du paramètre 'noiseIntensity'.
    });
}
