import { withLinguiPage } from "@/app/hoc/useLingui";
import Link from "next/link";

type Params = Promise<{ lang: string; symbol: string }>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomeLandingPage = (_props: { params: Params }) => {
  return (
    <div>
      <div className="relative isolate px-6 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0061ef] to-[#ff7e1d] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 dark:text-gray-400 text-gray-800 ring-1 ring-white/10 hover:ring-white/20">
              Mindful Assessments. Teacher in Control
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight dark:text-white text-black sm:text-7xl">
              Bikin soal cepat, tetap kamu yang approve
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium dark:text-gray-400 text-gray-800 sm:text-xl/8">
              Evidence first, auto grade, reporting jelas. Guru kendali penuh,
              siswa belajar lebih terarah.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/login"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get started
              </Link>
              <Link
                href="/login"
                className="text-sm/6 font-semibold text-black dark:text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0061ef] to-[#ff7e1d] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default withLinguiPage(HomeLandingPage);
