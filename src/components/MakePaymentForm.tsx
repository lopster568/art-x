"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "./ui/button"
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
import { ArrowRightSquare, Loader, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const profileFormSchema = z.object({
  sid: z
    .string({
      required_error: "UserID is required.",
    })
    .min(16, {
      message: "Enter your 16 character UserID.",
    })
    .max(16, {
      message: "Enter your 16 character UserID.",
    }),
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

export function MakePaymentForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })

  async function onSubmit(data: ProfileFormValues) {
    setLoading(true)
    try {
      const res = await ((await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/create-transaction`, {
        method: 'POST',
        body: JSON.stringify(data)
      })).json()) as { tid: string }
      router.push(`/transaction/success?tid=${res.tid}`)
    } catch (err) {
      console.log(err)
    }
  }
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="sid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>StoreID</FormLabel>
              <FormControl>
                <Input placeholder="user_12312abcabc" {...field} />
              </FormControl>
              <FormDescription className="text-black" >
                Enter your Tokyo Mall UserID
              </FormDescription>
              <FormMessage />
            </FormItem>

          )}
        />
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
                Enter the amount that you want to pay
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size={"lg"} className="w-full" type="submit">Pay {!loading ? <ArrowRightSquare className="ml-4" /> : <Loader2 className="ml-4 animate-spin" />} </Button>
      </form>
    </Form>
  )
}