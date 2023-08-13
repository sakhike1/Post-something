<template>
  <button :class="btnStyle" v-bind="$attrs" v-on="$listeners"
    class="inline-flex items-center px-6 py-3 text-gray-50 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-full hover:bg-gray-200 hover:text-gray-300">


    <slot />
  </button>
</template>



<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>




