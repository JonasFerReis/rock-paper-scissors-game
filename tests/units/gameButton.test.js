import { fireEvent, screen } from "@testing-library/dom";
import GameButton from "../../src/components/GameButton";
import { options } from "../../src/utils/options";

describe("gameButton component", () => {
  const handleClick = jest.fn();
  const root = screen.getByTestId("root");
  root.appendChild(GameButton(options.paper.color, options.paper.icon, handleClick));

  test("O botão é renderizado", () => {
    expect(screen.getByTestId("gameButton")).toBeInTheDocument();
  });

  test("Função onClick é chamada", () => {
    const button = screen.getByTestId("gameButton");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  test("Animação do botão é ativada", () => {
    let shadowColor = options.paper.color.match(/hsl[(]\d+, \d+%, \d+%[)]/i)?.[0];
    shadowColor = shadowColor.split("%");
    shadowColor[1] = shadowColor[1].replace(", ", "");
    shadowColor[1] = `, ${shadowColor[1] - 10}`;
    shadowColor = shadowColor.join("%");

    const button = screen.getByTestId("gameButton");
    fireEvent.mouseDown(button);

    expect(button).toHaveStyle({ boxShadow: "none" });

    fireEvent.mouseUp(button);

    expect(button).toHaveStyle({ boxShadow: `0px 4px 0px ${shadowColor}` });
  })
})