
const item1 = {
    path: '/',
    component: 'home',
    name: 'home',
    title: '设置',
    icon: 'iconfont icon-cart',
    hidden: false,
    children: [
        {
            path:'/table',
            title: 'Table',
            component: 'table',
            name: 'table'
        },
        {
            path:'/table1', 
            title: 'Table1',
            component: 'table1', 
            name: 'table1'
        }
    ]
}

const item2 = {
    path: '/',
    component: 'home',
    name: 'home',
    title: '用户中心',
    icon: 'iconfont icon-accountfilling',
    hidden: false,
    children: [
        {
            path:'/table2',
            title: 'Table2',
            component: 'table2',
            name: 'table2'
        },
        {
            path:'/table3', 
            title: 'Table3',
            component: 'table3', 
            name: 'table3'
        }
    ]
}

//export const routeData = [item1, item2];
module.exports = {
    routeData:[item1, item2]
}
