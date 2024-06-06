import scissorsIconUrl from "../assets/images/icon-scissors.svg";
import paperIconUrl from "../assets/images/icon-paper.svg";
import rockIconUrl from "../assets/images/icon-rock.svg";
import lizardIconUrl from "../assets/images/icon-lizard.svg";
import spockIconUrl from "../assets/images/icon-spock.svg";

export const options = {
  rock: {
    color: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
    icon: rockIconUrl,
  },
  paper: {
    color: "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
    icon: paperIconUrl,
  },
  scissors: {
    color: "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
    icon: scissorsIconUrl,
  },
  lizard: {
    color: "linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
    icon: lizardIconUrl,
  },
  spock: {
    color: "linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
    icon: spockIconUrl,
  },
};
