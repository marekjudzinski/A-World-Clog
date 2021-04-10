const cities = [
    {
        city:"Warsaw",
        timeZone:"Europe/Warsaw",
    },
    {
        city: "New Delhi",
        timeZone: "Asia/Dili"
    },
    {
        city: "Melbourne",
        timeZone: "Australia/Melbourne"
    },
    {
        city: "Helsinki",
        timeZone: "Europe/Helsinki"
    },
    {
        city: "St Petersburg",
        timeZone: "Europe/Moscow"
    },
];

option = {day:"2-digit",month:"short",year:"numeric",hour12:false,hour:"numeric",minute:"2-digit"};
const timeContainer = document.querySelector('#table');

function theClockItself(){
    timeContainer.innerHTML='';
    let now = new Date();
    for(let i = 0; i < cities.length; i++){
        option.timeZone = cities[i].timeZone;

        let str = now.toLocaleString('en',option);
        let splice = str.split(',')
        let month = splice[0].split(' ')[0];
        let day = splice[0].split(' ')[1];
        let year = splice[1];

        let DMY_combine = day+' '+month+','+year;
        let time = splice[2];
        let country = cities[i].city;

        const tr = document.createElement('tr');

        tr.innerHTML=`<td>
                  <h3>${country}</h3><br><p>${DMY_combine}</p>
                  </td>
                  <td><p class="time">${time}</p>
                  `
        timeContainer.appendChild(tr);
    }
}

theClockItself();
setInterval(theClockItself,30000);