import color from './color';
import spacing from './spacing';
import font from './font';
import motion from './motion';
import border from './border';
import shadow from './shadow';

const themes = {
  spacing,
  font,
  motion,
  border,
  shadow,
}

export const theme = {
  light: {
    color: color.light,
    ...themes,
  },
  dark: {
    color: color.dark,
    ...themes,
  },
};

export default theme;
