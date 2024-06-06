import Footer from "../../src/components/Footer";
import { fireEvent, getByRole, screen } from "@testing-library/dom";

describe("footer component", () => {
  const root = screen.getByTestId("root");
  root.appendChild(Footer());

  test("O footer é renderizado", () => {
    const footer = screen.getByTestId("footer");
    screen.getByText("Create by - Jonas Reis");
    
    expect(footer).toBeInTheDocument();
  });

  test("O modal de regras é aberto", () => {
    const footer = screen.getByTestId("footer");
    const button = getByRole(footer, "button", { name: "RULES" });

    expect(button).toBeEnabled();

    fireEvent.click(button);
    const rules = screen.getByTestId("rulesContainer");

    expect(rules).toBeInTheDocument();

    const closeButton = getByRole(rules, "button", { name: "X" });

    expect(closeButton).toBeEnabled();

    fireEvent.click(closeButton);

    expect(rules).not.toBeInTheDocument();
  });
})