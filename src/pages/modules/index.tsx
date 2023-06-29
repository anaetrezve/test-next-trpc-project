import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

export default function Modules() {
  const modules = api.learn.modules.useQuery();

  return (
    <>
      <Head>
        <title>Test T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col">
        <div className="container flex flex-col gap-12 px-4">
          {modules.data && modules.data.modules.map(module => {
            return (
              <Link key={module.uid} href={`/modules/${module.uid}`}>
                <h2 className="text-xl">{module.title}</h2>
                <p>{module.summary}</p>
              </Link>
            )
          })}
        </div>
      </main>
    </>
  );

}
