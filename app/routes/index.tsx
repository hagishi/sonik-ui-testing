import { defineRoute, type Context } from "sonik"

export default async function Index(c: Context) {
  const value = await c.env.kv.get("mas")
  console.log("kv", value)
  return c.render(
    <div className="p-1">
      <h1 className="text-xs">button</h1>
    </div>,
    {
      title: "hello to Sonik!",
      meta: [
        {
          name: "description",
          content: "This an example for Sonik",
          key: "Key",
        },
      ],
    }
  )
}
