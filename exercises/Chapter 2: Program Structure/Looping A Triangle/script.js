const body = document.body;
for (let i = "#"; i.length < 8; i += "#") {
  const line = document.createElement("tr");
  line.textContent = i;
  body.appendChild(line);
}
