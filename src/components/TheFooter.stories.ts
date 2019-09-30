import { storiesOf } from '@storybook/vue';
// import centered from '@storybook/addon-centered/vue';
// addDecorator(centered);

import TheFooter from './TheFooter.vue';

const story = storiesOf('Layout|Sections/Footer', module) as any;

story.add('Default (no props)', () => ({
  components: { TheFooter },
  template: `<TheFooter />`
}));
