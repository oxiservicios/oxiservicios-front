"use server";

import { prisma } from "@/lib/prisma";

export async function createContact(values: any) {
  try {
    await prisma.contact.create({ data: values });
    return { message: "Contact created" };
  } catch {
    throw new Error("Something went wrong");
  }
}
