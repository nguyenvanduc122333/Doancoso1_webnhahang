$('.owls-carousel').owlCarousel({
    stagePadding: 0,
    loop: true,
    margin: 10,
    nav: true,
    items: 4,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive: {
        0: {
            items: 1
        },

        480: {
            items: 2
        }

    }
});