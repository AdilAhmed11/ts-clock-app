function formatTimeUnit(unit) {
    return unit < 10 ? '0' + unit : String(unit);
}
function getCurrentTime() {
    var now = new Date();
    // NOTE: you forgot parentheses here — see below!
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var formattedHours = formatTimeUnit(hours);
    var formattedMinutes = formatTimeUnit(minutes);
    var formattedSeconds = formatTimeUnit(seconds);
    return "".concat(formattedHours, ":").concat(formattedMinutes, ":").concat(formattedSeconds);
}
console.log(getCurrentTime());
