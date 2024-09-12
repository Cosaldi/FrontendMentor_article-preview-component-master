const shareContainer = document.querySelector('.card__share');
const shareButton = document.querySelector('.card__button');
const shareButtonIcon = shareButton.querySelector('img');

shareButton.addEventListener('click', () => {
    console.log("okey");
    const iconSrc = shareButtonIcon.getAttribute('src');

    if (iconSrc === 'images/icon-share.svg') {
        shareButtonIcon.setAttribute("src", "images/icon-share-dark.svg");
    } else {
        shareButtonIcon.setAttribute("src", "images/icon-share.svg");
        
    }

    if (!shareContainer.classList.contains('show')) {
        shareContainer.classList.add('show');
        shareButton.classList.add('open');
        shareButton.classList.remove('close');
    } else {
        shareContainer.classList.remove('show');
        shareButton.classList.remove('open');
        shareButton.classList.add('close');
    }
});