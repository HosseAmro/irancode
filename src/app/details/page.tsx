"use client";

import CollectionDetails from "@/components/CollectionDetails/CollectionDetails";
import ButtonLanguage from "@/components/ButtonLanguage/ButtonLanguage";
import { useSearchParams } from "next/navigation";
import { ZodTypeAny, objectInputType } from "zod";
import { useContext } from "@/context";
import NotFound from "../not-found";
import React from "react";

export default function Details() {
  const { state } = useContext();

  const pathname = useSearchParams();
  const barcode = pathname.get("barcode");

  let allObj: objectInputType<{}, ZodTypeAny, "passthrough">[] | undefined =
    undefined;

  if (typeof barcode === "string") {
    allObj = state.allBarcodeDetails[barcode]?.info.resultData;
  }
  return (
    <div className="mt-16">
      <ButtonLanguage />
      {state.language === "farsi" ? (
        <>
          {allObj !== undefined ? (
            <>
              <CollectionDetails
                title="محصول"
                details={{
                  dbName: [
                    "ProductName",
                    "FunctionalName",
                    "VariantText",
                    "brand",
                    "NationalCode",
                  ],
                  showName: ["نام", "نام عملیاتی", "نوع", "برند", "کد کالا"],
                }}
                allObj={allObj}
              />
              <CollectionDetails
                title="توضیحات لیبل"
                details={{
                  dbName: ["LabelDesc"],
                  showName: ["توضیحات لیبل"],
                }}
                full
                allObj={allObj}
              />
              <CollectionDetails
                title="لیبل(Lable)"
                details={{
                  dbName: ["LabelUnit", "LabelLength", "WeightUnit"],
                  showName: ["واحد", "طول", "عرض"],
                }}
                allObj={allObj}
              />
              <CollectionDetails
                title="بسته بندی"
                details={{
                  dbName: [
                    "PackingLevelTitle",
                    "PackingTypeTitle",
                    "packingtype",
                  ],
                  showName: ["سطح", "نوع", "نوع"],
                }}
                allObj={allObj}
              />
              <CollectionDetails
                title="محتوای خالص"
                details={{
                  dbName: ["ContentUnit", "NetContent"],
                  showName: ["واحد", "محتوای خالص"],
                }}
                allObj={allObj}
              />
              <CollectionDetails
                title="مشخصات"
                details={{
                  dbName: ["type", "size", "material", "model", "quantity"],
                  showName: ["نوع", "سایز", "جنس", "مدل", "تعداد"],
                }}
                allObj={allObj}
              />
              <CollectionDetails
                title="مشخصات"
                details={{
                  dbName: [
                    "ManufacturerCountryName",
                    "madein",
                    "LanguageName",
                    "GPC",
                    "IranCode",
                    "distributor",
                    "producer",
                    "IsLegal",
                    "JuridicalID",
                  ],
                  showName: [
                    "کشور سازنده",
                    "کشور سازنده",
                    "زبان",
                    "جایگاه درختواره",
                    "ایران کد",
                    "مرجع عرضه کننده",
                    "تولید کننده",
                    "شخصیت",
                    "شناسه حقوقی",
                  ],
                }}
                allObj={allObj}
              />
            </>
          ) : (
            <NotFound title={"محصول موجود نیست"} />
          )}
        </>
      ) : (
        <>
          {allObj !== undefined ? (
            <>
              <CollectionDetails
                title="Products"
                details={{
                  dbName: [
                    "ProductNameEn",
                    "FunctionalNameEn",
                    "VariantTextEn",
                    "BrandEn",
                  ],
                  showName: ["Name", "Functional Name", "Unite", "Brand"],
                }}
                allObj={allObj}
              />
              <CollectionDetails
                title="Lable Explain"
                details={{
                  dbName: ["LabelDescEn"],
                  showName: ["Lable Explain"],
                }}
                full
                allObj={allObj}
              />
            </>
          ) : (
            <NotFound title={"The product is not available"} />
          )}
        </>
      )}
    </div>
  );
}
