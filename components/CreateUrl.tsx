"use client";

import { createUrl } from "@/app/actions";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

export default function CreateUrl() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <>
      <h1 className="text-3xl font-bold pt-10 md:text-4xl">Url Shortener</h1>
      <p className="text-white/30 pt-2 pb-10 text-center text-balance">
        There is no Delete Button cause laziness, Thanks! Also Technically Short
        url are not short cause my demo domain name is very big its just a demo
      </p>
      <form
        ref={ref}
        className="flex flex-col gap-4 text-black w-full shadow-2xl"
        action={async (formData) => {
          await createUrl(formData);
          ref.current?.reset();
        }}
      >
        <input
          type="url"
          name="longUrl"
          placeholder="Your Url"
          required
          className="h-10 border border-gray-300 rounded-md p-2"
        />

        <AddButton />
      </form>
    </>
  );
}

export function AddButton() {
  const data = useFormStatus();
  const pending = data.pending;

  return (
    <button
      type="submit"
      disabled={pending}
      className="p-4 text-white font-bold bg-blue-500 rounded-md w-full"
    >
      {pending ? <>Generating...</> : <>Generate Url</>}
    </button>
  );
}
