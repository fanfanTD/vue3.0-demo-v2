import { reactive } from 'vue';
import axios from 'axios';
const initialPostsState = () => ({
    ids: [
    // todayPost.id.toString(),
    // thisWeek.id.toString(),
    // thisMonth.id.toString()
    ],
    all: {
    // [todayPost.id]: todayPost,
    // [thisWeek.id]: thisWeek,
    // [thisMonth.id]: thisMonth
    },
    loaded: false
});
;
const initialState = () => ({
    posts: initialPostsState()
});
class Store {
    state;
    constructor(initialState) {
        this.state = reactive(initialState);
    }
    getState() {
        return this.state;
    }
    async fetchPosts() {
        const response = await axios.get('/posts');
        const ids = [];
        const all = {};
        for (const post of response.data) {
            if (!this.state.posts.ids.includes(post.id.toString())) {
                this.state.posts.ids.push(post.id.toString());
            }
            this.state.posts.all[post.id] = post;
            // ids.push(post.id.toString());
            // all[post.id] = post;
        }
        this.state.posts.loaded = true;
        // this.state.posts = { ids, all, loaded: true };
    }
    async createPost(post) {
        const response = await axios.post('/posts', post);
        this.state.posts.all[response.data.id] = response.data;
        this.state.posts.ids.push(response.data.id.toString());
    }
    async updatePost(post) {
        const response = await axios.put('/posts', post);
        this.state.posts.all[response.data.id] = response.data;
    }
}
const store = new Store(initialState());
export const useStore = () => store;
//# sourceMappingURL=index.js.map