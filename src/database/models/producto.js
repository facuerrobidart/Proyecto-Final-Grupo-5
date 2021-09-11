module.exports = (sequelize, DataTypes) => {
    const alias = "productos";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.LONGTEXT,
            allowNull: false
        },
        precio: {
            type: DataTypes.DECIMAL(10),
            allowNull: false
        },
        nombre_artista: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        imagenes_producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        categorias_producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        condiciones_producto: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usuarios_vendedor_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }

    const config = { timestamps: false };

    const producto = sequelize.define(alias, cols, config);

    producto.associate = (models) => {
        producto.hasMany(models.imagenProducto, {
            as: "imagenes_producto",
            foreignKey: "imagenes_producto_id"
        });
        producto.hasMany(models.venta, {
            as: "usuarios_productos",
            foreignKey: "productos_id"
        });
        producto.belongsTo(models.usuario, {
            as: "usuarios",
            foreignKey: "usuarios_vendedor_id"
        });
    }

    return producto;
}