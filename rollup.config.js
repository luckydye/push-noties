// import typescript from '@rollup/plugin-typescript';
import node_resolve from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'src/client/mod.js',
        output: {
            sourcemap: process.env.ENV || "development",
            file: 'public/mod.js',
        },
        plugins: [
            node_resolve(),
            // typescript(),
        ]
    }
];
