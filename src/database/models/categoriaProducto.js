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
    /* 
     /*La instruccion sequelize.sync es utilizado para crear las tablas en MySql a partir de los modelos creados.
        ahora lo dejo comentado, ya que solo se corre la primera ves que ejecuto el app.js, de lo contrario cada vez
        que ejecuto la app intentaria crear las tablas/*
    
        sequelize.sync()
            .then(() => console.log('Table created successfully'))
            .catch(error => console.log('Error creating table:', error));
    */
    return CategoriaProducto;


}

