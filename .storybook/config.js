// Import Storybook
import { configure, addParameters, addDecorator } from '@storybook/vue';
import { setConsoleOptions } from '@storybook/addon-console';
import { withA11y } from '@storybook/addon-a11y';

// Import Vendor Plugins
import '../src/plugins';

// Import Sass Stylesheets
import '../src/assets/styles/main.scss';

addDecorator(withA11y)

addParameters({
  background: [
    { name: 'Light', value: '#eeede9', default: true }
  ],
});

// Exlude deprecation warning from console panel
const panelExlude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExlude, /deprecated/],
});

// Automatically import all *.stories.ts files in @/components folder
const req = require.context('../src/components', true, /\.stories\.(ts|mdx)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
