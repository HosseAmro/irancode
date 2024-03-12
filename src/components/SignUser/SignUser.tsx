"use client";

import { useContext } from "@/context";
import NotFound from "@/app/not-found";
import { Sing } from "@/api/apiSign";
import Loading from "@/app/loading";
import { useEffect } from "react";
import React from "react";

const url =
  "LeJwXSdEqUHbrSwxS9FmDOd71BDtc9gEIAfHLKMQtBypQGmgmxTwtpxqel+mDkPupTL9Yx6QtUVQB8R3ivvJne8fgxO/3O6yEzUOQYECTFY";

export default function SignUser({ children }: { children: React.ReactNode }) {
  const { state, overWrite } = useContext();

  useEffect(() => {
    async function lod() {
      const res = await Sing(url, state, overWrite);
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
            <> {children}</>
          ) : (
            <NotFound title="این صفحه مجاز نیست" />
          )}
        </>
      )}
    </>
  );
}
