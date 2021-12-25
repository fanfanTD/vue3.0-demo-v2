<template>
     <div>
        <section class="container">
            <div class="columns">
                <div class="column is-3">
                    <aside class="menu-label">
                        <p class="menu-label">标签</p>
                        <ul class="menu-list">
                            <li>
                                <span class="tag is-primary is-medium">饭饭在线</span>
                            </li>
                        </ul>
                    </aside>
                </div>
                <div class="column is-9">
                    <div class="box content">
                        <article class="post">
                            <h4>{{post.title}}</h4>
                            <div class="media">
                                <div class="media-left">
                                    <p class="id-32x32">
                                        <i class="fa fa-bold"></i>
                                    </p>
                                </div>
                                <div class="media-content">
                                    <div v-html="post.html"></div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
        <br><br><br>
        <router-link to="/" class="button is-rounded">
            返回<i class="fa fa-edit"></i>
        </router-link>
        <router-link :to="to" class="button is-rounded is-link">
            编辑<i class="fa fa-edit"></i>
        </router-link>
    </div>
</template>

<script lang="ts">
// import { defineComponent } from '@vue/composition-api'
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '../store';

export default defineComponent({
  name: 'PostViewer',
  props: {
  },
  components: {},
  async setup(props, context) {
      const route = useRoute();
      const store = useStore();
      const id = route.params.id as string;

      if (!store.getState().posts.loaded) {
          await store.fetchPosts();
      }
      const post = store.getState().posts.all[id];

      return { post, to: `/posts/${post.id}/edit` }
  },
})
</script>


<style>

</style>
