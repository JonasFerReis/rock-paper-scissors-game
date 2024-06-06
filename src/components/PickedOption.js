import gameOption from "./GameButton";
import createElement from "../utils/createElement";
import { options } from "../utils/options";
import calculateResult from "../utils/calculateResult";

export default function PickedOption(optionSelected, values, onClickPlayAgain) {
  const pickedOptionContainer = createElement("div", "pickedOption");
  const resultContainer = createElement("div", "resultContainer");
  const yourPick = createElement("div", "pickedOption__youPick");
  const housePick = createElement("div", "pickedOption__housePick");
  const yourPickLabel = createElement("span", "pickedOption__youPickLabel");
  const housePickLabel = createElement("span", "pickedOption__housePickLabel");
  const emptyPick = createElement("div", "pickedOption__empty");

  let color = options[optionSelected].color;
  let icon = options[optionSelected].icon;

  pickedOptionContainer.setAttribute("data-testid", "pickedOption");

  yourPickLabel.innerText = "YOU PICKED";
  housePickLabel.innerText = "THE HOUSE PICKED";

  yourPick.appendChild(yourPickLabel);
  housePick.appendChild(housePickLabel);

  yourPick.appendChild(gameOption(color, icon));
  housePick.appendChild(emptyPick);

  pickedOptionContainer.appendChild(yourPick);
  pickedOptionContainer.appendChild(resultContainer);
  pickedOptionContainer.appendChild(housePick);

  setTimeout(() => {
    housePick.removeChild(emptyPick);

    const randomNumber = Math.floor(Math.random() * Object.keys(values).length);
    const valueSelected = values[randomNumber];

    let result = calculateResult(optionSelected, valueSelected);

    if (result === "YOU WIN") {
      let currentScore = Number(localStorage.getItem("gameScore") || 0);
      currentScore++;

      localStorage.setItem("gameScore", currentScore);
    }

    housePick.appendChild(
      gameOption(options[valueSelected].color, options[valueSelected].icon)
    );

    const resultLabel = createElement("span", "resultContainer__resultLabel");
    const playAgainButton = createElement(
      "button",
      "resultContainer__playAgainButton"
    );

    resultLabel.innerHTML = result;
    playAgainButton.innerHTML = "PLAY AGAIN";

    playAgainButton.addEventListener("click", onClickPlayAgain);

    resultContainer.appendChild(resultLabel);
    resultContainer.appendChild(playAgainButton);
  }, 1000);

  return pickedOptionContainer;
}