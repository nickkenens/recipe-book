
// template-specific data subscriptions
// this.autorun scopes to
Template.recipes.onCreated(function() {
	this.autorun(() => {
			this.subscribe('recipes');
	})
});

Template.recipes.helpers({

	recipes: () => {
		return Recipes.find();
	}

});

Template.recipe.events({
	'click .btn-add': function(event) {
		Meteor.call('toggleMenuItem', this.id, this.inMenu);
	},
	'click .btn-remove': function(event) {
		Meteor.call('toggleMenuItem', this.id, this.inMenu);
	}
})
