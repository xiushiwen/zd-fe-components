import ZdAudio from './ZdAudio.vue'
import ZdCanvas from './ZdCanvas.vue'

// Declare install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('ZdAudio', ZdAudio);
    Vue.component('ZdCanvas', ZdCanvas);
}

// Create module definition for Vue.use()
const plugin = {
    install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export {
    ZdAudio,
    ZdCanvas
};
