document.addEventListener("DOMContentLoaded", function () {


    /*
        Плавная прокрутка по якорям
    */

    const links = document.querySelectorAll('a[href^="#"]');


    links.forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(
                this.getAttribute("href")
            );


            if (target) {

                e.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });





    /*
        Автоматическая подсветка текущей страницы
    */


    const currentPage =
        window.location.pathname.split("/").pop();


    const menuLinks =
        document.querySelectorAll("nav a");


    menuLinks.forEach(link => {


        const linkPage =
            link.getAttribute("href");


        if (linkPage === currentPage) {

            link.classList.add("active");

        }


    });





    /*
        Проверка ссылок-заглушек
    */


    const placeholders =
        document.querySelectorAll(
            ".button"
        );


    placeholders.forEach(button => {


        if (button.getAttribute("href") === "#") {


            button.addEventListener(
                "click",
                function(e){


                    e.preventDefault();


                    alert(
                        "Материал будет добавлен позже."
                    );


                }
            );


        }


    });



});