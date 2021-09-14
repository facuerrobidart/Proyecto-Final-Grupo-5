module.exports = (sequelize,DataTypes)=>{
    const alias = "tipos_usuario";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre_tipos_usuario:{
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }

    const config = {timestamps:false};

    const TipoUsuario = sequelize.define(alias,cols,config);

    TipoUsuario.associate = (models) => {
        TipoUsuario.hasMany(models.usuarios,{
            as: "usuarios",
            foreignKey: "tipos_usuario_id"
        })
    }
    return TipoUsuario;
}