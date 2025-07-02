async function GetAPIData() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (response.ok) {
            const data = await response.json();
            //document.getElementById("dogimg").src = data["message"];
            let imgel = document.createElement("img");
            imgel.src =  data["message"];
            document.getElementsByTagName("body")[0].appendChild(imgel);
        } else {
            console.error(`HTTP error ${response.status}`);
        }
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}

for (let i = 0; i < 10; i++)
    GetAPIData();