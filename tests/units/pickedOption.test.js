import { fireEvent, screen } from "@testing-library/dom";
import PickedOption from "../../src/components/PickedOption";

describe("pickedOption component", () => {

  const values = {
    0: "paper",
    1: "rock",
    2: "scissors",
  };

  afterEach(() => {
    screen.getByTestId("root").remove();
    document.body.innerHTML = `<div data-testid="root" id="root"></div>`;
  })

  test("O pickedOption é renderizado", () => {
    screen.getByTestId("root").appendChild(PickedOption("paper", values, () => { }));
    expect(screen.getByTestId("pickedOption")).toBeInTheDocument();
  });

  test("A função onClickPlayAgain é chamada", () => {
    jest.useFakeTimers();
    const handleClickPlayAgain = jest.fn();
    screen.getByTestId("root").appendChild(PickedOption("paper", values, handleClickPlayAgain));

    jest.runAllTimers();

    const button = screen.getByText("PLAY AGAIN");

    expect(button).toBeEnabled();

    fireEvent.click(button);

    expect(handleClickPlayAgain).toHaveBeenCalled();
  });

  test("YOU WIN é exibido e o score no localStorage é incrementado ao ganhar a rodada", () => {
    jest.useFakeTimers();
    jest.spyOn(global.Math, "random").mockReturnValue(0.4);
    jest.spyOn(Storage.prototype, "setItem");

    screen.getByTestId("root").appendChild(PickedOption("paper", values, () => { }));

    jest.runAllTimers();
    jest.spyOn(global.Math, "random").mockRestore();

    screen.getByText("YOU WIN");
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test("YOU LOSE é exibido ao perder a rodada", () => {
    jest.useFakeTimers();
    jest.spyOn(global.Math, "random").mockReturnValue(0.7);
    jest.spyOn(Storage.prototype, "setItem");

    screen.getByTestId("root").appendChild(PickedOption("paper", values, () => { }));

    jest.runAllTimers();
    jest.spyOn(global.Math, "random").mockRestore();

    screen.getByText("YOU LOSE");
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  test("TIED é exibido ao empatar a rodada", () => {
    jest.useFakeTimers();
    jest.spyOn(global.Math, "random").mockReturnValue(0.0);
    jest.spyOn(Storage.prototype, "setItem");

    screen.getByTestId("root").appendChild(PickedOption("paper", values, () => { }));

    jest.runAllTimers();
    jest.spyOn(global.Math, "random").mockRestore();

    screen.getByText("TIED");
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });
});