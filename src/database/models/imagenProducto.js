module.exports = (sequelize,DataTypes) =>{
    const alias= "imagenes_producto";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_imagen:{
            type: DataTypes.STRING(100),
            allowNull: true
        },
        productos_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    const config = {timestamps:false};

    const imagenProducto = sequelize.define(alias,cols,config);

    imagenProducto.associate = (models) => {
        imagenProducto.belongsTo(models.producto,{
            as: "productos",
            foreignKey: "productos_id"
        })
    };

    return imagenProducto;
}