import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import MainLayout from "../components/mainLayout";
import prisma from "../lib/prisma";
import { useMe } from "../lib/hooks";

const Home = ({ artists }) => {
  const { user } = useMe();
  return (
    <MainLayout
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description={`${user?.playlistsCount} public playlists`}
      image="https://www.ameenalade.dev/_next/image?url=%2Fstatic%2Fimages%2Fameen2.jpg&w=384&q=100"
    >
      <Box paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist, id) => (
            <Box marginX="10px" width="20%">
              <Box bg="gray.300" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src={`https://i.pravatar.cc/300?u=${id}`}
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists },
  };
};

export default Home;
