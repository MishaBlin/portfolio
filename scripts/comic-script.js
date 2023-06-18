async function fetchID(email) {
    const params = new URLSearchParams();
    if (email) {
        params.append('email', email);
    }
    const response = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString());
    return await response.json();
}

async function fetchImage(id) {
    const params = new URLSearchParams();
    if (id) {
        params.append('id', id);
    }
    const response = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString());
    return await response.json();
}

window.onload = async function () {
    const title = document.getElementById('request-title');
    const image = document.getElementById('request-image');
    const date_element = document.getElementById('request-date');

    const id = await fetchID("mi.kalinin@innopolis.university");
    const data = await fetchImage(id);
    console.log(data);
    const { img, alt, safe_title, day, year, month } = data;
    const date = new Date(Date.UTC(year, month, day)); 
    image.src = img;
    image.alt = alt;
    date_element.textContent = "Date: " + date.toLocaleDateString();
    title.textContent = "Title: " + safe_title;
    document.title = safe_title;
};