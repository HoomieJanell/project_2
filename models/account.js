module.exports = function(sequelize, DataTypes){
    var accData = sequelize.define("accData", {
    // real name
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // these are gonna be weird to actually use
    prefs: {type: DataTypes.STRING},
    bio: {type: DataTypes.STRING}
  });
  accData.associate = models=>{
    models.accData.belongsTo(models.User, {onDelete: "CASCADE"})};
  return accData;
}