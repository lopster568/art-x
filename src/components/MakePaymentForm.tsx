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
import { ArrowRightSquare, Loader2 } from "lucide-react"
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
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function MakePaymentForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  })
  const router = useRouter()
  async function onSubmit(data: ProfileFormValues) {
    setLoading(true)
    router.replace(`${process.env.NEXT_PUBLIC_BASE_URL}/paygate?sid=${data.sid}`)
  }


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
        <Button size={"lg"} className="w-full" type="submit">Pay {loading ? <Loader2 className="ml-4" /> : <ArrowRightSquare className="ml-4" />} </Button>
      </form>
    </Form>
  )
}