// IMPORT React testing library
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import StarWarsCharacters from "./StarWarsCharacters";
import App from "../App";
import React from "react";


test("Next button fires", async () => {

	const { getByText }       = rtl.render(<App />);
	const prevButton    = getByText('Previous');
	const nextButton    = getByText('Next');

	rtl.act(() => {
		rtl.fireEvent.click(prevButton);
		rtl.fireEvent.click(nextButton);
	});

});

test('do buttons render', () => {
	const { getByTestId } = rtl.render(<App />);
	getByTestId('next');
	getByTestId('prev');
});