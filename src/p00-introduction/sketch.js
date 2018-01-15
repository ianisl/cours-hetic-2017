function setup() {
    createCanvas(540, 540); // Définition des dimensions de la zone de dessin
}

function draw() {
    fill('#6ee2e2'); // Couleur de remplissage (notation hexadécimale)
    stroke(234, 163, 80); // Couleur de contour (notation RGB 0-255)
    strokeWeight(4); // Épaisseur du contour
    ellipse(width/2, height/2, 200, 200); // Dessin d'une ellipse
}
