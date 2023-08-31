<template>
  <button :class="btnStyle" v-bind="$attrs" v-on="$listeners"
    class="inline-flex items-center px-6 py-3 text-gray-50 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-full hover:bg-gray-700 hover:text-white">
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
