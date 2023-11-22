import { getServerSession } from '@/actions/auth';
import { getUserTracks } from '@/actions/playlist';
import CollectionHeader from '@/app/(collections)/(components)/CollectionHeader';
import { CollectionType } from '@/types/collections';
import { redirect } from 'next/navigation';

export default async function Files() {
  const session = await getServerSession();
  if (!session) return redirect('/');

  const myTracks = await getUserTracks(session.token);

  return (
    <main className="base-container flex flex-col">
      <CollectionHeader
        title={'Your Files'}
        type={CollectionType.Files}
        releaseDate={new Date()}
        tracks={myTracks}
        owner={{
          name: session.username,
          redirect: `/user/${session.username}`,
        }}
      />
    </main>
  );
}
