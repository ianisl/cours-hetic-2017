// Une classe définissant un champ de force basé sur un bruit de Perlin.

class PerlinField {
    constructor(fieldIntensity, fieldScale) {
        this.fieldIntensity = fieldIntensity;
        this.fieldScale = fieldScale;
    }
    getFieldValue(position) {
        // Une méthode permettant d'obtenir la valeur du champ de force à une position donnée
        return noise(position.x / this.fieldScale, position.y / this.fieldScale) * this.fieldIntensity;
    }
}
