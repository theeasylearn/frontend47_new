function getLastDayOfMonth(year, month) {
    // month is 0-indexed (0 = January, 11 = December)
    return new Date(year, month, 0).getDate();
}
// console.log(getLastDayOfMonth(2025,2));
function getDayOfWeek(year, month, day) {
    // month is 0-indexed (0 = January, 11 = December)
    const date = new Date(year, month - 1, day);
    return date.getDay(); // Returns 0-6 (0 = Sunday, 6 = Saturday)
}
// console.log(getDayOfWeek(2025,7,1));
let year = parseInt(prompt("Enter Year", 2025));
let month = parseInt(prompt("Enter month", 1));
let lastDay = getLastDayOfMonth(year, month);
let firstDay = getDayOfWeek(year, month, 1);

let i = 1;
let count = 1;
let emptyCount = 0;
console.log(firstDay);
while (i <= 6) {
    let td = ``;
    for (let j = 1; j <= 7 && count <= lastDay; j++, emptyCount++) {
        if (emptyCount < firstDay) {
            td += `<td></td>`;
        }
        else
            td += `<td>${count++}</td>`;
    }
    let row = ` <tr>${td}</tr>`;
    document.getElementById('calendar').innerHTML += row;
    i++;
}    