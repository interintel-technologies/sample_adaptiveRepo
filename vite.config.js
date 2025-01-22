import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

const muteWarningsPlugin = (warningsToIgnore) => {
  const mutedMessages = new Set()
  return {
    name: 'mute-warnings',
    enforce: 'pre',
    config: (userConfig) => ({
      build: {
        rollupOptions: {
          onwarn(warning, defaultHandler) {
            if (warning.code) {
              const muted = warningsToIgnore.find(
                ([code, message]) =>
                  code == warning.code && warning.message.includes(message),
              )

              if (muted) {
                mutedMessages.add(muted.join())
                return
              }
            }

            if (userConfig.build?.rollupOptions?.onwarn) {
              userConfig.build.rollupOptions.onwarn(warning, defaultHandler)
            } else {
              defaultHandler(warning)
            }
          },
        },
      },
    }),
    closeBundle() {
      const diff = warningsToIgnore.filter((x) => !mutedMessages.has(x.join()))
      if (diff.length > 0) {
        this.warn(
          'Some of your muted warnings never appeared during the build process:',
        )
        diff.forEach((m) => this.warn(`- ${m.join(': ')}`))
      }
    },
  }
}

const warningsToIgnore = [
  ['SOURCEMAP_ERROR', "Can't resolve original location of error"],
  ['INVALID_ANNOTATION', 'contains an annotation that Rollup cannot interpret'],
]

export default defineConfig({
  base: '/static/dsv3.0/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: './src/main.jsx',
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Place all node_modules into a 'vendor' chunk
            return 'vendor';
          }
          if (id.includes('src/components/')) {
            // Group components into a 'components' chunk
            return 'components';
          }
          return undefined; // Default behavior for other files
        },
      },
      plugins: [
        visualizer({
          open: false,
        })
      ],
    }
  },
  plugins: [
    react(),
    muteWarningsPlugin(warningsToIgnore),
  ],
  esbuild: {
    include: /\.[jt]sx?$/,
    exclude: [],
    loader: 'jsx',
  },
  optimizeDeps: {
    exclude: ['jspdf,jspdf-autotable']
  }
})
