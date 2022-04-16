class Chaine {

    constructor(nom, numero, categoryList) {
        this.nom = nom;
        this.numero = numero;
        this.categoryList = categoryList;
    }

    addCategory(newCategory) {
        this.categoryList.push(newCategory);
        this.categoryList.slice(0, 2);
        if (this.categoryList.length <= 2) {
            this.categoryList.length = 2;
        } else {
            this.categoryList.unshift(newCategory);
            if (this.categoryList.length > 3) {
                this.categoryList.length = 3;
            };
        };
    };
};
module.exports = {
    Chaine
};