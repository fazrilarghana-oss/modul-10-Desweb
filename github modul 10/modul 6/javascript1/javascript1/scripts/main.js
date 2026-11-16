let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");

    if (mySrc === "images/gambar1.jpg") {
        myImage.setAttribute("src", "images/gambar2.jpg");
    } else {
        myImage.setAttribute("src", "images/gambar1.jpg");
    }
};