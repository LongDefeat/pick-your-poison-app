import Head from "next/head";
import LoginForm from "@/components/auth/LoginForm";
import Navigation from "@/components/routes-nav/Navigation";

function login() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Vibur:400"
          rel="stylesheet"
          type="text/css"
        ></link>
        <title>Login</title>
      </Head>
      <Navigation />
      <LoginForm />
    </>
  );
}

export default login;
