export default function calculateResult(youPick, housePick) {
  if (youPick === housePick) return "TIED";

  const resultMap = {
    rock: {
      scissors: "YOU WIN",
      lizard: "YOU WIN",
      paper: "YOU LOSE",
      spock: "YOU LOSE",
    },
    paper: {
      rock: "YOU WIN",
      spock: "YOU WIN",
      scissors: "YOU LOSE",
      lizard: "YOU LOSE",
    },
    scissors: {
      paper: "YOU WIN",
      lizard: "YOU WIN",
      rock: "YOU LOSE",
      spock: "YOU LOSE",
    },
    lizard: {
      paper: "YOU WIN",
      spock: "YOU WIN",
      scissors: "YOU LOSE",
      rock: "YOU LOSE",
    },
    spock: {
      rock: "YOU WIN",
      scissors: "YOU WIN",
      paper: "YOU LOSE",
      lizard: "YOU LOSE",
    },
  };

  return resultMap[youPick][housePick];
}
