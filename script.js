// Loading
// min.innerHTML = hours.innerHTML = day.innerHTML = month.innerHTML = year.innerHTML = "Fetching"

function updateDateTime() {
  let date = new Date()
  sec.innerHTML = doubleDigit(date.getSeconds())
  if (!isSame(min.innerHTML, date.getMinutes())) min.innerHTML = date.getMinutes()
  if (!isSame(shortHours(hours.innerHTML), date.getHours())) hours.innerHTML = shortHours(date.getHours())
  if (!isSame(day.innerHTML, date.getDate())) day.innerHTML = date.getDate()
  if (!isSame(month.innerHTML, date.getMonth())) month.innerHTML = date.getMonth()
  if (!isSame(year.innerHTML, date.getFullYear())) year.innerHTML = date.getFullYear()
}


function doubleDigit(num) {
  if (num < 10) return "0" + num
  return num
}

function shortHours(hours) {
  if (hours > 12) hours = hours - 12
  return "0" + hours
}

function isSame(oldData, newData) {
  return oldData === newData;
}


// Since setinterval is executed after 1 second initially
updateDateTime()


// Update dateTime after 1 second interval.
setInterval(updateDateTime, 1000);