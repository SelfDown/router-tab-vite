// 异步加载页面组件
/* @vite-ignore */
export const importPage = view => () =>
  import(/* @vite-ignore */
    /* webpackChunkName: "p-[request]" */
    '../views/' + view + '.vue'
  )
