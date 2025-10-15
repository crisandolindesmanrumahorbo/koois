import LoginNavbar from "../../theme/LoginNavbar";
import { withLinguiPage } from "@/app/hoc/useLingui";
import FormResetPassword from "./components/FormResetPassword";

type Params = Promise<{ lang: string; symbol: string }>;

//need to add params because used on withLinguiPage
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Login = (_props: { params: Params }) => {
  return (
    <>
      <LoginNavbar />
      <div className="w-full min-h-screen flex justify-center items-center">
        <div
          className="flex xl:flex-row flex-col items-center sm:gap-10 gap-2 border 
          dark:border-gray-600 border-gray-400 p-12 mx-4 rounded-2xl h-full shadow-xl"
        >
          <div className="h-full w-full">
            <FormResetPassword />
          </div>
        </div>
      </div>
    </>
  );
};

export default withLinguiPage(Login);
