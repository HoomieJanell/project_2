//Can change email to username

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

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
  accData.belongsTo(User, {onDelete: "CASCADE"});

  var groups = sequelize.define("groups", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {onDelete: "CASCADE"});
  groups.belongsToMany(User, {through: 'userGroups'});
  User.belongsToMany(groups, {through: 'userGroups'});

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
    imagelink: {
      type: DataTypes.STRING
    }
  });
  events.hasMany(groups, {as: 'Groups', onDelete: "CASCADE"});
  return User, events, groups, accData;
};
