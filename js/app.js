const player = [];
function myFunction(element) {
  const newPlayer = element.parentNode.children[0].innerText;
  player.push(newPlayer);

  const ul = document.getElementById("count-player");
  ul.textContent = "";
  for (let i = 0; i < player.length; i++) {
    if (i <= 4) {
      const li = document.createElement("li");
      li.innerText = `${i + 1} ${player[i]}`;
      ul.appendChild(li);
      element.setAttribute("disabled", true);
    } else {
      element.removeAttribute("disabled");
      alert("already select 5 player you can not select more player");
    }
  }
}
