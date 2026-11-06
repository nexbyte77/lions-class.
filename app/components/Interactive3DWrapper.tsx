"use client";

import dynamic from "next/dynamic";

const Interactive3D = dynamic(
  () => import("./Interactive3D"),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function Interactive3DWrapper() {
  return <Interactive3D />;
}