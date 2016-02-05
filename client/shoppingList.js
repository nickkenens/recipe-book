Template.shoppingList.onCreated(function() {
	this.autorun(() => {
		this.subscribe('recipesInMenu');
	})
});

Template.shoppingList.helpers({
	recipesInMenu: function() {
		return Recipes.find();
	}
});
