import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { StoreProvider } from "easy-peasy";
import "reset-css";
import PlayerLayout from "../components/playerLayout";
import { store } from "../lib/store";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#f2f1f6",
      200: "#f1f1f5",
      300: "#a6a6ac",
      400: "#ebebeb",
      500: "#3d3b42",
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
      <StoreProvider store={store}>
        {Component.authpage ? (
          <Component {...pageProps} />
        ) : (
          <PlayerLayout>
            <Component {...pageProps} />;
          </PlayerLayout>
        )}
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
