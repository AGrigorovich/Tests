const arrayOfImages = {
    handsImages: ['../img/hand1.png', '../img/hand2.png', '../img/hand3.png'],
    flowersImages: ['../img/flowers1.png', '../img/flowers2.png', '../img/flowers3.png'],
    leafImages: ['../img/leaf.png', '../img/leaf.png', '../img/leaf.png'],
    checkboxesImages: ['../img/grass.png', '../img/tree.png']
};

export const initialState = {
    order: {
        handsItem: 0,
        flowersItem: 0,
        leafItems: 0,
        checkboxes: []
    },

    arrayOfImages: {
        handsImages:arrayOfImages.handsImages,
        flowersImages: arrayOfImages.flowersImages,
        leafImages:arrayOfImages.leafImages}
};
