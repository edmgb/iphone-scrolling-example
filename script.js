(function () {
    console.log("hello");

    const iconFake = document.querySelector(".fake-icon");
    const navFake = document.querySelector(".fake-nav-overlay");

    function handleNavigation() {
        console.log("click");
        document.body.classList.toggle('prevent-scroll')
        iconFake.classList.toggle('active')
        navFake.classList.toggle('active')
    }

    iconFake.addEventListener("click", handleNavigation);

})();