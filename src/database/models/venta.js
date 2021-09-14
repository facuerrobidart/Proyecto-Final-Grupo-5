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
            type: DataTypes.DATE,
            allowNull: false
        }
    };
    const config = {timestamps:false};

    const Venta = sequelize.define(alias,cols,config);

    Venta.associate = function(models){
        Venta.belongsTo(models.usuarios,{
            as:"usuarios",
            foreignKey: "usuario_comprador_id"
        });
        Venta.belongsTo(models.productos,{
            as:"productos",
            foreignKey:"productos_id"
        });
    }

    return Venta;
}