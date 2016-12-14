Template.inscription_tpl.events({
    'click #submit_register': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email : email,
            password : password
        });
        Router.go('admin');
    }
});

Template.connexion_tpl.events({
    'click #submit_login': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email : email,
            password : password
        });
        Router.go('admin');
    }
});
