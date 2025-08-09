// eslint-disable-next-line no-unused-vars
import css from 'rollup-plugin-import-css';
// eslint-disable-next-line no-unused-vars
import nodeResolve  from '@rollup/plugin-node-resolve';


export default {
    input: "src/app.js",
    output: {
        dir: "dist",
        format: "es"
    },
    plugins: [ 
        css({output: 'bundle.css'}), 
        nodeResolve({
            browser: true,
            preferBuiltins: false
        })
     ]
}
