<template>
    <div>
        <PostWriter :post="post" @save="save"></PostWriter>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostWriter from './PostWriter.vue';
import { useStore } from '../store';
import { useRouter, useRoute } from 'vue-router';
import { Post } from '../types';
export default defineComponent({
    name: 'PostEditor',
    components: { PostWriter },
    props: {
        
    },
    async setup() {
        const route = useRoute();
        const store = useStore();
        const router = useRouter();
        const id = route.params.id as string;
        console.log('id', id);
        
        if (!store.getState().posts.loaded) {
            await store.fetchPosts();
        }
        const post = store.getState().posts.all[id];
        const save = async (post: Post) => {
            // 存储到store中
            await store.updatePost(post);
            // 路由跳转
            router.push('/');
        };
        return { post, save };
    }
});
</script>

<style scoped>
</style>
