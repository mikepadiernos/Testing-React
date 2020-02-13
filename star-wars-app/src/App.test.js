import React from "react";
import axios from 'axios';

// IMPORT React testing library
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

test("Logo rendering", async () => {
	const wrapper       = rtl.render(<App />);
	const logo          = await wrapper.findByAltText(/logo/i);
	expect(logo).toBeVisible();
});

// test('API call', async () => {
// 	const wrapper = rtl.render(<App />);
// 	await wrapper.findAllByAltText(/dog/i);
// 	expect(axios.get).toHaveBeenCalled();
// })w