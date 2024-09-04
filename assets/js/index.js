

function CustomTimer() {
    let diEnd = document.getElementById('diEnd').dataset.date
  
    var countDownDate = diEnd
    
      
    var x = setInterval(function () {
        

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        document.getElementById("timer")
            .innerHTML =
            '<div>' + days + '<span>Days</span></div>' +
            '<div>' + hours + '<span>Hours</span></div>' +
            '<div>' + minutes + '<span>Minutes</span></div>' +
            '<div>' + seconds + '<span>Seconds</span></div>';


        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer")
                .innerHTML =
                '<div>' + 'Time Expired' + '<span></span></div>';
        }
    }, 1000);

}