<script setup>
const props = defineProps({
  text: {
      required: true,
      type: String,
  },
  loading: {
      required: true,
      type: Boolean,
  },
})

</script>

<template>
  <button type="submit" :disabled="loading" class="primary-button min-h-10">
    <span v-if="!loading"> {{text}}</span>
    <span v-else class="loader"></span>
  </button>

</template>


<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 20px;
  padding: 2px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: white;
  --_m:
      conic-gradient(#0000 10%,#000),
      linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {to{transform: rotate(1turn)}}
</style>