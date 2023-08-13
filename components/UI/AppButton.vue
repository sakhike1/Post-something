<template>
  <button :class="btnStyle" v-bind="$attrs" v-on="$listeners"
    class="inline-flex items-center px-6 py-3 text-gray-50 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full hover:bg-gray-200 hover:text-gray-200">


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




