import Head from "next/head";
import { api } from "~/utils/api";
import { useRouter } from 'next/router';

export default function SingleModule() {
  const router = useRouter();
  const { moduleId } = router.query;
  const moduleItem = api.learn.module.useQuery({ moduleId: moduleId as string });
  const learnModule = moduleItem.data && moduleItem.data.module;

  if(moduleItem.isLoading) return <p>Loading...</p>

  return (
    <>
      <Head>
        <title>{learnModule?.title}</title>
      </Head>

      <main className="flex min-h-screen flex-col">
          <div className="py-16 px-6 sm:px-8">
            <header>
              <h1 className="flex flex-col items-center">
                <span className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{learnModule?.title}</span>
              </h1>
              <hr className="mt-8 border-t-2 w-20 mx-auto mb-4" />
            </header>

            <div className="prose prose-pink prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto">

              <article className="container-lg">
                <p>{learnModule?.summary}</p>
              </article>
              <hr className="mt-8 border-t-2 w-20 mx-auto" />
                    <div className="pt-4 pb-2">
                      <p>Total review: {learnModule?.rating.count}</p>
                      <p>Rating: {learnModule?.rating.average}</p>
                    </div>

                    <div className="pt-4 pb-2">
                      <span>Level: </span>
                      {learnModule?.levels.map((level, index) => {
                        return (<span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{level}</span>
                        )
                      })}
                    </div>

                    <div className="pt-4 pb-2">
                      <span>Roles: </span>
                      {learnModule?.roles.map((role, index) => {
                        return (<span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{role}</span>
                        )
                      })}
                    </div>
                    <div className="pt-4 pb-2">
                      <span>Tags: </span>
                      {learnModule?.products.map((tag, index) => {
                        return (<span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                        )
                      })}
                    </div>
            </div>
          </div>


      </main>
    </>
  );

}
