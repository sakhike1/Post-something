<template>
    <div class="admin-page m-15">

        <section class="existing-posts">
            <textcontent />

            <PostList isAdmin :posts="loadedPosts" />
        </section>
        <section class="new-post">
            <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
            <AppButton style="margin-left: 10px" @click="onLogout">Logout</AppButton>
        </section>
    </div>
</template>
  
<script>
import textcontent from '@/components/Posts/textcontent.vue'
export default {
    components: {
        textcontent
    },
    layout: "admin",
    middleware: ["check-auth", "auth"],
    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts;
        }
    },
    methods: {
        onLogout() {
            this.$store.dispatch("logout");
            this.$router.push("/admin/auth");
        }
    }
};
</script>
<style scoped>
.admin-page {
    padding: 20px;
}

.new-post {
    text-align: center;
    padding-bottom: 10px;
}

.existing-posts h1 {
    text-align: center;
}
</style>
  
  