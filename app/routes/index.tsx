import { defineRoute, type Context } from "sonik"
import Foo from "../islands/foo"
import { Bar } from "../islands/bar"

const Masatoshi = () => {
  const foo = () => {
    console.log("foo")
  }
  return (
    <div>
      <button className="bg-blue-200" onClick={foo}>
        これはクライアントでイベントが動かない
      </button>
    </div>
  )
}

export default async function Index(c: Context) {
  // const value = await c.env.kv.get("mas")
  // console.log("kv", value)
  //
  return c.render(
    <div className="p-1">
      <h1 className="text-xs">button</h1>
      <Masatoshi />
      <Foo />
      <Bar />
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
