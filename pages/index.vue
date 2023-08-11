<template>
  <div class="home-page">
    <section class="intro">
      <section class="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="relative">
            <div class="lg:w-2/3">
              <p class="text-sm font-normal tracking-widest text-gray-300 uppercase">
                A Hub for Designers, Developers & Marketers
              </p>
              <h1 class="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Post your
                </span>
                work
              </h1>
              <p class="max-w-lg mt-2 text-sm font-normal text-gray-400 sm:mt-8">
                You can post anything to inspire other developers who want to be
                developers click the button below to start posting
              </p>
              <div class="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <div
                  class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                </div>
                <button class="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"  @click="$router.push('/admin')"
                  
                  role="button">
                  Signup to post your work
                </button>
              </div>

              <div>
                <div class="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14"></div>
              </div>
            </div>

            <div class="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
              <img id="floating" class="w-full pr-20 max-w-xs mx-auto lg:max-w-lg xl:max-w-xl"
                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </section>

    <textcontent />

    <PostList :posts="loadedPosts" />
    <Nuxt />
  </div>
</template>

<script>
import textcontent from "@/components/Posts/textcontent.vue";

export default {
  components: {
    textcontent,
  },

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },

};

</script>

<style scoped>
@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

#floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }

  50% {
    transform: translate(0, 15px);
  }

  100% {
    transform: translate(0, -0px);
  }
}
</style>
