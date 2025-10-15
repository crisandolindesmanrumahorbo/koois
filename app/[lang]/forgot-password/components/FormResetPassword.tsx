"use client";

import { useState } from "react";
import Input from "../../../components/Input";
import { forgotPassword } from "../service";
import { Trans, useLingui } from "@lingui/react/macro";

export default function FormResetPassword() {
  const { t } = useLingui();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onLogin = async () => {
    if (!email) {
      setMessage("Email are required");
      return;
    }
    const { error } = await forgotPassword(email);
    if (error) {
      setMessage(error);
      return;
    }
    setMessage("Reset password sent to email");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}
      >
        <div className="md:w-[60vh] flex flex-col gap-1">
          <Input
            inputMode="text"
            value={email}
            onChange={(value: string) => {
              setEmail(value?.trim());
              setMessage("");
            }}
            isError={message.length > 0}
            label={t`Email`}
          />
        </div>
        <p className="text-red-400">{message}</p>

        <button
          className="font-semibold bg-blue-800 px-2 py-2 w-full rounded mt-4 cursor-pointer hover:bg-white hover:text-koi-blue border border-blue-800  hover:outline-white text-white"
          type="submit"
        >
          <Trans>Login</Trans>
        </button>
      </form>
    </>
  );
}
