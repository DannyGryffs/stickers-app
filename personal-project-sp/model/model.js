import Sequelize, { DataTypes, Model } from 'sequelize'

const sequelize = new Sequelize('postgresql:///sticker_app')

class Pack extends Model {}

Pack.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    },
    {
        sequelize: sequelize,
        timestamps: false
    }
)



class Sticker extends Model {}

Sticker.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(35),
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tag: {
            type: DataTypes.STRING(35),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        image: { 
            type: DataTypes.BLOB('long'),
            allowNull: true 
        },   
    },
    {
        sequelize: sequelize,
        timestamps: false
    }
)



class Cart extends Model {}

Cart.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    },
    {
        sequelize: sequelize,
        timestamps: false
    }
)



class Packs_in_cart extends Model {}

Packs_in_cart.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize: sequelize,
        timestamps: false
    }
)



class Stickers_in_cart extends Model {}

Stickers_in_cart.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize: sequelize,
        timestamps: false
    }
)

sequelize.sync()
