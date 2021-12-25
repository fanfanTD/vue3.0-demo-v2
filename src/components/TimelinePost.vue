<template>
    <router-link :to="to" data-test="post" class="panel-block">
        <div>
            <a>
                <div>
                    <a>{{post.title}}</a>
                    <div>{{post.created.format('YYYY-MM-DD')}}</div>
                </div>
            </a>
        </div>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Post } from '../types';

export default defineComponent({
    name: 'TimelinePost',
    props: {
        post: {
            type: Object as () => Post,
            required: true
        }
    },
    setup(props) {
        
        return { to: `/posts/${props.post.id}` };
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
