<template>
  <button
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"
    style="
      background: linear-gradient(
        to right,
        rgb(236, 72, 153),
        rgb(239, 68, 68),
        rgb(234, 179, 8)
      );
    "
    class="inline-flex items-center px-6 py-3 text-gray-50 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-full hover:bg-gray-200 hover:text-gray-300"
  >
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
