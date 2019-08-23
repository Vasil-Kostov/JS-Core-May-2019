window.onload = () => {
    Sammy("#root", function () {

        this.use('Handlebars', 'hbs');

        // Home
        this.get('#/home', homeController.getHome);

        // User
        this.get("#/register", userController.getRegister);
        this.get("#/login", userController.getLogin);
        this.get("#/user", userController.getUserInfo);

        this.post("#/register", userController.postRegister);
        this.post("#/login", userController.postLogin);
        this.get("#/logout", userController.logout);

        // Offers
        this.get("#/offers/create", offersController.getCreateOffer);
        this.get("#/dashboard", offersController.getDashboard);
        this.get("#/offers/details/:id", offersController.getDetailsOffer);
        this.get("#/offers/delete/:id", offersController.getDeleteOffer);
        this.get("#/offers/edit/:id", offersController.getEditOffer)

        this.post("#/offers/create", offersController.postCreateOffer);
        this.post("#/offers/delete/:id", offersController.postDeleteOffer);
        this.post("#/offers/edit/:id", offersController.postEditOffer);
        this.get("#/offers/buy", offersController.postBuyProduct)
        
    }).run("#/home")
}