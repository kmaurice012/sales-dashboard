import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>R33C3 Dev</div>
      <div className={styles.text}>© All rights reserved.</div>
    </div>
  );
};

export default Footer;
