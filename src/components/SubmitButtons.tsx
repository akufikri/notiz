"use client"


import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export function SubmitButton() {
      const { pending } = useFormStatus();
      return (
            <>
                  {pending ? (
                        <Button disabled className="w-fit"><Loader2 className="mr-2 w-4 h-4" /> Please wait</Button>
                  ) : (
                        <Button className="w-fit" type="submit">Save now</Button>
                  )}
            </>
      )
}

export function StripeSubscriptionCreationButton() {
      const { pending } = useFormStatus()

      return (
            <>
                  {
                        pending ? (
                              <Button disabled className="w-fit"><Loader2 className="mr-2 w-4 h-4" /> Please wait</Button>
                        ) : (
                              <Button className="w-fit" type="submit">Create Subscription</Button>
                        )
                  }
            </>
      )
}

export function StripePortal() {
      const { pending } = useFormStatus()

      return (
            <>
                  {
                        pending ? (
                              <Button disabled className="w-fit"><Loader2 className="mr-2 w-4 h-4" /> Please wait</Button>
                        ) : (
                              <Button className="w-fit" type="submit">View payment details</Button>
                        )
                  }
            </>
      )
}