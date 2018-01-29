// Une classe définissant un variateur de couleurs. Le choix du mode de couleur est laissé libre à l'utilisateur. L'utilitaire se contente de faire évoluer trois composantes 'x', 'y' et 'z' à l'aide d'incréments 'xStep', 'yStep' et 'zStep'.

class ColorFader {
    constructor(x, y, z, xStep, yStep, zStep) {
        this.x = x; // 'x' : 'red' ou 'hue'
        this.y = y; // 'y' : 'green' ou 'saturation'
        this.z = z; // 'x' : 'blue' ou 'brightness'
        this.xStep = xStep;
        this.yStep = yStep;
        this.zStep = zStep;
        // Mise en place de l'appel automatique de la méthode 'update' au début de chaque boucle draw de notre sketch. L'utilisation d'une fonction fléchée permet de fixer 'this' à sa valeur dans le contexte du constructeur.
        p5.prototype.registerMethod('pre', () => this.update());
    }
    update() {
        // Une méthode permettant de mettre à jour les composantes de la couleur
        this.x += this.xStep;
        this.y += this.yStep;
        this.z += this.zStep;
    }
}
