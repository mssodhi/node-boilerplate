const ROLES = require('../constants/roles');

module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    'Profile',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      role: {
        type: DataTypes.ENUM,
        values: Object.values(ROLES),
        allowNull: true
      }
    },
    { tableName: 'profile' }
  );

  Profile.associate = models => {
    Profile.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
  };
  return Profile;
};
