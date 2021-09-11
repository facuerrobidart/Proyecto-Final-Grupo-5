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

    const config = { timestamps: false };

    const condicionProducto = sequelize.define(alias, cols, config);

    condicionProducto.associate = (models) => {
        condicionProducto.hasMany(models.producto, {
            as: "productos",
            foreignKey: "condiciones_producto_id"
        })
    }

    return condicionProducto;
}