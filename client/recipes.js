
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
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .btn-remove': function(event) {
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash': function() {
		Meteor.call('deleteRecipe', this._id)
	},
	'click .fa-pencil': function() {
		Session.set('editMode', !Session.get('editMode'));
	}
})
