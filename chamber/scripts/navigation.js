const menuButton =
    document.querySelector("#menu");

const navigation =
    document.querySelector(".navigation");


if (menuButton && navigation) {

    menuButton.addEventListener(
        "click",
        () => {

            navigation.classList.toggle("open");

            menuButton.classList.toggle("open");


            const menuIsOpen =
                navigation.classList.contains("open");


            menuButton.setAttribute(
                "aria-expanded",
                menuIsOpen
            );

        }
    );

}