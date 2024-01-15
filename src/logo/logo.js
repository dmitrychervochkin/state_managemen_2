import styles from './logo.module.css';
import logo from '../logo.svg';

export function LogoContainer() {
	return (
		<header className={styles.appHeader}>
			<img src={logo} className={styles.appLogo} alt="logo" />
		</header>
	);
}
