"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "./ui/button"
import FileBase64 from "react-file-base64"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { ArrowRightSquare } from "lucide-react"
import { useState } from "react"

const profileFormSchema = z.object({
  amount: z
    .string({
      required_error: "Amount is required.",
    })
    .min(0.1, {
      message: "Atleast 0.1$ is required.",
    })
    .max(1000, {
      message: "Maximum amount is 1000$.",
    }),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function PayGateForm({sid} : {sid: string} ) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })
  const [invoiceErr, setInvoiceErr] = useState(false)
  const [invoiceImg, setInvoiceImg] = useState("")

  async function onSubmit(data: ProfileFormValues) {
    if (invoiceImg === "") {
      setInvoiceErr(true)
      console.log(invoiceErr)
      return
    }
    setInvoiceErr(false)
    try {
      const payload = { ...data, invoice_img: invoiceImg, sid }
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create-transaction`, {
        method: 'POST',
        body: JSON.stringify(payload)
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder="10.00$" {...field} />
              </FormControl>
              <FormDescription className="text-black" >
                Enter the amount that you are paying
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="some"
          render={({ field }) => (
            <FormItem className="flex flex-col" >
              <FormLabel>Screenshot</FormLabel>
              <FormControl>
                <FileBase64
                  onDone={({ base64 }: { base64: string }) => setInvoiceImg(base64)}
                />
              </FormControl>
              <FormDescription className="text-black" >
                Upload the screenshot of the payment
              </FormDescription>
              {
                invoiceErr &&
                <p className="text-red-500" >Payment Screenshot is required</p>
              }
            </FormItem>
          )}
        />

        <Button size={"lg"} className="w-full" type="submit">Submit <ArrowRightSquare className="ml-4" /> </Button>
      </form>
    </Form>
  )
}