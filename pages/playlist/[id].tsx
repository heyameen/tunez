import MainLayout from "../../components/mainLayout";
import SongTable from "../../components/songsTable";
import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

const Playlist = ({ playlist }) => {
  return (
    <MainLayout
      title={playlist.name}
      subtitle="playlist"
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/seed/${playlist.id}/300`}
    >
      <SongTable songs={playlist.songs} />
    </MainLayout>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  let user;

  try {
    user = validateToken(req.cookies.TUNEZ_ACCESS_TOKEN);
  } catch (e) {
    return { redirect: { permanent: false, destination: "/signin" } };
  }
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: user.id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: { playlist },
  };
};

export default Playlist;
