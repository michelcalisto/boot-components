# boot-components

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Uso

```js
// main.js
import { createApp } from 'vue'
import App from '@/App.vue'
import 'boot-components/dist/styles.css';
import bootComponents from 'boot-components';
// ...

const app = createApp(App)

app.use(bootComponents)
app.mount('#app')
```
