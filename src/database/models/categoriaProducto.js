module.exports = (sequelize, DataTypes) => {
    let alias = "categorias_producto";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        categoria: {
            type: DataTypes.STRING(45),

        }
    };

    let config = {
         tableName: "categorias_producto",
         timestamps: false
        };

    const CategoriaProducto = sequelize.define(alias, cols, config);

    CategoriaProducto.associate = (models) => {
        CategoriaProducto.hasMany(models.productos, {
            as: "productos",
            foreignKey: "categorias_producto_id"
        })
    }

    return CategoriaProducto;
}