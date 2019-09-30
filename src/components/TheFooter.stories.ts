import { storiesOf } from '@storybook/vue';

import TheFooter from './TheFooter.vue';

const story = storiesOf('Layout|Sections/FooterMDX', module) as any;

story.add('Default (no props) MDX', () => ({
  components: { TheFooter },
  template: `<TheFooter />`
}));
