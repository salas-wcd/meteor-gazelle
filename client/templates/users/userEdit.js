Template.userEdit.helpers({
  schema: function () {
    var classSchema = new SimpleSchema({
      classId: {
        type: String,
        allowedValues: function () {
          var values = [];
          UserClass.find({}, {
            fields: {
              '_id': 1
            }
          }).forEach(function (element) {
            values.push(element._id);
          });
          return (values.length !== 0) ? values : ['none'];
        },
        autoform: {
          type: 'select',
          options: function () {
            var options = [];
            UserClass.find({}, {
              fields: {
                'title': 1,
                '_id': 1
              }
            }).forEach(function (element) {
              options.push({
                label: element.title,
                value: element._id
              });
            });
            return options;
          }
        }
      }
    });
    return new SimpleSchema({
      userId: {
        type: String,
        autoform: {
          type: 'hidden',
          label: false
        }
      },
      classes: {
        type: [classSchema]
      }
    });
  }
});

Template.userEdit.events({
  //add your statement here
});

Template.userEdit.onCreated(function () {
  //add your statement here
});

Template.userEdit.onRendered(function () {
  //add your statement here
});

Template.userEdit.onDestroyed(function () {
  //add your statement here
});
