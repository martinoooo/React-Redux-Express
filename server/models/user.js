import sequelize from './connect';
import Sequelize from 'sequelize';

var User = sequelize.define('user', {
	username: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	timezone: {
		type: Sequelize.STRING,
		allowNull: false
	},
	passworld_digest: {
		type: Sequelize.STRING,
		allowNull: false,
	}
}, {
	timestamps: true // timestamps will now be true
});
User.sync(); //创建表

module.exports = User;