import { TokenGate } from '@/components/TokenGate';
import Footer from '@/components/Footer';
import { LandingPage } from '@/components/LandingPage';
import { getSession } from '@/utils/session';

async function Content({ searchParams }: { searchParams: SearchParams }) {
  const data = await getSession(searchParams);

  return (
    <main>
      <LandingPage client={data.client} />
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
