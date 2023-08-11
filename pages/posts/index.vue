<template>
    <div class="posts-page">
        <div>

        </div>

        <PostList :posts="loadedPosts" />
    </div>
</template>
  
<script>


export default {
    middleware: 'log',
    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts
        }
    }
};
</script>
  
  
<style scoped>
.posts-page {
    padding: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
  