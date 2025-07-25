import Footer from '@/components/Footer';
import { HomePage } from '@/components/home-page';
import { TokenGate } from '@/components/TokenGate';
import { getSession } from '@/utils/session';

/**
 * The revalidate property determine's the cache TTL for this page and
 * all fetches that occur within it. This value is in seconds.
 */
export const revalidate = 180;

async function Content({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const data = await getSession(await searchParams);
  return (
    <main>
      <h1
        className="
    absolute
    z-[9999]
    bg-[#14151A]
    text-white
    p-4
    rounded-md
    text-x
    font-sans
    shadow-md
    w-auto
    leading-tight
    text-center

    sm:text-xl
    top-[58%] left-1/2 transform -translate-x-1/2 // Default center positioning for small screens
    sm:top-[45%] sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 // Adjust for small screens for middle-center position
    md:top-[23%] md:left-5 md:transform md:-translate-x-0 // Adjust for medium and larger screens
  "
      >
        Let&apos;s get you started <br />
        <span className="font-semibold text-lg">
          {data.client ? data.client.givenName : data.company?.name}
        </span>
      </h1>

      <HomePage />
      <Footer />
    </main>
  );
}
export default function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
  return (
    <TokenGate searchParams={searchParams}>
      <Content searchParams={searchParams} />
    </TokenGate>
  );
}
