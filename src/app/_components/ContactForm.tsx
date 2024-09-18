"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ContactSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createContact } from "@/actions/contact";
import { useToast } from "@/components/ui/use-toast";

type ContactFormValues = z.infer<typeof ContactSchema>;

export function ContactForm() {
  const { toast } = useToast();

  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues,
  });

  const onSubmit = (values: ContactFormValues) => {
    createContact(values)
      .then((res) => {
        if (res.message === "Contact created") {
          toast({ title: "Muchas gracias, pronto nos contactaremos contigo" });
        }
      })
      .catch((error) =>
        toast({
          title: "Algo salió mal, por favor inténtalo de nuevo más tarde",
          variant: "destructive",
        })
      );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-center">
          <Button type="submit" variant="darkBlue" className="px-12">
            Enviar
          </Button>
        </div>
      </form>
    </Form>
  );
}
