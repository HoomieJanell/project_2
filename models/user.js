module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  });

  User.associate = function(models) {
    // We're saying that a User should belong to an Group
    // A User can't be created without an Group due to the foreign key constraint
    User.belongsTo(models.Group, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User;
};
