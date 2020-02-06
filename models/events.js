module.exports = function(sequelize, DataTypes){
var events = sequelize.define("events", {
    event: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING
    },
    ticketlink: {
      type: DataTypes.STRING
    }
  });
  events.associate = models => {
      models.events.hasMany(models.groups, {as: 'Groups', onDelete: "CASCADE"})};
  return events;
}