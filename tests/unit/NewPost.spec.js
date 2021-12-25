import { mount } from '@vue/test-utils';
import NewPost from '@/views/NewPost.vue';
import { useStore } from '@/store';
const mockRoutes = [];
jest.mock('vue-router', () => ({
    useRouter: () => ({
        push: (url) => {
            mockRoutes.push(url);
        }
    })
}));
jest.mock('axios', () => ({
    post: (url, payload) => {
        return { data: payload };
    }
}));
describe('NewPost', () => {
    it('测试添加博客事件', async () => {
        const store = useStore();
        const wrapper = mount(NewPost, {
            global: {
                provide: { store }
            }
        });
        expect(store.getState().posts.ids).toHaveLength(0);
        await wrapper.find('[data-test="submit-button"]').trigger('click');
        await wrapper.vm.$nextTick();
        expect(store.getState().posts.ids).toHaveLength(1);
        expect(mockRoutes).toEqual(['/']);
        console.log(mockRoutes);
    });
});
//# sourceMappingURL=NewPost.spec.js.map