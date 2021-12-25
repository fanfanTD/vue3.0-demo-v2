<template>
  <div>
    <div class="modal" :style="style">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div id="modal"></div>
      </div>
      <button @click="modal.hideModal" class="modal-close is-large"></button>
    </div>
    <Navbar></Navbar>
    <section class="section">
      <div class="container">
          <router-view></router-view>
      </div>
    </section>
  </div>
  <!-- <div id="app">
    <p>姓名：{{name}}</p>
    <p>年龄：
      <button @click="changeAge(-1)">-</button>
      {{age}}
      <button @click="changeAge(1)">+</button>
    </p>
    <p>出生年份：
      <button @click="changeYear(-1)">-</button>
      {{year}}
      <button @click="changeYear(1)">+</button>
    </p>
  </div> -->
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import { ref, computed, reactive, toRefs, watch, defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';
import { useModal} from '@/utils/useModal';

export default defineComponent({
  props: {
    title: String
  },
  components: { Navbar },
  setup(props, context) {
    const modal  = useModal();
    const style = computed(() => ({
      display: modal.visible.value ? 'block' : 'none'
    }))
    return { modal, style };
  },
})
</script>


<style>

</style>
