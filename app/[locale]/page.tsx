import { useTranslations } from "next-intl";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="flex flex-col bg-slate-800">
      <div className="bg-slate-900 mask-b-from-60% mask-b-to-100% bg-[url(/bg-main.jpg)] bg-blend-hard-light  grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="absolute w-full h-screen backdrop-blur-[3px] z-0 bg-slate-900 opacity-70" />
        <main className="flex flex-col gap-16 row-start-2 items-center justify-center z-10">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-center">
              {t('companyName')}
            </h1>
            <p className="text-lg sm:text-xl text-center">
              {t('breifDescription')}
            </p>
          </div>

          <div className="flex gap-4 items-center flex-col">
            <Link
            className="flex gap-4 items-center flex-col"
            href="/#about">
              <div className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]">
                {t('aboutButton')}
              </div>
              <ArrowDownIcon className="size-6 sm:size-8 text-white animate-bounce" />
            </Link>
          </div>
        </main>
      </div>
      <div
        className="h-screen flex flex-col justify-center items-center p-20"
        id="about"
      >
        <span className="z-20 flex flex-col justify-center items-center gap-8 rounded-xl backdrop-blur-lg bg-white/10 p-8 shadow-md max-w-3xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-center">
            {t('introHeader')}
          </h2>
          <div className="text-center flex flex-col justify-center items-center gap-4">
            <p>
              <b>{t('companyName')}</b> {t('firstFullDescription')}
            </p>
            <p>
              {t('secondFullDescription')}
            </p>
          </div>
        <div className="flex gap-4 items-center flex-col">
            <Link
            className="flex gap-4 items-center flex-col"
            href="/product">
              <div className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]">
                {t('explore')}
              </div>
            </Link>
          </div>
        </span>
        <div className="absolute z-10 h-screen w-full bg-cover bg-slate-900 mask-t-from-10% mask-t-to-80% bg-[url(/bg-footer.jpg)] bg-blend-hard-light" />
        <div className="absolute w-full h-screen backdrop-blur-[3px] z-10 mask-t-from-10% mask-t-to-80% bg-slate-900 opacity-70" />
      

      </div>
    </div>
  );
}
