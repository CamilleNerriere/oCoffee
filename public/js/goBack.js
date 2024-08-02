const goBack = {
    init() {
        const goBackLink = document.getElementById('go__back');
        if (goBackLink) {
            goBackLink.addEventListener('click', (event) => {
                event.preventDefault();
                history.back();
            });
        }
    },
};