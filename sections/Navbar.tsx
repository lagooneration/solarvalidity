import React from 'react';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/logoOff.svg" alt="Company Logo" width={40} height={40} />
      </div>
      <div className={styles.companyName}>Citizen Corrects</div>
      <a href="https://www.citizencorrects.com" target="_self" className={styles.logoutButton}>Logout</a>
    </nav>
  );
};

export default Navbar;