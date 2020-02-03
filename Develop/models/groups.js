module.exports = function(sequelize, DataTypes) {
  var groups = sequelize.define(
    "groups",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    { onDelete: "CASCADE" }
  );
  groups.associate = models => {
    models.groups.belongsToMany(models.User, { through: "userGroups" })};
  
  return groups;
};
