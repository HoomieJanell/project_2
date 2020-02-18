module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define("Group", {
    // Giving the Group model a name of type STRING
    name: DataTypes.STRING
  });

  Group.associate = function(models) {
    // Associating Group with Users
    // When an Group is deleted, also delete any associated Users
    Group.hasMany(models.User, {
      onDelete: "cascade"
    });
  };

  return Group;
};
