Template.SingleRecipe.onCreated(function() {
	this.autorun(() => {
		var id = FlowRouter.getParam('recipeId');
		this.subscribe('recipe', id);
	})
});

Template.SingleRecipe.helpers({
	recipe: () => {
		var id = FlowRouter.getParam('recipeId');
		return Recipes.findOne(id);
	}
});
