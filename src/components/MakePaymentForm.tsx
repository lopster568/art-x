"use client"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
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
import { toast } from "./ui/use-toast"

const profileFormSchema = z.object({
  uid: z
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

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="uid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UserID</FormLabel>
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
        <Button size={"lg"} className="w-full" type="submit">Pay</Button>
      </form>
    </Form>
  )
}