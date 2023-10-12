const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'user';

class User extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false,
            schema: 'authentication'
        };
    }
}

const UserSchema = {
    dbid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING(50)
    },
    last_name: {
        type: DataTypes.STRING(50)
    },
    birthday: {
        type: DataTypes.DATE
    },
    username: {
        type: DataTypes.STRING(15)
    },
    password: {
        type: DataTypes.STRING(30)
    },
    email: {
        type: DataTypes.STRING(30)
    }
};

module.exports = { User, UserSchema };
