import Autocomplete from './assets/react-toolbox/lib/autocomplete/Autocomplete.js';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Button from 'react-toolbox/lib/button/Button';
import Tooltip from 'react-toolbox/lib/tooltip';

const TooltipButton = Tooltip(Button);

export { Autocomplete, theme, ThemeProvider, TooltipButton };