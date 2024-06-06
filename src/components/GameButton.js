import createElement from "../utils/createElement";

export default function GameButton(
  gradient = "",
  icon = "",
  onClick = () => {}
) {
  const gameButton = createElement("div", "gameButton");
  const gameButtonIcon = createElement("div", "gameButton__iconCircle");
  const iconImg = createElement("img", "gameButton__iconImg");

  let shadowColor = gradient.match(/hsl[(]\d+, \d+%, \d+%[)]/i)?.[0];
  shadowColor = shadowColor.split("%");
  shadowColor[1] = shadowColor[1].replace(", ", "");
  shadowColor[1] = `, ${shadowColor[1] - 10}`;
  shadowColor = shadowColor.join("%");

  gameButton.setAttribute("data-testid", "gameButton");

  iconImg.src = icon;
  gameButton.style.background = gradient;
  gameButton.style.boxShadow = `0px 4px 0px ${shadowColor}`;

  gameButton.addEventListener("mousedown", () => {
    gameButton.style.boxShadow = "none";
  });
  document.body.addEventListener("mouseup", () => {
    gameButton.style.boxShadow = `0px 4px 0px ${shadowColor}`;
  });
  gameButton.addEventListener("click", onClick);

  gameButtonIcon.appendChild(iconImg);
  gameButton.appendChild(gameButtonIcon);

  return gameButton;
}
