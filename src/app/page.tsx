import { TokenGate } from '@/components/TokenGate';
import Footer from '@/components/Footer';
import { LandingPage } from '@/components/LandingPage';
import { getSession } from '@/utils/session';

async function Content({ searchParams }: { searchParams: SearchParams }) {
  const data = await getSession(searchParams);
  const displayName = data.client?.givenName || 'Guest';

  return (
    <main>
      <h1 className="absolute top-5 left-5 z-[9999] bg-[#14151A] text-white p-2.5 rounded-md text-lg font-sans shadow-md w-auto">
        Welcome! <code>{displayName}</code>
      </h1>
      <LandingPage />
      <Footer />
    </main>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <TokenGate searchParams={searchParams}>
      <Content searchParams={searchParams} />
    </TokenGate>
  );
}
