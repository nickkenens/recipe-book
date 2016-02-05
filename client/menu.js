Template.menu.onCreated(function() {
	this.autorun(() => {
		this.subscribe('recipesInMenu');
	})
});

Template.menu.helpers({
	recipesInMenu: function() {
		return Recipes.find();
	}
});
