import Head from "next/head";
import { api } from "~/utils/api";
import { useRouter } from 'next/router';

export default function SingleModule() {
  const router = useRouter();
  const { moduleId } = router.query;
  const moduleItem = api.learn.module.useQuery({ moduleId: moduleId as string });

  const moduleTitle = () => {
    return moduleItem.data && moduleItem.data.module?.title;
  }

  return (
    <>
      <Head>
        <title>{moduleTitle()}</title>
      </Head>

      <main className="flex min-h-screen flex-col">
        <div className="container flex flex-col gap-12 px-4">
          <h2 className="text-xl">{moduleTitle()}</h2>
        </div>
      </main>
    </>
  );

}
