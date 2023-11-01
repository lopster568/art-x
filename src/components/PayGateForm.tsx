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
import { ArrowRightSquare, Loader2, LoaderIcon } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

const profileFormSchema = z.object({
  amount: z
    .string({
      required_error: "Amount is required.",
    })
    .min(0.1, {
      message: "Atleast 0.1₹ is required.",
    })
    .max(1000, {
      message: "Maximum amount is 1000₹.",
    }),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function PayGateForm({ sid, children }: { sid: string, children?: React.ReactNode }) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })
  const router = useRouter()
  const [invoiceErr, setInvoiceErr] = useState(false)
  const [invoiceImg, setInvoiceImg] = useState("")
  const [loading, setLoading] = useState(false)
  async function onSubmit(data: ProfileFormValues) {
    if (invoiceImg === "") {
      setInvoiceErr(true)
      return
    }
    setInvoiceErr(false)
    try {
      setLoading(true)
      const payload = { ...data, invoice_img: invoiceImg, sid }
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create-transaction`, {
        method: 'POST',
        body: JSON.stringify(payload)
      })
      router.push("/transactions")
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
              <p className="text-bold text-lg">Step 1</p>
              <FormLabel className="text-4xl text-bold" >Amount</FormLabel>
              <FormControl>
                <Input className="text-2xl py-8" placeholder="100.00₹"  {...field} />
              </FormControl>
              <FormDescription className="text-black" >
                Enter the amount that you are paying
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {
          children
        }
        <FormField
          name="some"
          render={({ field }) => (
            <FormItem className="flex flex-col" >
              <p className="text-bold text-lg">Step 2</p>
              <FormLabel className="text-4xl text-bold">Screenshot</FormLabel>
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

        <Button size={"lg"} className="w-full" type="submit">Submit {loading ? <Loader2 className="ml-4 animate-spin" /> : <ArrowRightSquare className="ml-4" />} </Button>
      </form>
    </Form>
  )
}