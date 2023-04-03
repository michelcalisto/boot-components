import * as components from './components';

const componentsList = components?.default;
const BootComponents = {
  install(Vue) {
    Object.keys(componentsList).forEach(name => {
      Vue.component(name, componentsList[name]);
    })
  },
};
export default BootComponents;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BootComponents);
}
