import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'inertia-vue-table',
            fileName: (format) => `inertia-vue-table.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [vue()],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
        },
    },
});
