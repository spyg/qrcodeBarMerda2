var resultDiv;
var urlfromqr;

document.addEventListener("deviceready", init, false);
function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
   // resultDiv = document.querySelector("#loadpage");
}

function startScan() {

    cordova.plugins.barcodeScanner.scan(
        function (result) {
            var str = "Connect to bar merda"
            urlfromqr = result.text;
            var s = "Result: " + urlfromqr + "<br/>";
            //var s = "Result: " + result.text + "<br/>" +
            //"Format: " + result.format + "<br/>" +
            //"Cancelled: " + result.cancelled;
            var res = str.link(result.txt)
            //resultDiv.innerHTML = res
        document.getElementById("loadpage").innerHTML = "Gooooo";
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );

}
function onLoad() {
document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {

var ref = window.open(urlfromqr, '_blank', 'location=no');
/*
ref.addEventListener('loadstart', function(event) { alert('start: ' + event.url); });
ref.addEventListener('loadstop', function(event) { alert('stop: ' + event.url); });
ref.addEventListener('loaderror', function(event) { alert('error: ' + event.message); });
ref.addEventListener('exit', function(event) { alert(event.type); });
*/
}