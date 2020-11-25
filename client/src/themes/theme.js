const base = {
  easeOutBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  colorWhite: "rgb(255, 255, 255)",
  colorBlack: "rgb(0, 0, 0)",
};

const light = {
  id: "light",
  ...base,
  backgroundColor: "#fff",
  textColor: "white",
  navColor: "indianred",
  buttonBackgroundColor: "red",
  buttonTextColor: "green",
};

const dark = {
  id: "dark",
  ...base,
  backgroundColor: "#333",
  textColor: "black",
  navColor: "#000",
  buttonBackgroundColor: "green",
  buttonTextColor: "red",
};

export const theme = { light, dark };
