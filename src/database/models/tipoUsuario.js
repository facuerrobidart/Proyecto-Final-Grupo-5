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

    const tipoUsuario = sequelize.define(alias,cols,config);

    tipoUsuario.associate = (models) => {
        tipoUsuario.hasMany(models.usuario,{
            as: "usuarios",
            foreignKey: "tipos_usuario_id"
        })
    }
    return tipoUsuario;
}