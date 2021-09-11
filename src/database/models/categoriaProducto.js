module.exports = (sequelize, DataTypes) => {
    const alias = "categorias_producto";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }

    const config = { timestamps: false };

    const categoriaProducto = sequelize.define(alias, cols, config);

    categoriaProducto.associate = (models) => {
        categoriaProducto.hasMany(models.producto, {
            as: "productos",
            foreignKey: "categorias_producto_id"
        })
    }

    return categoriaProducto;
}