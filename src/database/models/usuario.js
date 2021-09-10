module.exports = (sequelize,DataTypes) =>{
    let alias = "usuarios";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        apellido:{
            type: DataTypes.STRING(45),
            allowNull:false
        },
        email:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        contrasena:{
            type: DataTypes.STRING(100),
            allowNull:false
        },
        direccion:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        ciudad:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        provincia:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        codigo_postal:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tipos_usuario_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
    
    const config = {camelCase: false, timestamps: false}; 

    const usuario = sequelize.define(alias,cols,config);

    usuario.associate = function(models){
        usuario.hasMany(models.producto,{
            as: "productos",
            foreignKey: "usuarios_vendedor_id"
        });
        usuario.hasMany(models.venta,{
            as: "usuarios_productos",
            foreignKey: "usuario_comprador_id"
        });
        usuario.belongsTo(models.tipoUsuario,{
            as: "tipos_usuario",
            foreignKey: "tipos_usuario_id"
        })
    }

    return usuario;
}