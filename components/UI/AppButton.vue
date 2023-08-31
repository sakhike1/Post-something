<template>
  <button :class="btnStyle" v-bind="$attrs" v-on="$listeners"
    class="inline-flex items-center px-6 py-3 text-gray-50 bg-red-500 rounded-full hover:bg-gray-700 hover:text-gray-300">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnStyle: {
      type: String,
      default: "",
    },
  },
};
</script>
