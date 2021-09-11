module.exports = (sequelize, DataTypes) => {
    const alias = "condiciones_producto";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        condicion: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }

    const config = { timestamps: false };

    const condicionProducto = sequelize.define(alias, cols, config);
    /*
        tipoUsuario.associate = (models) => {
            tipoUsuario.hasMany(models.usuario,{
                as: "usuarios",
                foreignKey: "tipos_usuario_id"
            })
        }
        */
    return condicionProducto;
}