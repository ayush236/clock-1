// Loading
// min.innerHTML = hours.innerHTML = day.innerHTML = month.innerHTML = year.innerHTML = "Fetching"

let date = new Date()
sec.innerHTML = date.getSeconds()
min.innerHTML = date.getMinutes()
hours.innerHTML = date.getHours()
day.innerHTML = date.getDate()
month.innerHTML = date.getMonth()
year.innerHTML = date.getFullYear()

setInterval(() => {
  let date = new Date()
  sec.innerHTML = date.getSeconds()
  if (!isSame(min.innerHTML, date.getMinutes())) min.innerHTML = date.getMinutes()
  if (!isSame(hours.innerHTML, date.getHours())) hours.innerHTML = date.getHours()
  if (!isSame(day.innerHTML, date.getDate())) day.innerHTML = date.getDate()
  if (!isSame(month.innerHTML, date.getMonth())) month.innerHTML = date.getMonth()
  if (!isSame(year.innerHTML, date.getFullYear())) year.innerHTML = date.getFullYear()
}, 1000);


function isSame(oldData, newData) {
  return oldData === newData;
}