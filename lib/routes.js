FlowRouter.route('/', {
  name:'home',
  action() {
    GAnalytics.pageView();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    GAnalytics.pageView();
    BlazeLayout.render('MainLayout', {main: 'recipes'});
  }
});

FlowRouter.route('/grocery-list', {
  name: 'grocery-list',
  action() {
    GAnalytics.pageView();
    BlazeLayout.render('MainLayout', {main: 'grocery-list'});
  }
});

FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    GAnalytics.pageView();
    BlazeLayout.render('MainLayout', {main: 'menu'});
  }
});
