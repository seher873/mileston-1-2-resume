var Btn = document.getElementById("btn");
var skills = document.getElementById("skills");
Btn === null || Btn === void 0 ? void 0 : Btn.addEventListener("click", function () {
    if ((skills === null || skills === void 0 ? void 0 : skills.style.display) === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
