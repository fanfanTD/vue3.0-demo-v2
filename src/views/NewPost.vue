<template>
  <div class="about">
    <PostWriter :post="post" @save="save"></PostWriter>
  </div>
</template>
<script lang="ts">
import { ref, computed, reactive, toRefs, watch, defineComponent } from 'vue';
import PostWriter from '../components/PostWriter.vue';
import { Post } from '../types';
import moment from 'moment';
import { useStore } from '../store';
import { useRouter } from 'vue-router';
export default defineComponent({
  props: {},
  components: { PostWriter },
  setup(props, context) {
    const post:Post = {
      id: -1,
      title: '饭饭在线',
      markdown: '## vue composition api \n Vue3最新的API模式',
      html:'',
      authorId: 0,
      created: moment()
    };
    const store = useStore();
    const router = useRouter();

    const save = async (post: Post) => {
      // 存储到store中
      await store.createPost(post);
      // 路由跳转
      router.push('/');
    };
    return { post, save }
  },
})
</script>
<style>
</style>
