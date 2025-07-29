"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { fromTheme } from "tailwind-merge";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  tel: z.string().min(10).max(15),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export default function Contact() {
  const t = useTranslations('ContactUs');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      tel: "",
      email: "",
      message: "",
    },
  });

  // ! Change to API call or form submission handler
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex flex-col bg-slate-800 ">
      <div className="bg-slate-900 mask-b-from-60% mask-b-to-100% bg-cover bg-[url(/bg-contact.jpg)] bg-blend-hard-light justify-items-center h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
        <div className="absolute w-full h-screen backdrop-blur-[3px] z-0 bg-slate-900 opacity-70" />
        <main className="relative flex flex-col gap-16 z-10 m-20">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              {t('title')}
            </h2>
            <p className="text-lg sm:text-xl text-center">
              {t('briefDescription')}
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mt-8 p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('form.header.name')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('form.placeholder.name')} {...field} />
                      </FormControl>
                      <FormDescription>
                        {t('form.description.name')}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('form.header.telephone')}</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="0000000000" {...field} />
                      </FormControl>
                      <FormDescription>
                        {t('form.description.telephone')}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('form.header.email')}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="abc@mail.com" {...field} />
                      </FormControl>
                      <FormDescription>
                        {t('form.description.email')}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('form.header.message')}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t('form.placeholder.message')} {...field} />
                      </FormControl>
                      <FormDescription>
                        {t('form.description.message')}
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="col-start-1 col-end-3" type="submit">{t('form.submit')}</Button>
              </form>
            </Form>
          </div>
        </main>
      </div>
    </div>
  );
}
