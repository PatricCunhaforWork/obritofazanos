function isBirthday() {
    var today = Date.now;
    if(today.getMonth() === '7' && today.getDate() === '26') {
        return true;
    }
    return false;
}

function setHeader() {
    var header = $('bday-header');
    if ( isBirthday ) {
        header.text('Não, hoje não.');
    } else {
        header.text('O Brito faz anos! Parabéns!');
    }
}