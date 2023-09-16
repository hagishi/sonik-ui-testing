import sonik from "sonik/vite"
import { defineConfig } from "vite"
import pages from "@sonikjs/cloudflare-pages"
import devServer from "@hono/vite-dev-server"

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [
    sonik({
      devServer: {
        cf: {
          kvNamespaces: ["kv"],
        },
      },
    }),
    pages(),
  ],
})
