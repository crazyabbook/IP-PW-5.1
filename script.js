function format(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}
function tic() {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    const diff = endOfDay - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.textContent = `${format(hours)} : ${format(minutes)} : ${format(seconds)}`;
    }
}
tic();
setInterval(tic, 1000);