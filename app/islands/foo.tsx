export default function Foo() {
  const foo = () => {
    console.log("click")
  }
  return (
    <div>
      <div onClick={foo}>Foo これはイベントが動く</div>
    </div>
  )
}
