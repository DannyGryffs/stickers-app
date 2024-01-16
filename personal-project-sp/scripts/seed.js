import { sequelize, Packs_in_cart, Sticker, Pack, Stickers_in_cart, Cart } from '../model/model.js'

const stickers = [
    {
        name: "",
        description: "",
        tag: "",
        price: "",
        image: ""
    },
    {
        name: "",
        description: "",
        tag: "",
        price: "",
        image: ""
    },
    {
        name: "",
        description: "",
        tag: "",
        price: "",
        image: ""
    },
    {
        name: "",
        description: "",
        tag: "",
        price: "",
        image: ""
    },

];

const pack = [
    {
        
    }
]

sequelize.sync({force: true}).then(async () => {
    await Sticker.bulkCreate(stickers);
    await Pack.bulkCreate(pack)
});



sequelize.close()
