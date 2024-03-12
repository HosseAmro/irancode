import CollectionDetails from "@/components/CollectionDetails/CollectionDetails";
import ButtonLanguage from "@/components/ButtonLanguage/ButtonLanguage";
import React from "react";

export default function Details() {
  return (
    <div className="mt-16">
      <ButtonLanguage />
      <CollectionDetails />
      <CollectionDetails />
      <CollectionDetails />
      <CollectionDetails />
    </div>
  );
}
