import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";

export const CardComponent = ({name}) => {
    const [counter, setCounter] = useState(0);

    return (
       <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Times {name} Clicked</CardTitle>
        <CardDescription>
         {counter}
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button onClick ={() => setCounter(counter + 1 )} className="w-full">
          Click Me
        </Button>
      </CardFooter>
    </Card>
    )
}