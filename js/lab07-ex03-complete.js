/* add code after this comment */

// step 2
document.getElementById("thumb-list").style.border = "3px dashed royalblue";

// step 4
const p_content = document.getElementsByTagName("p")[0].textContent;
document.querySelector("#msg").value = p_content;

// step 6
const images = document.querySelectorAll("ul img");
for (let img of images) {
    img.style.boxShadow = "7px 6px 21px 2px rgba(128,0,128,0.45)";
}