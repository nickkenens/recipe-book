Template.newRecipe.helpers({
	open: function(){
		return Session.get('newRecipeOpen');
	},
	toggleOpen: function() {
		Session.set('newRecipeOpen', !Session.get('newRecipeOpen'));
	}
});
