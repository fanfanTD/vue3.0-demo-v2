<template>
  <Suspense>
    <template #default>
      <PostViewer></PostViewer>
    </template>
    <template #fallback>
        <Progress></Progress>
    </template>
  </Suspense>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import { ref, computed, reactive, toRefs, watch, defineComponent } from 'vue';
import PostViewer from '@/components/PostViewer.vue';
import Progress from '@/components/Progress.vue';

export default defineComponent({
  name: 'ShowPost',
  props: {
    title: String
  },
  components: { PostViewer, Progress },
  setup(props, context) {
  },
})
</script>


<style>

</style>
