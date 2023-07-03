import moment from 'moment';

interface Comic {
    "month": number,
    "num": number,
    "link": string,
    "year": number,
    "news": string,
    "safe_title": string,
    "transcript": string,
    "alt": string,
    "img": string,
    "title": string,
    "day": number
}


async function fetchID(email : string) : Promise<string> {
    const params : URLSearchParams = new URLSearchParams();
    if (email) {
        params.append('email', email);
    }
    const response : Response = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString());
    return await response.json();
}

async function fetchImage(id : string) : Promise<Comic> {
    const params = new URLSearchParams();
    if (id) {
        params.append('id', id);
    }
    const response : Response = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString());
    return await response.json();
}

window.onload = async function () {
    const title = document.getElementById('request-title') as HTMLHeadingElement;
    const image = document.getElementById('request-image') as HTMLImageElement;
    const date_element = document.getElementById('request-date') as HTMLHeadingElement;
    const time_ago_element = document.getElementById('request-time-ago') as HTMLHeadingElement;


    const id = await fetchID("mi.kalinin@innopolis.university");
    const data = await fetchImage(id);

    const date = new Date(Date.UTC(data.year, data.month, data.day)); 
    image.src = data.img;
    image.alt = data.alt;
    date_element.textContent = "Date: " + date.toLocaleDateString();
    time_ago_element.textContent = "The comic was released " + moment(`${data.year}-${data.month}-${data.day}`).fromNow();

    title.textContent = "Title: " + data.safe_title;
    document.title = data.safe_title;
};
