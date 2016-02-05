FlowRouter.route('/', {
  name:'home',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'recipes'});
  }
});

FlowRouter.route('/grocery-list', {
  name: 'grocery-list',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'grocery-list'});
  }
});

FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'menu'});
  }
});
