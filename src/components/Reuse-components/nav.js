import Link from "next/link";

const NavBar = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a>About us</a>
						</Link>
					</li>
					<li>
						<Link href="/sign-up">
							<a>SignUp</a>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
