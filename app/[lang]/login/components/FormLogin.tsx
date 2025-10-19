"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Input from "../../../components/Input";
import { initCookies } from "../../../utils/cookies";
import { login } from "../service";
import { Trans, useLingui } from "@lingui/react/macro";
import Modal from "@/app/components/Modal";
import GoogleSignIn from "./GoogleSignin";

interface IProps {
  clientId: string;
}

export default function FormLogin({ clientId }: IProps) {
  const { t } = useLingui();
  const router = useRouter();
  const searchParams = useSearchParams();
  const myParam = searchParams.get("message");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const isSessionExpired = myParam === "session-expired";
  const [open, setOpen] = useState(isSessionExpired);
  const [isLoading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    if (!username || !password) {
      setMessage("Username and password are required");
      return;
    }
    const { data, error } = await login(username, password);

    if (error) {
      setMessage(error);
      setLoading(false);

      return;
    }
    await initCookies({ token: data.token });
    setLoading(false);

    router.push("/");
  };

  return (
    <>
      <Modal
        open={open}
        onCloseAction={() => {
          setOpen(false);
        }}
        title="Session Expired"
      />
      <div className="flex flex-col gap-4 item-center w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <div className="md:w-[60vh] flex flex-col gap-1">
            <Input
              inputMode="text"
              value={username}
              onChange={(value: string) => {
                setUsername(value?.trim());
                setMessage("");
              }}
              isError={message.length > 0}
              label={t`Username`}
            />
            <Input
              inputMode="password"
              value={password}
              onChange={(value: string) => {
                setPassword(value);
                setMessage("");
              }}
              isError={message.length > 0}
              label={t`Password`}
            />
          </div>
          <p className="text-red-400">{message}</p>

          <button
            className="font-semibold bg-blue-800 px-2 py-2 w-full rounded mt-4 cursor-pointer hover:bg-white hover:text-koi-blue border border-blue-800  hover:outline-white text-white"
            type="submit"
          >
            {isLoading ? <p>loading...</p> : <Trans>Login</Trans>}
          </button>
        </form>
        <div className="dark:border-t-gray-800 border-t-gray-100 border-t-1 my-1"></div>
        <div className="w-full flex justify-center">
          <GoogleSignIn clientId={clientId} />
        </div>
      </div>
    </>
  );
}
