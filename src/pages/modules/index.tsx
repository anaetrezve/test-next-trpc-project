import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import Image from "next/image"

export default function Modules() {
  const modules = api.learn.modules.useQuery();

  return (
    <>
      <Head>
        <title>Test T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main className="flex min-h-screen flex-col">
        <div className="container mx-auto">

          <div className="infinite-scroll-x py-4">
            {modules.data && modules.data.modules.map(module => {
              return (
                <div key={module.uid} className="md:flex p-4 rounded overflow-hidden shadow-lg m-6">
                  <div className="md:flex-shrink-0">

                    <Link href={`/modules/${module.uid}`} className="block mt-1 text-lg text-gray-900 hover:underline font-bold">
                      <Image className="rounded-lg md:w-56" width={224} height={148} src={module.social_image_url} alt={module.title} />
                    </Link>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Link href={`/modules/${module.uid}`} className="block mt-1 text-lg text-gray-900 hover:underline font-bold">{module.title}</Link>

                    <p className="mt-2 text-gray-600">{module.summary}</p>
                    <div className="pt-4 pb-2">
                      {module.products.map((tag, index) => {
                        return (<span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </main>
    </>
  );

}
