import { NavLink } from "react-router-dom";

export const Nav = () => {
	return (
		<nav>
			<ul className="content flex gap-4 bg-slate-500 px-4 py-2">
				<li>
					<NavLink to="/simple-form">Welcome</NavLink>
				</li>
				<li>
					<NavLink to="/employees">Employees</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
			</ul>
		</nav>
	);
};
