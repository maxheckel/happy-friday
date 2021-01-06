var d = new Date();
var n = d.getDay();
var x = "Monday"
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
days.splice(n-1, 1)
var day = days[Math.floor(Math.random() * days.length)]
document.getElementById("day").innerHTML = day