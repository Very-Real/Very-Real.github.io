const websiteLink = document.getElementById("link");

websiteLink.addEventListener("hover", (start = new Date()) => {
    alert("here");
    if((start.getSeconds() + 5) % 60 === new Date().getSeconds())
    {
        alert("You did the right thing!!!!");
    }
});