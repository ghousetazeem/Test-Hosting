import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6 bg-black pr-10 rounded-tl-2xl rounded-tr-2xl mr-12 ml-12">
      <div>
        <Typography className="text-center text-white" variant="h2" ><span className="text-red-800">KOKO</span> AI</Typography>
        <Typography className="text-center text-white" variant="h5" >One solution for many Problems</Typography>
      </div>
      <div className="container mx-auto">
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-white"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "KOKO AI",
  description:
    "Boost your front desk with our AI Receptionist for better customer service and smoother operations..",
  socials: [
    {
      color: "gray",
      name: "twitter",
      path: "https://www.twitter.com/creativetim",
    },
    {
      color: "gray",
      name: "instagram",
      path: "https://www.instagram.com/creativetimofficial/",
    },
  ],
  copyright: (
    <>
      Copyright © {year} | KOKO AI{" "}
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
