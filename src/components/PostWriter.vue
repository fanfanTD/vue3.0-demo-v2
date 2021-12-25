<template>
    <div>
        <div class="columns">
            <div class="column">
                <div class="field">
                    <div class="label">博客标题</div>
                    <div class="control">
                        <input data-test="post-title" type="text" v-model="title" class="input">
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-one-half">
                写的内容
                <div data-test="markdown" contenteditable id="markdown" ref="contentEditable" @input="handleEdit"></div>
            </div>
            <div class="column is-one-half">
                <div v-html="html"></div>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <button data-test="submit-button" class="button is-primary is-pull-right" @click="submit">保存</button>
                <button @click="$router.go(-1)" class="button is-danger">取消</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref, computed, reactive, onMounted, watch, defineComponent } from 'vue';
import { Post } from '../types';
import { parse, MarkedOptions } from 'marked';
import { highlightAuto } from 'highlight.js';
import debounce from 'lodash/debounce';

export default defineComponent({
  props: {
      post: {
        type: Object as () => Post,
        required: true
      }
  },
  components: {  },
  setup(props, context) {
      const title = ref(props.post.title);
      const contentEditable = ref<null | HTMLDivElement>(null);
      const markdown = ref(props.post.markdown);
      const html = ref('');


      const handleEdit = () => {
          markdown.value = contentEditable.value.innerText;
          
      };
      const options:MarkedOptions = {
          highlight: (code: string) => highlightAuto(code).value
      }

      const update = debounce((value: string) => {
          html.value = parse(value, options);
      }, 500);

      const submit = () => {
          const post: Post = {
              ...props.post,
              title: title.value,
              markdown: markdown.value,
              html: html.value
          };
          context.emit('save', post);
      };

      watch(() => markdown.value, (value) => update(value), { immediate: true })

      onMounted(() => {
          contentEditable.value.innerText = markdown.value;
          html.value = parse(markdown.value);
      })
      return {
          title,
          contentEditable,
          handleEdit,
          markdown,
          html,
          submit
      }
  }
})
</script>
<style>
</style>
