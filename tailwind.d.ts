// declare module 'tailwindcss/plugin' {
//     import { PluginCreator } from 'postcss'
//     const plugin: PluginCreator<unknown>
//     export default plugin
//   }
















declare module '*.css' {
    const classes: { [key: string]: string }
    export default classes
  }
  
  declare module 'tailwindcss/plugin' {
    import { PluginCreator } from 'postcss'
    const plugin: PluginCreator<unknown>
    export default plugin
  }