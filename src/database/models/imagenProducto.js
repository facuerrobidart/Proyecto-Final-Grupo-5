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

    const ImagenProducto = sequelize.define(alias,cols,config);

    ImagenProducto.associate = (models) => {
        ImagenProducto.belongsTo(models.productos,{
            as: "productos",
            foreignKey: "productos_id"
        })
    };

    return ImagenProducto;
}