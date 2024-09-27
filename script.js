document.getElementById('trollButton').onclick = function() {
    const body = document.body;
    body.classList.add('troll');
    
    setTimeout(() => {
        body.classList.remove('troll');
        alert("Bạn đã bị troll!");
    }, 3000);
};
