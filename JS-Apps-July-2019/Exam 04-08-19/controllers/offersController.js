const offersController = function () {

    const getDashboard = function (context) {
        helper.addHeaderInfo(context)

        requester.get("offers", "appdata", "Kinvey")
            .then(helper.handler)
            .then(data => {
                context.offers = data;

                for (const offer of context.offers) {
                    if (offer._acl.creator === sessionStorage.getItem("userId")) {
                        offer.isCreator = true;
                    } else {
                        offer.isCreator = false;
                    }
                }

                context.loadPartials({
                    header: "../views/common/header.hbs",
                    footer: "../views/common/footer.hbs"
                }).then(function () {
                    this.partial("../views/offers/dashboard.hbs");
                });
            })

    };

    const getCreateOffer = function (context) {
        helper.addHeaderInfo(context);

        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial("../views/offers/create.hbs");
        });
    };

    const postCreateOffer = function (context) {
        helper.addHeaderInfo(context);

        if (context.params.product
            && context.params.price
            && context.params.description
            && context.params.pictureUrl) {

            let payload = {
                product: context.params.product,
                price: context.params.price,
                description: context.params.description,
                imageUrl: context.params.pictureUrl,
            }

            requester.post("offers", "appdata", "Kinvey", payload)
                .then(helper.handler)
                .then(data => {
                    context.redirect("#/dashboard");
                });
        };
    };

    const getDetailsOffer = function (context) {
        helper.addHeaderInfo(context);
        let id = context.params.id;

        requester.get(`offers/${id}`, "appdata", "Kinvey")
            .then(helper.handler)
            .then(offer => {
                context.offer = offer;

                context.loadPartials({
                    header: "../views/common/header.hbs",
                    footer: "../views/common/footer.hbs"
                }).then(function () {
                    this.partial("../views/offers/details.hbs");
                });
            })
    };

    const getDeleteOffer = function (context) {
        helper.addHeaderInfo(context);
        let id = context.params.id;

        requester.get(`offers/${id}`, "appdata", "Kinvey")
            .then(helper.handler)
            .then(offer => {
                context.offer = offer;

                context.loadPartials({
                    header: "../views/common/header.hbs",
                    footer: "../views/common/footer.hbs"
                }).then(function () {
                    this.partial("../views/offers/delete.hbs");
                });
            });
    };

    const postDeleteOffer = function (context) {
        helper.addHeaderInfo(context);
        let id = context.params.id;

        requester.del(`offers/${id}`, "appdata", "Kinvey")
            .then(helper.handler)
            .then(data => {
                context.redirect("#/dashboard");
            });
    };

    const getEditOffer = function (context) {
        helper.addHeaderInfo(context);
        let id = context.params.id;

        requester.get(`offers/${id}`, "appdata", "Kinvey")
            .then(helper.handler)
            .then(offer => {
                context.offer = offer;

                context.loadPartials({
                    header: "../views/common/header.hbs",
                    footer: "../views/common/footer.hbs"
                }).then(function () {
                    this.partial("../views/offers/edit.hbs");
                });
            })
    };

    const postEditOffer = function (context) {
        helper.addHeaderInfo(context);
        let id = context.params.id;

        if (context.params.product
            && context.params.price
            && context.params.description
            && context.params.pictureUrl) {
            let payload = {
                product: context.params.product,
                description: context.params.description,
                price: context.params.price,
                imageUrl: context.params.pictureUrl
            }


            requester.put(`offers/${id}`, "appdata", "Kinvey", payload)
                .then(helper.handler)
                .then(data => {
                    context.redirect("#/dashboard");
                });
        }
    };

    const postBuyProduct = function (context) {
        helper.addHeaderInfo(context);
        let userId = sessionStorage.getItem("userId");

        requester.get(`${userId}`, "user", "Kinvey")
            .then(helper.handler)
            .then(user => {
                user.productsBought++;
                requester.put(`${userId}`, "user", "Kinvey", user)
                    .then(helper.handler)
                    .then(data => {
                        context.redirect("#/dashboard");
                    })
            })
    };

    return {
        getCreateOffer,
        postCreateOffer,
        getDashboard,
        getDetailsOffer,
        getDeleteOffer,
        postDeleteOffer,
        getEditOffer,
        postEditOffer,
        postBuyProduct,
    }
}();