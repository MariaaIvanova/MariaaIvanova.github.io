async function GetAPIData() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (response.ok) {
            const data = await response.json();
            document.getElementById("dogimg").src = data["message"];
        } else {
            console.error(`HTTP error ${response.status}`);
        }
    } catch (error) {
        console.error("Fetch failed:", error);
    }
}

GetAPIData();