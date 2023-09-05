import { fireEvent, render, screen } from '@testing-library/react';

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test('Başlık başarılı bir şekilde render edilmeli', () => {
  render(<App />);
  const titleElement = screen.getByText(/Emoji Filtreleme Uygulaması/i);
  expect(titleElement).toBeInTheDocument();
});

test('Emoji listesi başarılı bir şekilde render edilmeli', () => {
  render(<App />);
  const emojiListElement = screen.getByTestId('emoji-list');
  expect(emojiListElement).toBeInTheDocument();
});

test('Filtreleme işlemi yapıldığında emoji listesi güncellenmeli', () => {
  render(<App />);
  const inputElement = screen.getByLabelText(/Filtreleme/i);
  fireEvent.change(inputElement, { target: { value: 'heart' } });
  const emojiListElement = screen.getByTestId('emoji-list');
  expect(emojiListElement.children.length).toBeGreaterThan(0);
});

test('Emojiye tıklandığında ilgili emoji kopyalanmalı', () => {
  render(<App />);
  const emojiItemElement = screen.getByTestId('emoji-item');
  fireEvent.click(emojiItemElement);
  expect(navigator.clipboard.writeText).toHaveBeenCalledWith(emojiItemElement.textContent);
});