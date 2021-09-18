module.exports = (sequelize, DataTypes) => {
    const alias = "condiciones_producto";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        condicion: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }

    const config = { 
        tableName: "condiciones_prodcuto",
        timestamps: false };

    const CondicionProducto = sequelize.define(alias, cols, config);

    CondicionProducto.associate = (models) => {
        CondicionProducto.hasMany(models.productos, {
            as: "productos",
            foreignKey: "condiciones_producto_id"
        })
    }

    return CondicionProducto;
}