"use client";

import { useState } from "react";
import Input from "../../../components/Input";
import { resetPassword } from "../service";
import { Trans, useLingui } from "@lingui/react/macro";
import Link from "next/link";
import IconSignOut from "@/app/components/icons/IconSignOut";

interface IProps {
  token: string | undefined;
}

export default function FormResetPassword({ token }: IProps) {
  const { t } = useLingui();
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onLogin = async () => {
    if (!password) {
      setMessage("New password are required");
      return;
    }
    const { error } = await resetPassword(token!, password);
    if (error) {
      setMessage(error);
      return;
    }
    setMessage("Reset password succeed");
  };

  if (!token) {
    return (
      <Link href={"/login"} className="mb-[20px] flex gap-2 ml-3 items-center">
        <IconSignOut />
        <p className="text-white">I guess you lost, back to login</p>
      </Link>
    );
  }

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
            inputMode="password"
            value={password}
            onChange={(value: string) => {
              setPassword(value);
              setMessage("");
            }}
            isError={message.length > 0}
            label={t`New Password`}
          />
        </div>
        <p className="text-red-400">{message}</p>

        <button
          className="font-semibold bg-blue-800 px-2 py-2 w-full rounded mt-4 cursor-pointer hover:bg-white hover:text-koi-blue border border-blue-800  hover:outline-white text-white"
          type="submit"
        >
          <Trans>Reset</Trans>
        </button>
      </form>
    </>
  );
}
