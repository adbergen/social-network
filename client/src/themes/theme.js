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
  buttonBackgroundColor: "blue",
  buttonTextColor: "white",
  greetingBackgroundColor: "indianred",
  greetingTextColor: "white",
  sidebarTextColor: "black",
};

const dark = {
  id: "dark",
  ...base,
  backgroundColor: "#333",
  textColor: "black",
  navColor: "#000",
  buttonBackgroundColor: "blue",
  buttonTextColor: "white",
  greetingBackgroundColor: "black",
  greetingTextColor: "white",
  sidebarTextColor: "white",
};

export const theme = { light, dark };
