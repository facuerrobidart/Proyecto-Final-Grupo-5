module.exports = (sequelize, DataTypes) => {
    let  alias = "productos";

    let cols = {
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
            type: DataTypes.STRING(),
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
        categorias_producto_id: {
            type: DataTypes.INTEGER,

        },
        condiciones_producto_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        usuarios_vendedor_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nombre_imagen: {
            type: DataTypes.STRING
        },
    }

    let config = {
        tableName: "productos",
        timestamps: false
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = (models) => {
        Producto.hasMany(models.usuarios_productos, { // venta 
            as: "usuarios_productos",
            foreignKey: "productos_id"
        });
        Producto.belongsTo(models.usuarios, {
            as: "usuarios",
            foreignKey: "usuarios_vendedor_id"
        });
        Producto.belongsTo(models.categorias_producto,{
            as: "categorias_producto",
            foreingnKey: "categorias_producto_id"
        });
        Producto.belongsTo(models.condiciones_producto, {
            as: "condiciones_producto",
            foreingnKey: "condiciones_producto_id"
        })
    }

    return Producto;
}