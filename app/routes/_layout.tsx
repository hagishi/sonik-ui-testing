import type { LayoutHandler } from "@sonikjs/react"

const handler: LayoutHandler = ({ children, head }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {import.meta.env.PROD ? (
          <>
            <link href="/static/style.css" rel="stylesheet" />
            <script type="module" src="/static/client.js" />
          </>
        ) : (
          <>
            <link href="/app/style.css" rel="stylesheet" />
            <script type="module" src="/app/client.ts" />
          </>
        )}
        {head.createTags()}
      </head>
      <body>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  )
}

export default handler
