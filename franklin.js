document.addEventListener('keydown', logKey);

function logKey(e) {
    let franklin = document.getElementById('franklin');
    if(e.code =="ArrowLeft" && franklin.style.left != "0px") {
        franklin.style.left = parseInt(franklin.style.left) + (-100) + 'px';
    } else if (e.code == "ArrowRight" && franklin.style.left != "1100px") {
        franklin.style.left = parseInt(franklin.style.left) + 100 + 'px';
    } else if (e.code == "ArrowUp" && franklin.style.top != "0px") {
        franklin.style.top = parseInt(franklin.style.top) + (-100) + 'px';
    } else if (e.code == "ArrowDown" && franklin.style.top != "400px") {
        franklin.style.top = parseInt(franklin.style.top) + 100 + 'px';
    }
}
