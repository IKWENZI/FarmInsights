/* Configure signin and signup text */
AccountsTemplates.configure({
  enablePasswordChange: true,
  texts: {
    title: {
      signIn: "Login here",
      signUp: "Register your account",
    }
  }
});

/* Configure for login expiration */
Accounts.config({
   loginExpirationInDays: 1
});

//

/* Configuration for adding username */
var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  pwd
]);

/* Configure routes for useraccounts package */
AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/login',
  template: 'login',
  layoutTemplate: 'blankLayout',
  redirect: function(){
    if (Meteor.user()){
      Router.go('/dashboard');
    }
  },
  onAfterAction: function(){
    if(this.ready()) {
      SEO.set({
        title: "FarmInsights | Provide farmers with insights about their farm"
      });
    }
  }
});

AccountsTemplates.configureRoute('signUp', {
  name: 'singup',
  path: '/register',
  template: 'register',
  layoutTemplate: 'blankLayout',
  redirect: function(){
    if (Meteor.user()){
      Router.go('/dashboard');
    }
  },
  onAfterAction: function(){
    if(this.ready()) {
      SEO.set({
        title: "FarmInsights | Provide farmers with insights about their farm"
      });
    }
  }
});