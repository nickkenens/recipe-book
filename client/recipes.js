
// template-specific data subscriptions
// this.autorun scopes to
Template.recipes.onCreated(function() {
	this.autorun(() => {
			this.subscribe('recipes');
	})
});

Template.recipes.helpers({
	isOpen: function(){
		return Session.get('newRecipeOpen');
	},
	recipes: () => {
		return Recipes.find();
	}
});

Template.recipes.events({
	'click .btn-openRecipe': function() {
		Session.set('newRecipeOpen', true)
	}
});


Template.newRecipe.events({ 
	'click .fa-crosshairs': function() {
		Session.set('newRecipeOpen', false)
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
	'click .fa-pencil': function(event, template) {
		template.editMode.set(!template.editMode.get());
	}
})

Template.recipe.helpers({
	editMode: function(){
		return Template.instance().editMode.get();
	}
});

Template.recipe.onCreated(function() {
	this.editMode = new ReactiveVar(false);
})
