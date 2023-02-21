import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import NextImage from "next/image";
// import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" bg="gray.200" color="white">
      <Flex
        justify="center"
        align="center"
        height="100px"
        // borderBottom="white 1px solid"
      >
        <NextImage
          alt="Company logo"
          src="/tunez.png"
          height={60}
          width={120}
        />
      </Flex>
      <Flex justify="center" align="center" height="calc(100vh-100px)">
        <Box padding="50px" bg="white" borderRadius="6px">
          <form onSubmit={handleSubmit}>
            <Input
              focusBorderColor="orange.100"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              type="email"
              color="black"
              borderColor="gray.300"
            />
            <Input
              focusBorderColor="orange.100"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              type="password"
              color="black"
              borderColor="gray.300"
            />
            <Button
              type="submit"
              bg="orange.100"
              isLoading={isLoading}
              sx={{ "&:hover": { bg: "green.300" } }}
            >
              {mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
