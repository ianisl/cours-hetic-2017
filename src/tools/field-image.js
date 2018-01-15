// Une classe définissant un champ de force basé sur la luminosité des pixels d'une image

class ImageField {
    constructor(fieldIntensity, image) {
        this.fieldIntensity = fieldIntensity;
        this.image = image;
    }
    getFieldValue(position) {
        // Une méthode permettant d'obtenir la valeur du champ de force à une position donnée
        let c = this.image.get(floor(position.x/width * this.image.width), floor(position.y/height * this.image.height)); // Obtention de la couleur de l'image à une position donnée. L'image est automatiquement ajustée aux dimensions du canvas.
        return brightness(c) * this.fieldIntensity;
    };
    applyBlur(level) {
        // Une méthode permettant d'appliquer un flou à l'image
        this.image.filter(BLUR, level);
    }
}
