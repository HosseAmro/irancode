"use client";

import Camera from "@/components/Camera/Camera";
import Form from "@/components/Form/Form";
import { useContext } from "@/context";
import { Sing } from "@/api/apiSign";
import NotFound from "./not-found";
import { useEffect } from "react";
import Loading from "./loading";

const url = "";

export default function Home() {
  const { state, overWrite } = useContext();

  useEffect(() => {
    async function lod() {
      const res = await Sing(url, overWrite);
    }
    lod();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {state.session === null ? (
        <Loading title="در حال ارسال درخواست..." />
      ) : (
        <>
          {state.session !== "" ? (
            <main className="flex flex-col h-full w-full bg-[#37281d] text-white">
              <Camera />
              <Form />
            </main>
          ) : (
            <NotFound title="این صفحه مجاز نیست" />
          )}
        </>
      )}
    </>
  );
}
