document.querySelectorAll("nav a[data-section]").forEach(link => {
    link.addEventListener("click", function (e) {
        const url = this.getAttribute("href");
        const isExternal = url.startsWith("#");

        if (!isExternal) {
            e.preventDefault();
            const main = document.getElementById("contenido");

            main.classList.add("fade-out");

            setTimeout(() => {
                fetch(url)
                .then(res => res.text())
                .then(html => {
                    main.innerHTML = html;
                    main.classList.remove("fade-out");
                    main.classList.add("fade-in");

                    setTimeout(() => {
                        main.classList.remove("fade-in");
                    }, 300);
                });
            }, 300);
        }
    });
});
