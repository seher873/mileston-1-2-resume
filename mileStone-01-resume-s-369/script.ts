const Btn = document.getElementById("btn");
const skills = document.getElementById("skills");

Btn?.addEventListener("click", () => {
  if (skills?.style.display === "none") {
    skills.style.display = "block";
  } else {
    skills!.style.display = "none";
  }
});
