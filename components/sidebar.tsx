import NextImage from "next/image";
import NextLink from "next/link";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import { usePlaylist } from "../lib/hooks";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/createPlaylist",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const Sidebar = () => {
  const { playlists } = usePlaylist();
  return (
    <Box
      height="100%"
      width="100%"
      bg="gray.200"
      paddingX="5px"
      color="gray.300"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage
            alt="Company Logo"
            src="/tunez.png"
            height={60}
            width={250}
          />
        </Box>
        <Box marginBottom="20px">
          <Box>
            <List spacing={2}>
              {navMenu.map((menu) => (
                <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                  <LinkBox>
                    <LinkOverlay as={NextLink} href={menu.route} passHref>
                      <ListIcon
                        as={menu.icon}
                        color="gray.400"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </LinkBox>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box marginTop="20px">
          <List spacing={2}>
            {musicMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <LinkOverlay as={NextLink} href={menu.route} passHref>
                    <ListIcon
                      as={menu.icon}
                      color="gray.400"
                      marginRight="20px"
                    />
                    {menu.name}
                  </LinkOverlay>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box height="calc(100% - 220px)" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists?.map((playlist) => (
              <ListItem paddingX="20px" key={playlist.id}>
                {/* <LinkBox>
                  <LinkOverlay as={NextLink} href="/" passHref>
                    {playlist.name}
                  </LinkOverlay>
                </LinkBox> */}
                <LinkBox>
                  <NextLink
                    href={{
                      pathname: "/playlist/[id]",
                      query: { id: playlist.id },
                    }}
                    passHref
                  >
                    <LinkOverlay>{playlist.name}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
