import "@/styles/globals.css";
import CurrentUserContext from "../components/auth/CurrentUser";

export default function App({ Component, pageProps }) {
  return (
    <CurrentUserContext>
      <Component {...pageProps} />;
    </CurrentUserContext>
  );
}
