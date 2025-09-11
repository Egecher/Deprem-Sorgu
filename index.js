const axios = require('axios');
// şuan
const now = new Date();
// yıl
let endYear = now.getFullYear();
let startYear = endYear;
// ay
let startMonth = now.getMonth();
let endMonth = startMonth + 1;
// gün
let startDate = now.getDate();
let endDate = startDate;
// saat
let startHours = now.getHours();
let endHours = startHours;
// dakika
let startMinutes = now.getMinutes();
let endMinutes = startMinutes;
// saniye
let startSeconds = now.getSeconds();
let endSeconds = startSeconds;

const depremSorguAraligi = `https://deprem.afad.gov.tr/apiv2/event/filter?start=${startYear}-${startMonth}-${startDate} ${startHours}:${startMinutes}:${startSeconds}&end=${endYear}-${endMonth}-${endDate} ${endHours}:${endMinutes}:${endSeconds}&orderby=magnitude&limit=1`;
console.log(depremSorguAraligi)
depremSorgu(depremSorguAraligi)

async function depremSorgu(params) {
    await axios.get(params)
    .then(response => {
        const data = response.data;
        console.log(data);
    })
    .catch(error => {
        console.error('Deprem sorgu istek hatası: ', error);
    });
}