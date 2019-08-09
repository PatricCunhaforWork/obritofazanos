function isBirthday() {
    var today = new Date();
    console.log(today);
    if(today.getMonth() === '7' && today.getDate() === '26') {
        return true;
    }
    return false;
}

function setHeader() {
    var header = $('#bday-header');
    if ( isBirthday() ) {
        header.text('Não, hoje não.');
    } else {
        header.text('O Brito faz anos! Parabéns!');
    }
}

function primaveras() {
    var current_date, epocDate;

    current_date = new Date();

    var epocDate = new Date(new Date().getTime() / 1000);
    var res = Math.abs(current_date - epocDate) / 1000;
    var elapsed = Math.floor(res / 86400);

    // get total days between two dates
    return elapsed - 18000;
}

function setPrimaveras () {
    $('#bday-counter').text('E já lá vão ' + primaveras() + ' primaveras!');
}

var confettiSettings = { target: 'confetti-holder'};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

$(window).resize(function() {
    confetti.clear();
    confettiSettings = { target: 'confetti-holder' };
    confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
});

setHeader();

setPrimaveras();