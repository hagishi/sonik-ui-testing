export function Bar() {
  const foo = () => {
    console.log("bar click")
  }
  return (
    <div>
      <div onClick={foo}>bar これは動かない</div>
    </div>
  )
}
