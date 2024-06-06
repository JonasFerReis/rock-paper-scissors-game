import Header from "../components/Header";
import Footer from "../components/Footer";
import GameButton from "../components/GameButton";
import PickedOption from "../components/PickedOption";
import createElement from "../utils/createElement";
import triangleImageUrl from "../assets/images/bg-triangle.svg";
import { options } from "../utils/options";

export default function RockPaperScissors() {
  const mainContainer = createElement("div", "mainContainer");
  const contentContainer = createElement("div", "contentContainer");
  const game = createElement("div", "game");
  const optionsContainer = createElement("div", "game__optionsContainer");
  const gameLine1 = createElement("div", "game__line1");
  const gameLine2 = createElement("div", "game__line2");
  const triangleImg = createElement("img", "game__triangleImg");

  const values = {
    0: "paper",
    1: "rock",
    2: "scissors",
  };

  function handleClickPlayAgain() {
    window.location.reload();
  }

  function handleClickGameButton(optionSelected) {
    game.remove();
    contentContainer.appendChild(
      PickedOption(optionSelected, values, handleClickPlayAgain)
    );
  }

  triangleImg.src = triangleImageUrl;

  mainContainer.appendChild(Header("ROCK PAPER SCISSORS"));

  gameLine1.appendChild(
    GameButton(options.paper.color, options.paper.icon, () =>
      handleClickGameButton("paper")
    )
  );
  gameLine1.appendChild(
    GameButton(options.scissors.color, options.scissors.icon, () =>
      handleClickGameButton("scissors")
    )
  );
  gameLine2.appendChild(
    GameButton(options.rock.color, options.rock.icon, () =>
      handleClickGameButton("rock")
    )
  );
  optionsContainer.appendChild(gameLine1);
  optionsContainer.appendChild(gameLine2);
  game.appendChild(triangleImg);
  game.appendChild(optionsContainer);
  contentContainer.appendChild(game);
  mainContainer.appendChild(contentContainer);

  mainContainer.appendChild(Footer());

  return mainContainer;
}
