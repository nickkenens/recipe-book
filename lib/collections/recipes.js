Recipes = new Mongo.Collection("Recipes");

Recipes.allow({
  insert: function(userId, doc){
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  },
  remove: function(userId, doc){
    return !!user;
  }
});

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Recipe Name'
  },
  desc: {
    type: String,
    label: 'Description'
  },
  createdBy: {
    type: String,
    label: 'Created By',
    autoValue: function() {
      return this.userId()
    }
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: function() {
      return new Date();
    }
  }
});

Recipes.attachSchema( RecipeSchema );
