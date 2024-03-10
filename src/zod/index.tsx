import * as z from "zod";

export const schemaForm = z.object({
  barcode: z.string().length(13, "کد 13 رقمی معتبر نیست."),
});

export type SchemaFormType = z.input<typeof schemaForm>;

export const schemaSign = z.object({
  resultCode: z.number(),
  resultMessage: z.string(),
  info: z.object({
    session: z.string(),
    date: z.string(),
    phoneNumber: z.string(),
  }),
});

export type schemaSignType = z.input<typeof schemaSign>;

export const schemaProducts = z.object({
  resultCode: z.number(),
  resultMessage: z.string(),
  info: z.object({
    GTINCode: z.string(),
    containsErrors: z.boolean(),
    errorMessage: z.string().or(z.null()),
    resultData: z.array(z.object({}).catchall(z.string().or(z.null()))),
  }),
});

export type schemaProductsType = z.input<typeof schemaProducts>;
