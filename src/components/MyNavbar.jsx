import { Nav, Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function MyNavbar(props) {
	const navBarConfig = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "My Location",
			link: "/my-location",
		},
		{
			name: "OpenWeather API",
			link: "https://openweathermap.org/",
		},
		{
			name: "My GitHub",
			link: "https://github.com/FraLobbia",
		},
		{
			name: "My LinkedIn",
			link: "https://www.linkedin.com/in/francesco-lobbia/",
		},
	];

	return (
		<Navbar expand="md" collapseOnSelect>
			<Container fluid className="p-0">
				<Navbar.Brand href="#">
					<img
						src={props.logo}
						className="App-logo ms-4"
						alt="logo"
						style={{ height: "150px" }}
					/>
				</Navbar.Brand>
				<Navbar.Toggle
					className="ms-auto me-5"
					aria-controls="myNavbar"
				/>

				<Navbar.Collapse id="myNavbar" className="text-center">
					<hr className="d-md-none" />

					<Nav className=" align-items-center ">
						{navBarConfig.map((navItem, index) =>
							index === 2 ? (
								<LinkContainer
									to={navItem.link}
									key={`navItem-${index}`}>
									<Nav.Link
										className="nav-link mx-1"
										target={index > 1 ? "_blank" : ""}>
										<div className="vr mx-3"></div>
										{navItem.name}
									</Nav.Link>
								</LinkContainer>
							) : (
								<LinkContainer
									to={navItem.link}
									key={`navItem-${index}`}>
									<Nav.Link
										className={
											index < 2
												? "fs-3 nav-link mx-1"
												: "nav-link mx-1"
										}
										target={index > 1 ? "_blank" : ""}>
										{navItem.name}
									</Nav.Link>
								</LinkContainer>
							)
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNavbar;
