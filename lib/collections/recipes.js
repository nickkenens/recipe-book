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

Ingredient = new SimpleSchema({
  name: {
    type: String
  },
  amount: {
    type: String
  }
})

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Recipe Name'
  },
  desc: {
    type: String,
    label: 'Description'
  },
  ingredients: {
    type: [Ingredient]
  },
  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type:'hidden'
    }
  },
  createdBy: {
    type: String,
    label: 'Created By',
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: 'hidden'
    }
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: 'hidden'
    }
  }
});

Recipes.attachSchema( RecipeSchema );


Meteor.methods({
  toggleMenuItem:function(id, currentState){
    Recipes.update(id, {
      $set: {
        inMenu: !currentState
      }
    })
  },
  deleteRecipe: function(id) {
    Recipes.remove(id);
  }
});
