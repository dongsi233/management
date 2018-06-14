
function lazy (name) {
    let rname = `components/${name}.vue`;
    //return () => import (`../components/${name}.vue`)
    return () => import('../' + rname);
}

export default lazy