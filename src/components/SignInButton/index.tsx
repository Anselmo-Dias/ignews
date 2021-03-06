import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SignInButton() {
  const userIslogged = false;

  return userIslogged ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d361" />
      Anselmo Alves
      <FiX className={styles.closeImg} color="#737380" />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  );
}
