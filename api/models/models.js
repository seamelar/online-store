const sequelize = require('./db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})
const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketEntity = sequelize.define('basket_entity', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Entity = sequelize.define('entity', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false },
})

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const Position = sequelize.define('position', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
})

const EntityInfo = sequelize.define('entity_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
})

const TypePosition = sequelize.define('type_position', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketEntity)
BasketEntity.belongsTo(Basket)

Type.hasMany(Entity)
Entity.belongsTo(Type)

Position.hasMany(Entity)
Entity.belongsTo(Position)

Entity.hasMany(BasketEntity)
BasketEntity.belongsTo(Entity)

Entity.hasMany(EntityInfo, { as: 'info' });
EntityInfo.belongsTo(Entity)

Type.belongsToMany(Position, { through: TypePosition })
Position.belongsToMany(Type, { through: TypePosition })

module.exports = {
    User,
    Basket,
    BasketEntity,
    Entity,
    Type,
    Position,
    Rating,
    TypePosition,
    EntityInfo
}