<template>
  <div>
    <input v-model="inputText" />
    <button @click="sendText">Enviar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ''
    };
  },
  methods: {
    sendText() {
      this.$emit('text-sent', this.inputText);
    }
  }
};
</script>
