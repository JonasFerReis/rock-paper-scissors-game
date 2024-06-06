export default function Header(text) {
  const headerContainer = document.createElement("div");
  headerContainer.className = "headerContainer";

  const header = document.createElement("header");
  header.className = "header";

  const headerText = document.createElement("h1");
  headerText.className = "header__text";
  headerText.innerHTML = text;

  const headerScore = document.createElement("div");
  headerScore.className = "header__score";

  const scoreLabel = document.createElement("span");
  scoreLabel.className = "header__label";
  scoreLabel.innerHTML = "SCORE";

  const scoreNumber = document.createElement("span");
  scoreNumber.className = "header__number";
  scoreNumber.innerHTML = localStorage.getItem("gameScore") || "0";

  scoreNumber.setAttribute("data-testid", "scoreNumber");

  headerScore.appendChild(scoreLabel);
  headerScore.appendChild(scoreNumber);
  header.appendChild(headerText);
  header.appendChild(headerScore);
  headerContainer.appendChild(header);

  return headerContainer;
}
