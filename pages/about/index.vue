<template>
    <div class="">
        <section class="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
            <div class="px-4 gap-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl">
                <div class="grid items-center grid grid-flow-col justify-stretch lg:grid-cols-2 gap-x-16">
                    <div>
                        <h1 class="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">Post something
                            is a blog for developers </h1>

                        <p class="mt-4  text-lg font-normal text-gray-400 sm:mt-8">let us know which framework you are busy
                            with and what have you found intresting about that framework</p>



                        <button @click="onCancel"
                            class="relative mt-6  inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                            <span
                                class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span
                                class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Post
                                something
                            </span>
                        </button>



                    </div>

                    <div class="relative">


                        <div class="absolute inset-0">
                            <img class="object-cover w-full h-full opacity-50"
                                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
                        </div>

                        <img class="relative w-full max-w-md mx-auto"
                            src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/2/illustration.png"
                            alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>


export default {

    props: {
        post: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            editedPost: this.post
                ? { ...this.post }
                : {
                    author: "",
                    title: "",
                    thumbnail: "",
                    content: "",
                    previewText: ""
                }
        };
    },
    methods: {
        onSave() {
            // Save the post
            this.$emit('submit', this.editedPost)
        },
        onCancel() {
            // Navigate back
            this.$router.push("/admin");
        }
    }
};
</script>


<style >
.about-page {
    text-align: center;
    padding: 30px;
}
</style>