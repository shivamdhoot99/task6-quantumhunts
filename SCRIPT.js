own();

var vid = document.getElementById('v1');
var vid2 = document.getElementById('v2');



var replay = document.getElementById('replay');
replay.addEventListener('click', byclick);

function byclick() {
    console.log('yes')
    var vid = document.getElementById('v1');
    vid.pause();
    vid.currentTime = 0;
    vid.load();
    vid.addEventListener("ended", onChange, false);

    function onChange(event) {
        console.log("onChange");
        var vid = document.getElementById('v1');
        vid.pause();
        vid.style.display = 'none';
        vid.removeEventListener("ended", onChange, false);

        var vid2 = document.getElementById('v2');
        vid2.style.display = 'block';
        vid2.addEventListener("ended", onChange2, false);
        vid2.load();
    }

    function onChange2(event) {
        console.log("onChange2");
        var vid2 = document.getElementById('v2');
        vid2.style.display = 'none';

        var vid = document.getElementById('v1');
        vid.style.display = 'block';
        vid.play();
    }

    setTimeout(onChange, 10000);
}



function own() {
    console.log('yes')
    var vid = document.getElementById('v1');
    vid.addEventListener("ended", onChange, false);

    function onChange(event) {
        console.log("onChange");
        var vid = document.getElementById('v1');
        vid.pause();
        vid.style.display = 'none';
        vid.removeEventListener("ended", onChange, false);

        var vid2 = document.getElementById('v2');
        vid2.style.display = 'block';
        vid2.addEventListener("ended", onChange2, false);
        vid2.load();
    }

    function onChange2(event) {
        console.log("onChange2");
        var vid2 = document.getElementById('v2');
        vid2.style.display = 'none';

        var vid = document.getElementById('v1');
        vid.style.display = 'block';
        vid.play();
    }

    setTimeout(onChange, 10000);
}