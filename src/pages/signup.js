import React from "react";
import Head from "next/head";
import SignupForm from "../components/auth/SignupForm";
import Navigation from "../components/routes-nav/Navigation";
import styles from "../styles/Signup.module.css";

export default function About() {
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
        <title>Signup</title>
      </Head>
      <Navigation />
      <h1>Sign up and join us today!</h1>
      <SignupForm />
    </>
  );
}
