<template>
  <Suspense>
    <template #default>
      <PostEditor></PostEditor>
    </template>
    <template #fallback>
        <Progress></Progress>
    </template>
  </Suspense>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import { ref, computed, reactive, toRefs, watch, defineComponent } from 'vue';
import PostEditor from '@/components/PostEditor.vue';
import Progress from '@/components/Progress.vue';

export default defineComponent({
  name: 'ShowPost',
  props: {
    title: String
  },
  components: { PostEditor, Progress },
  setup(props, context) {
  },
})
</script>


<style>

</style>
