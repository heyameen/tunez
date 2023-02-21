import fetcher from "./fetcher";

export const auth = (
  mode: "signin" | "signup",
  body: { email: string; password: string }
) => {
  console.log("BODY", body);
  return fetcher(`${mode}`, body);
};
