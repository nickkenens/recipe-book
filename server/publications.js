Meteor.publish("recipes", function(){
  return Recipes.find({createdBy: this.userId});
});

Meteor.publish("recipe", function(recipeId){
  return Recipes.find(recipeId, {createdBy: this.userId});
});
