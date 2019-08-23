const userController = function () {

    const getRegister = function (context) {
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/auth/register.hbs')
        })
    };

    const getLogin = function (context) {
        context.loadPartials({
            header: "../views/common/header.hbs",
            footer: "../views/common/footer.hbs"
        }).then(function () {
            this.partial('../views/auth/login.hbs')
        })
    };

    const postRegister = function (context) {
        const payload = {
            username: context.params.username,
            password: context.params.password,
            productsBought: 0
        }

        if (payload.username && payload.password) {

            if(helper.passwordCheck(context.params)) {
                requester.post("", "user", "Basic", payload)
                    .then(helper.handler)
                    .then((data) => {
                        sessionStorage.setItem("username", data.username);
                        sessionStorage.setItem("authtoken", data._kmd.authtoken);
                        sessionStorage.setItem("userId", data._id);
        
                        context.redirect("#/home");
                    });
            } else {
                window.alert("RePassword doesn't match the password");
            }

        } else {
            window.alert("Username and password must not be empty");
        }

    };

    const postLogin = function (context) {

        const payload = {
            username: context.params.username,
            password: context.params.password,
        }

        requester.post("login", "user", "Basic", payload)
            .then(helper.handler)
            .then((data) => {
                sessionStorage.setItem("username", data.username)
                sessionStorage.setItem("authtoken", data._kmd.authtoken);
                sessionStorage.setItem("userId", data._id);

                context.redirect("#/home");
            })
    };

    const logout = function (context) {

        requester.post("_logout", "user", "Kinvey")
            .then(helper.handler)
            .then(() => {
                sessionStorage.clear();

                context.redirect("#/home");
            })
    };

    const getUserInfo = function (context) {
        helper.addHeaderInfo(context);
        let userId = sessionStorage.getItem("userId");

        requester.get(userId, "user", "Kinvey")
            .then(helper.handler)
            .then(data => {
                context.userInfo = data;

                context.loadPartials({
                    header: "../views/common/header.hbs",
                    footer: "../views/common/footer.hbs"
                }).then(function () {
                    this.partial('../views/user/user.hbs')
                })
            })

    };

    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        logout,
        getUserInfo
    }
}();