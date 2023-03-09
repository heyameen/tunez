import PrismaClient from "../lib/prisma";
import bcrypt from "bcrypt";
import { artistsData } from "./songsData";

const prisma = PrismaClient;

const run = async () => {
  await Promise.all(
    artistsData.map(async (artist) => {
      return prisma.artist.upsert({
        where: { name: artist.name },
        update: {},
        create: {
          name: artist.name,
          songs: {
            create: artist.songs.map((song) => ({
              name: song.name,
              duration: song.duration,
              url: song.url,
            })),
          },
        },
      });
    })
  );

  const salt = bcrypt.genSaltSync();
  const user = await prisma.user.upsert({
    where: { email: "ameen@test.com" },
    update: {},
    create: {
      email: "ameen@test.com",
      password: bcrypt.hashSync("password", salt),
      firstName: "Ameen",
      lastName: "Alade",
    },
  });

  const songs = await prisma.song.findMany({});
  await Promise.all(
    new Array(10).fill(1).map(async (_, i) => {
      return prisma.playlist.create({
        data: {
          name: `Playlist #${i + 1}`,
          songs: {
            connect: songs.map((song) => ({
              id: song.id,
            })),
          },
          user: {
            connect: { id: user.id },
          },
        },
      });
    })
  );
};

run()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
