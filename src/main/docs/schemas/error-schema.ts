export const error = {
	type: "object",
	properties: {
		error: {
			type: "string",
		},
		message: {
			type: "string",
		},
	},
	required: ["error"],
};
