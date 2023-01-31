import { Box } from "@chakra-ui/layout";
import Sidebar from "./sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box
        position="absolute"
        width="250px"
        top="0"
        left="0"
        height="calc(100vh - 100px)"
      >
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="150px">
        {children}
      </Box>
      <Box position="absolute" bottom="0" left="0" height="100px" width="100%">
        Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
