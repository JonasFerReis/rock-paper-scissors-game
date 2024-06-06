import Header from "../../src/components/Header";
import { screen } from "@testing-library/dom";

describe("header component", () => {

  afterEach(() => {
    screen.getByTestId("root").remove();
    document.body.innerHTML = `<div data-testid="root" id="root"></div>`;
  })

  test("O header é renderizado", () => {
    screen.getByTestId("root").appendChild(Header("teste header"));
    expect(screen.getByText("teste header")).toBeInTheDocument();
  });
  
  test("O valor do score no localStorage é lido pelo header", () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), "getItem");
    
    screen.getByTestId("root").appendChild(Header("teste header"));

    const score = screen.getByTestId("scoreNumber");

    expect(localStorage.getItem).toHaveBeenCalled();
    expect(score.innerHTML).toBe("0");
  });
});