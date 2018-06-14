import lazy from './lazyLoading';

export default (routers, data) => {
    generaMenu(routers, data);
}

function generaMenu (routers, data) {
    data.forEach(element => {
        // menu.component = lazy(menu.component);
        let menu = Object.assign({}, element);
        let rname = `components/${menu.component}.vue`;
        menu.component = () => import('../'+rname);
        //menu.component = () => import('../components/home.vue');

        //menu.component = () => import(`../components/${menu.component}.vue`);
        if(element.children) {
            menu.children = [];
            generaMenu(menu.children, element.children);
        }
        routers.push(menu);
    });
    
}