// IMPORT React testing library
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import StarWarsCharacters from "./StarWarsCharacters";

test('Previous button works', async () => {
	const wrapper = rtl.render(StarWarsCharacters);
	wrapper.findByText(/luke/i);

	const nextButton = wrapper.getByText(/next/i);
	rtl.act(() => {
		rtl.fireEvent.click(nextButton)
	});
	expect(wrapper.queryByText(/anakin/i)).toBeVisible();
});