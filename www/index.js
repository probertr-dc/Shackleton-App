function loadPage(page) {
    document.getElementById('menu').close();
    document.getElementById('navigator').bringPageTop(page, {
        animation: 'fade'
    });
};