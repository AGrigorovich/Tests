const arrayOfImages = {
    handsImages: ['../img/hand1.png', '../img/hand2.png', '../img/hand3.png'],
    flowersImages: ['../img/flowers1.png', '../img/flowers2.png', '../img/flowers3.png'],
    leafsImages: ['../img/leaf.png', '../img/leaf.png', '../img/leaf.png']
};

export const initialState = {
    order: {
        handsItem: 0,
        flowersItem: 0,
        leafsItems: 0,
        checkboxes: []
    },
    defaultValues: [
        {itemsName: 'handsItem', itemsValue: 0, images: arrayOfImages.handsImages},
        {itemsName: 'flowersItem', itemsValue: 0, images: arrayOfImages.flowersImages},
        {itemsName: 'leafsItems', itemsValue: 0, images: arrayOfImages.leafsImages},
    ],
    checkboxesDefaultValue: [
        {value: '1', checked: false, imgSrc: ''},
        {value: '2', checked: false, imgSrc: ''},
        {value: '3', checked: false, imgSrc: ''},
        {value: '4', checked: 'checked', imgSrc: '../img/grass.png'},
        {value: '5', checked: 'checked', imgSrc: '../img/tree.png'},
    ],
    popupParams: null
};

export const handsPopupParams = {
    title: 'HANDS', text: 'Some text', offsetTopWidth: '0'
};

export const flowersPopupParams = {
    title: 'FLOWERS', text: 'Some text', offsetTopWidth: '20%'
};

export const leafsPopupParams = {
    title: 'LEAFS', text: 'Some text', offsetTopWidth: '40%'
};

export const checkboxPopupParams = {
    title: 'CHECKBOX', text: 'Some text', offsetTopWidth: '60%'
};

export const APIURL = 'https://jsonplaceholder.typicode.com/';