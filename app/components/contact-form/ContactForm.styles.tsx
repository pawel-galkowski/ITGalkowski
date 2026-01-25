// ContactForm.styles.tsx

export const formBoxStyles = {
	mx: "auto",
	display: "flex",
	flexDirection: "column",
	gap: 2,
};

export const textFieldStyles = {
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "primary.contrastText",
		},
		"&:hover fieldset": {
			borderColor: "primary.contrastText",
		},
		"&.Mui-focused fieldset": {
			borderColor: "primary.contrastText",
		},
		color: "primary.contrastText",
		backgroundColor: "transparent",
	},
	"& .MuiInputLabel-root": {
		color: "primary.contrastText",
	},
	"& .MuiFormHelperText-root": {
		color: "primary.contrastText",
	},
};

export const buttonStyles = {
	color: "primary.contrastText",
	backgroundColor: "transparent",
	border: "2px solid",
	borderColor: "primary.contrastText",
	boxShadow: "none",
	fontWeight: 700,
	fontSize: "1.1rem",
	transition: "background 0.2s, color 0.2s",
	"&:hover, &:focus": {
		backgroundColor: "primary.contrastText",
		color: "primary.main",
		outlineOffset: "2px",
	},
};

export const buttonBoxStyles = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: 2,
};