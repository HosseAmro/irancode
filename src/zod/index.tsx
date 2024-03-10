import * as z from "zod";

export const schemaForm = z.object({
  barcode: z.string().length(13, "کد 13 رقمی معتبر نیست."),
});

export type SchemaFormType = z.input<typeof schemaForm>;
