import Footer from '@/components/Footer';
import { LandingPage } from '@/components/landing-page';
import { TokenGate } from '@/components/TokenGate';
import { getSession } from '@/utils/session';

/**
 * The revalidate property determine's the cache TTL for this page and
 * all fetches that occur within it. This value is in seconds.
 */
export const revalidate = 180;

async function Content({ searchParams }: { searchParams: SearchParams }) {
  const data = await getSession(searchParams);
  // Console log the data to see what's available
  // You can see these logs in the terminal where
  // you run `yarn dev`
  console.log({ data });
  return (
    <main>
      <h1
        className="
          absolute
          top-[18%]
          left-5
          z-[9999]
          bg-[#14151A]
          text-white
          p-4
          rounded-md
          text-xl
          font-sans
          shadow-md
          w-auto
          leading-tight
          text-center
        "
      >
        Let&apos;s get you started <br />
        <span className="font-semibold text-lg">
          {' '}
          {data.client ? data.client.givenName : data.company?.name}
        </span>
      </h1>

      <LandingPage />
      <Footer />
    </main>
  );
}
export default function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <TokenGate searchParams={searchParams}>
      <Content searchParams={searchParams} />
    </TokenGate>
  );
}
