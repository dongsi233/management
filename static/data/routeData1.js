
[{
    path: '/',
    component: () => import('views/index/components/hello.vue'),
    name: '设置',
    icon: 'iconfont icon-cart',
    children: [
    {path:'/table', component: table, name: 'Table'},
    {path:'/table1', component: table1, name: 'Table1'}
    ]
},
{
    path: '/',
    component: () => import('views/index/components/hello.vue'),
    name: '用户中心',
    icon: 'iconfont icon-accountfilling',
    children: [
    {path:'/table2', component: table2, name: 'Table2'},
    {path:'/table3', component: table3, name: 'Table3'}
    ]
}]