import { socialLinks } from "../../constants";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<Logo />

			<div className="social-links">
				{socialLinks.map(({ href, label, icon: Icon }) => (
					<a
						href={href}
						aria-label={label}
						key={label}
						className="social-icon"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon />
					</a>
				))}
			</div>
		</footer>
	);
};

export default Footer;
