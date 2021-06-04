function closeAndOpenMenuMobile() {
    const blur = document.getElementById('blurredElement');

    blur.addEventListener("click", function() { 
        const menu = document.querySelector('.banner-r-b-ul');
        menu.style.display = 'none';
        blur.style.display = 'none';
    })
    const menuButton = document.getElementById('open-menu-mobile');

    menuButton.addEventListener("click", function() { 
        const menu = document.querySelector('.banner-r-b-ul');
        menu.style.display = 'block';
        blur.style.display = 'block';
    })

}
closeAndOpenMenuMobile();
