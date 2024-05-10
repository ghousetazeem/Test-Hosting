
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
    Navbar as MTNavbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes, action }) {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );

        // Remove the event listener when component unmounts
        return () => {
            window.removeEventListener(
                "resize",
                () => window.innerWidth >= 960 && setOpenNav(false)
            );
        };
    }, []);

    const handleClickAboutUs = () => {
        const aboutUsSection = document.getElementById("aboutus");
        if (aboutUsSection) {
            aboutUsSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleClickServices = () => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
            const navbarHeight = document.querySelector(".mt-navbar").offsetHeight;
            // Scroll to the section with additional padding for the navigation bar
            window.scrollTo({
                top: servicesSection.offsetTop - navbarHeight,
                behavior: "smooth",
            });
        }
    };
    const handleClickPlans = () => {
        const plansSection = document.getElementById("plans");
        if (plansSection) {
            plansSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    const handleClickContactUs = () => {
        const contactUsSection = document.getElementById("contactus");
        if (contactUsSection) {
            contactUsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const filteredRoutes = routes.filter(route => route.name); // Filter out routes with no name

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {filteredRoutes.map(({ name, path, icon, href, target }) => (
                <Typography
                    key={name}
                    as="li"
                    variant="small"
                    color="inherit"
                    className="capitalize"
                >
                    {href ? (
                        <a
                            href={href}
                            target={target}
                            className="flex items-center gap-1 p-1 font-bold"
                        >
                            {icon &&
                                React.createElement(icon, {
                                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                                })}
                            {name}
                        </a>
                    ) : (
                        <Link
                            to={path}
                            target={target}
                            className="flex items-center gap-1 p-1 font-bold"
                        >
                            {icon &&
                                React.createElement(icon, {
                                    className: "w-[18px] h-[18px] opacity-75 mr-1",
                                })}
                            {name}
                        </Link>
                    )}
                </Typography>
            ))}
        </ul>
    );

    return (
        <MTNavbar color="transparent" className="mt-navbar p-3 pb-0">
            <div className="container mx-auto flex items-center justify-between text-white">
                <Link to="/">
                    <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
                        <span className="text-red-900"> {brandName}
                        </span> AI
                    </Typography>
                </Link>

                <div className="hidden gap-2 lg:flex">
                    <div className="hidden lg:block">{navList}</div>
                    <a
                        href="#services"
                        onClick={handleClickServices}
                    >
                        <Button variant="text" size="sm" color="white" fullWidth className="hover:bg-transparent">
                            Services
                        </Button>
                    </a>
                    <a
                        href="#aboutus"
                        onClick={handleClickAboutUs}
                    >
                        <Button variant="text" size="sm" color="white" fullWidth className="hover:bg-transparent">
                            About Us
                        </Button>
                    </a>
                    <a
                        href="#plans"
                        onClick={handleClickPlans}
                    >
                        <Button variant="text" size="sm" color="white" fullWidth className="hover:bg-transparent">
                            Plans
                        </Button>
                    </a>
                    <a
                        href="#contactus"
                        onClick={handleClickContactUs}
                    >
                        <Button variant="text" size="sm" color="white" fullWidth className="hover:bg-transparent">
                            Contact Us
                        </Button>
                    </a>
                    {React.cloneElement(action, {
                        className: "hidden lg:inline-block",
                    })}
                </div>
                <IconButton
                    variant="text"
                    size="sm"
                    color="white"
                    className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon strokeWidth={2} className="h-6 w-6" />
                    ) : (
                        <Bars3Icon strokeWidth={2} className="h-6 w-6" />
                    )}
                </IconButton>
            </div>
            <MobileNav
                className="rounded-xl bg-white px-4 pt-2 text-blue-gray-900"
                open={openNav}
                style={{ paddingBottom: "0.6rem" }}
            >
                <div className="container mx-auto">
                    <div className="flex align-middle items-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        {navList}
                    </div>
                    <div className="container">
                        <a
                            href="#services"
                            onClick={handleClickServices}
                        >
                            <Button variant="text" size="sm" fullWidth className="hover:bg-transparent">
                                Services
                            </Button>
                        </a>
                        <a
                            href="#aboutus"
                            onClick={handleClickAboutUs}
                        >
                            <Button variant="text" size="sm" fullWidth className="hover:bg-transparent">
                                About Us
                            </Button>
                        </a>
                        <a
                            href="#plans"
                            onClick={handleClickPlans}
                        >
                            <Button variant="text" size="sm" fullWidth className="hover:bg-transparent">
                                Plans
                            </Button>
                        </a>
                        <a
                            href="#contactus"
                            onClick={handleClickContactUs}
                        >
                            <Button variant="text" size="sm" fullWidth className="hover:bg-transparent">
                                Contact Us
                            </Button>
                        </a>
                    </div>
                    {React.cloneElement(action, {
                        className: "w-full block",
                    })}
                </div>
            </MobileNav>
        </MTNavbar >
    );
}

Navbar.defaultProps = {
    brandName: "KOKO",
    action: (
        <a
            href="/sign-in"
        >
            <Button variant="gradient" size="sm" fullWidth>
                Sign In / Sign Up
            </Button>
        </a>
    ),
};

Navbar.propTypes = {
    brandName: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;

