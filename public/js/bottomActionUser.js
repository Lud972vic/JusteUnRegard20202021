import 'js/axios.min.js';

function onClickBtnLike(event) {
    event.preventDefault();
    const url = this.href;
    const spanCount = this.querySelector('span.js-likes');
    const icone = this.querySelector('i');

    axios.get(url).then(function (response) {
        spanCount.textContent = response.data.likes;

        if (icone.classList.contains('fas')) {
            icone.classList.replace('fas', 'far');
        } else {
            icone.classList.replace('far', 'fas');
        }
    }).catch(function (error) {
        {
            window.alert("Connectez-vous pour liker :-)");
        }
    });
};

document.querySelectorAll('a.js-like').forEach(function (link) {
    link.addEventListener('click', onClickBtnLike);
});