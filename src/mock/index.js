import moment from 'moment';
moment.locale('zh-cn');
export const basePost = {
    id: 1,
    title: '饭饭 is coming',
    markdown: '课程列表',
    html: '<p>课程列表</p>',
    authorId: 1,
    created: moment()
};
export const todayPost = {
    ...basePost,
    id: 1,
    title: '今天'
};
export const thisWeek = {
    ...basePost,
    id: 2,
    title: '本周',
    created: moment().subtract(2, "days")
};
export const thisMonth = {
    ...basePost,
    id: 3,
    title: '本月',
    created: moment().subtract(2, "weeks")
};
//# sourceMappingURL=index.js.map