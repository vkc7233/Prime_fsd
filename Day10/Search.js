const getData = (text) => {
    fetch(`https://youtube138.p.rapidapi.com/search/?q=${text}&hl=en&gl=US`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "youtube138.p.rapidapi.com",
            "x-rapidapi-key": "7b60f0da05msh4994661cef1a330p1eae88jsn2a2c5fe21bba",
        },
    })
    .then(response => response.json())
    .then(data => showVideos(data))
    .catch(error => console.error("Error fetching data:", error));
};

const showVideos = (data) => {
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = "";
    data.contents.forEach(video => {
        const videoElement = document.createElement("div");
        videoElement.innerHTML = `
            <img src='${video.video.thumbnails[0].url}' width="100%">
            <h4>${video.video.title}</h4>
            <p>By ${video.video.author.title}</p>
        `;
        videoContainer.appendChild(videoElement);
    });
};

const handleSearch = (e) => {
    if (e.target.value.length > 2) {
        getData(e.target.value);
    }
};