<template>
  <div>
    <ChildComponent @text-sent="updateText" />
    <p>{{ receivedText }}</p>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: { ChildComponent },
  data() {
    return {
      receivedText: ''
    };
  },
  methods: {
    updateText(text) {
      this.receivedText = text;
    }
  }
};
</script>

<style scoped>

</style>
