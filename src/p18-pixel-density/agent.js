// Une classe définissant un agent. Les options d'initialisation sont volontairement restreintes au maximum : le constructeur ne prend qu'un argument (optionnel), permettant de spécifier la position de l'agent lors de sa création.

// La philosophie derrière ce choix est qu'il est très facile, si le besoin s'en fait sentir, de modifier 'manuellement' les propriétés de l'objet après sa création.

class Agent {
    constructor(position) {
        this.position = position !== undefined ? position : createVector(random(width), random(height)); // Si aucune position n'est fournie, initialisation avec une position aléatoire
        this.previousPosition = this.position.copy();
        this.angle = random(TWO_PI);
        this.stepSize = 1;
        this.isPositionResetWhenOutside = true;
    }
    updatePosition() {
        // Une méthode mettant à jour de la position de l'agent en fonction de son angle actuel
        this.previousPosition = this.position.copy();
        this.position.x += cos(this.angle) * this.stepSize;
        this.position.y += sin(this.angle) * this.stepSize;
        if (this.isPositionResetWhenOutside && this.isOutsideSketch() > 0) {
            this.position = createVector(random(width), random(height));
            this.previousPosition = this.position.copy();
        }
    }
    isOutsideSketch() {
        // Une méthode permettant de vérifier si l'agent est sorti des limites de l'espace du sketch. La méthode renvoie les valeurs suivantes :
        // 0: l'agent n'est pas sorti des limites de l'espace du sketch
        // 1: l'agent est sorti par le haut
        // 2: l'agent est sorti par la droite
        // 3: l'agent est sorti par le bas
        // 4: l'agent est sorti par la gauche
        if (this.position.y < 0) {
            return 1;
        } else if (this.position.x > width) {
            return 2;
        } else if (this.position.y > height) {
            return 3;
        } else if (this.position.x < 0) {
            return 4;
        } else {
            return 0;
        }
    }
}
