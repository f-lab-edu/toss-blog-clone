import View from '../type/View';

const BACKGROUND_COLOR = {
  primary: "bg-primary", //"#3182f6"
  secondary: "bg-secondary" //"#f2f4f6"
}

const FONT_COLOR = {
  default: "color-default", // "#4e5968"
  white: "color-white" //"#fff"
}

interface ButtonViewProp {
  content: string;
  color: keyof typeof FONT_COLOR;
  variant: keyof typeof BACKGROUND_COLOR;
  prefix: string,
  suffix: string
}

class ButtonView extends View<ButtonViewProp> {
  getTemplate({ content, color, variant, prefix, suffix }:ButtonViewProp) {
    return `<button class="${FONT_COLOR[color]} ${BACKGROUND_COLOR[variant]}">
              ${prefix}
              ${content}
              ${suffix}
            </button>`;
  }
}

export default ButtonView;
