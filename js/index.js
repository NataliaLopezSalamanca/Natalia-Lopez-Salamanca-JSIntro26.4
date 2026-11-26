const today = new Date().getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = `&copy; ${today} Natalia López Salamanca`;
footer.appendChild(copyright);

const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "React", "Node.js"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}