const socialpush = document.getElementById("social-push")
const getStoredDismiss = () => localStorage.getItem('social-dismissed')
const setStoredDismiss = value => localStorage.setItem('social-dismissed', value)


window.addEventListener('DOMContentLoaded', () => {

    if(getStoredDismiss() != "true") {
        socialpush.style.opacity = 1
    } else {
        socialpush.style.display = "none"
    }

});

function dismissSocial() {
    setStoredDismiss("true")
    socialpush.style.opacity = 0
    setTimeout(() => {
        socialpush.style.display = "none"
    }, 300)
}