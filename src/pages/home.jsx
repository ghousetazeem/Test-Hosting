import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import Pricing from "./pricing";
import Profile from "./profile";

export function Home() {
  const handleGetStarted = () => {
    const contactUs = document.getElementById("contactus")
    contactUs.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bg.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black mt-12"
              >
                Experience the Future AI Receptionist With <span className="text-red-900"> KOKO
                </span>  AI
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 mt-0">
                Boost your front desk with our AI Receptionist for better customer service and smoother operations.
              </Typography>
              <button onClick={handleGetStarted} variant="gradient" size="sm" fullWidth className="p-4 text-white bg-red-900 mt-6 rounded-sm pt-2 pb-2">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}
      <section id="services" className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Build With AI" heading="Services we provide">
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <div>

            <section id="aboutus" className="mt-0 bg-white">
              <div className="mt-32 mb-12 flex flex-wrap items-center">
                <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                    <FingerPrintIcon className="h-8 w-8 text-white " />
                  </div>
                  <Typography
                    variant="h3"
                    className="mb-3 font-bold"
                    color="blue-gray"
                  >
                    About us
                  </Typography>
                  <Typography className="mb-8 font-normal text-blue-gray-500">
                    koko-AI is a cutting-edge AI receptionist solution based in Helsinki, Finland. Our team of experts is dedicated to providing businesses with innovative and efficient ways to manage their front desk operations. The goal of our business plan is to provide an AI receptionist service that can be accessed by organizations of all sizes.
                    <br />
                    <br /> Our AI receptionist will be able to do jobs including taking phone calls, making appointments, and giving consumer’s information. Our ability to apply AI to enhance the effectiveness and accuracy of our receptionist service, which will save businesses time and money, will be our competitive advantage. We want to lead the AI receptionist market by offering a dependable and effective service.
                  </Typography>
                </div>
                <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
                  <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                    <CardHeader floated={false} className="relative h-56">
                      <img
                        alt="Card Image"
                        src="/img/airec.jpg"
                        className="h-full w-full"
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography variant="small" color="blue-gray" className="font-normal">  Features at a glance</Typography>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-3 mt-2 font-bold"
                      >
                        Features at a glance
                      </Typography>
                      <Typography className="font-normal text-blue-gray-500">
                        <ul>
                          <li>Experience the Future AI Receptionist.</li>
                          <li>Efficiently manage your front desk with our AI Receptionist.</li>
                          <li>Enhance customer experience and streamline operations</li>
                        </ul>
                      </Typography>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </section>
          </div>
          <div className="flex align-middle justify-center mt-0 pb-12">
            <Pricing />
          </div>
          <div id="contactus">
            <PageTitle section="Contact Us" heading="Want to work with us?" >
              Complete this form and we will get back to you in 24 hours.
            </PageTitle>
          </div>
          <form action="https://formspree.io/f/xyyqlnnn" method="POST" className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8 flex-col">
              <Input name="name" variant="outlined" size="lg" label="Full Name" />
              <Input name="email" variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea name="message" variant="outlined" size="lg" label="Message" rows={8} />
            <Button type="submit" variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
