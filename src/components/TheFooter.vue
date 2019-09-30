<template>
  <b-container
    tag="footer"
    class="TheFooter mt-auto"
    fluid
  >
    <b-container>
      <b-row
        class="TheFooter__row-1"
        no-gutters
      >
        <b-col class="TheFooter__col text-left">
          <div class="mb-3">
            <div>Line 1</div>
            <div>Line 2</div>
          </div>
          <div>
            <div>Line 1</div>
            <div>Line 2</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-row
      class="TheFooter__row-2"
      align-content="center"
    >
      <b-col class="text-center">
        <small class="TheFooter__copy mh-3">
          &copy; 2019 TheFooter
        </small>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'TheFooter',
})
export default class TheFooter extends Vue {}
</script>

<style lang="scss" scoped>
.TheFooter {
  background-color: $color-red;

  &__row-1 {
    height: 260px;
  }

  &__col {
    line-height: 16px;
  }

  &__row-2 {
    height: 40px;
    background-color: #333333;
    color: #ffffff;
  }

  &__logo {
    width: 95px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  &__copy {
    font-size: 1em;
  }
}
</style>
