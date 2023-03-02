import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PlayerLayout from "../components/playerLayout";
import "reset-css";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#f2f1f6",
      200: "#f3f3f3",
      300: "#a6a6ac",
      400: "#3d3b42",
    },
    orange: {
      100: "#EE732F",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});
const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      {Component.authpage ? (
        <Component {...pageProps} />
      ) : (
        <PlayerLayout>
          <Component {...pageProps} />;
        </PlayerLayout>
      )}
    </ChakraProvider>
  );
};

export default MyApp;
