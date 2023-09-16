import { Badge, Button } from "@mantine/core"

export function Masa() {
  const foo = () => {
    console.log("click")
  }
  return (
    <div>
      <Button size="xs" onClick={foo} color="green">
        click
      </Button>
      <Badge>aaa</Badge>
    </div>
  )
}
