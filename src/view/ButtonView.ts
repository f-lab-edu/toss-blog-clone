import View from '../type/View';

const BACKGROUND_COLOR = {
  primary: 'bg-primary', // "#3182f6"
  secondary: 'bg-secondary', // "#f2f4f6"
  white: 'bg-white', // #fff
};

const FONT_COLOR = {
  default: 'color-white', // "#fff"
  gray: 'color-gray', // "#4e5968"
};

interface ButtonViewProp {
  content?: string;
  color?: keyof typeof FONT_COLOR;
  variant?: keyof typeof BACKGROUND_COLOR;
  prefix?: string;
  suffix?: string;
}

class ButtonView extends View<ButtonViewProp> {
  getTemplate({
    content,
    color = 'default',
    variant = 'primary',
    prefix,
    suffix,
  }: ButtonViewProp) {
    return `<button class="btn ${FONT_COLOR[color]} ${BACKGROUND_COLOR[variant]}">
              ${prefix ? prefix : ''}
              ${content ? content : ''}
              ${suffix ? suffix : ''}
            </button>`;
  }
}

export default ButtonView;
