import React from "./node_modules/react";
import { render } from "./node_modules/@testing-library/react";
import { CustomButton } from "./CustomButton.component";

test("should not allowed click when isDisabled present", () => {
	const { container } = render(<CustomButton isDisabled>tets</CustomButton>);

	expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
