var time = {
    "hour" : 8,
    "minute" : 20,
    "period" : "AM"
};

if (time.minute > 30) {
    time.hour++;
    if (time.period === "AM") {
        console.log("It's almost", time.hour, "in the morning");
    }
    if (time.period === "PM") {
        console.log("It's almost", time.hour, "in the evening");
    }
}

if (time.minute <= 30) {
    if (time.period === "AM") {
        console.log("It's just after", time.hour, "in the morning");
    }
    if (time.period === "PM") {
        console.log("It's just after", time.hour, "in the evening");
    }
}