import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Create } from "../Pages/Create";
import { AuthContext } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";

jest.mock("../Context/ContextProvider", () => ({
  AuthContext: {
    accessToken: "mock-access-token",
  },
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("Create component", () => {
  test("displays success modal and link correctly", async () => {
    const mockFetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          short_url: "abcdef",
          custom_url: "custom-alias",
        }),
    });
    global.fetch = mockFetch as jest.Mock;

    render(<Create />);

    const urlInput = screen.getByPlaceholderText("paste URL here...");
    const aliasInput = screen.getByPlaceholderText("Type Alias here");

    fireEvent.change(urlInput, { target: { value: "https://example.com" } });
    fireEvent.change(aliasInput, { target: { value: "custom-alias" } });

    fireEvent.click(screen.getByText("Trim URL"));

    const successModal = await screen.findByText("URL Trimmed Successfully!");
    expect(successModal).toBeInTheDocument();

    const shortenedUrl = screen.getByText(
      "https://scissors-v0r0.onrender.com/abcdef"
    );
    const customUrl = screen.getByText(
      "https://scissors-v0r0.onrender.com/custom-alias"
    );
    expect(shortenedUrl).toBeInTheDocument();
    expect(customUrl).toBeInTheDocument();

    const viewLinksButton = screen.getByText("View Your Trimmed Links");
    fireEvent.click(viewLinksButton);

    // Add assertions for the expected behavior when the button is clicked
  });
});
