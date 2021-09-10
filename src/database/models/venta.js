module.exports = (sequelize,DataTypes) =>{
    const alias = "usuarios_productos";
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usuario_comprador_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productos_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha_transaccion:{
            type: DataTypes.DATETIME,
            allowNull: false
        }
    };
    const config = {timestamps:false};

    const venta = sequelize.define(alias,cols,config);

    venta.associate = function(models){
        venta.belongsTo(models.usuario,{
            as:"usuarios",
            foreignKey: "usuario_comprador_id"
        });
        venta.belongsTo(models.producto,{
            as:"productos",
            foreignKey:"productos_id"
        });
    }

    return venta;
}