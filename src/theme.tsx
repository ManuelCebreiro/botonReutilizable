enum COLOR {
  primary = "#114B35",
  secondary = "#E7EDEB",
  terciary = "#9E81F6",
  noBG = "transparent",
  default = "#000",
  textColor = "#fff",
}

export const themes = {
  primary: {
    background: COLOR.primary,
    color: COLOR.textColor,
  },
  secondary: {
    background: COLOR.secondary,
    color: COLOR.default,
  },
  terciary: {
    background: COLOR.terciary,
    color: COLOR.textColor,
  },
  noBG: {
    background: COLOR.noBG,
    color: COLOR.default,
    //seria quizas bueno añadir aqui el disabled espacialito de transparente"
  },
};
