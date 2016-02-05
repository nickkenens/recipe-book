Meteor.publish("recipes", function(){
  return Recipes.find({createdBy: this.userId});
});

Meteor.publish("recipe", function(id){
  console.log(id);
  return Recipes.find({_id: id});
});
