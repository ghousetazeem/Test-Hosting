import React, { useRef } from "react";
import {
    Input,
    Typography,
    Select,
    Option,
    Popover,
    PopoverHandler,
    PopoverContent,
    IconButton
} from "@material-tailwind/react";
import axios from "axios";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import emailjs from '@emailjs/browser';

function BusinessForm() {
    const [date, setDate] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const form = useRef(); // Move the useRef to the top level

    const buyfunction = async () => {
        // Determine the base URL based on environment
        const baseUrl = window.location.hostname === "localhost"
            ? "http://localhost:3000" // Local backend
            : "https://your-production-backend-url.com"; // Your hosted backend URL when deployed

        try {
            let response = await axios.post(`${baseUrl}/payment`);
            if (response && response.status === 200) {
                window.location.href = response.data.url;
                console.log(response.data);
            }
        } catch (error) {
            console.error("There was an error with the payment request", error);
            setLoading(false); // Ensure the loading state is reset in case of an error
        }
    };


    const sendEmail = () => {
        return emailjs
            .sendForm('service_arbk5fo', 'template_81oh6mn', form.current, '8XeobQ8Xq4I9YSnjv')
            .then(
                () => {
                    console.log('Email sent successfully!');
                },
                (error) => {
                    console.log('Email sending failed...', error.text);
                },
            );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        buyfunction();

    };

    return (
        <section className="px-8 py-20 container mx-auto -mt-12">
            <Typography variant="h5" color="blue-gray" className="text-center">
                Basic Information of your business
            </Typography>
            <Typography
                variant="small"
                className="text-gray-600 font-normal mt-1 text-center"
            >
                Provide the information to the best of your ability for accurate results
            </Typography>
            <form ref={form} onSubmit={handleSubmit}>
                <div className="flex flex-col mt-8">
                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Business Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Eg: Google..."
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="business_name"
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Business Website
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Eg: https://www.google.com"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="website_url"
                            />
                        </div>
                    </div>
                    <div className="mb-6 flex flex-col gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                I&apos;m
                            </Typography>
                            <Select
                                size="lg"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
                                name="owner"
                            >
                                <Option>Owner</Option>
                                <Option>Employee</Option>
                            </Select>
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Business Start Date
                            </Typography>
                            <Popover placement="bottom">
                                <PopoverHandler>
                                    <Input
                                        size="lg"
                                        onChange={() => null}
                                        placeholder="Select a Date"
                                        value={date ? format(date, "PPP") : ""}
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                        name="start_date"
                                    />
                                </PopoverHandler>
                                <PopoverContent>
                                    <DayPicker
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        showOutsideDays
                                        className="border-0"
                                        classNames={{
                                            caption:
                                                "flex justify-center py-2 mb-4 relative items-center",
                                            caption_label: "text-sm !font-medium text-gray-900",
                                            nav: "flex items-center",
                                            nav_button:
                                                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                                            nav_button_previous: "absolute left-1.5",
                                            nav_button_next: "absolute right-1.5",
                                            table: "w-full border-collapse",
                                            head_row: "flex !font-medium text-gray-900",
                                            head_cell: "m-0.5 w-9 !font-normal text-sm",
                                            row: "flex w-full mt-2",
                                            cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                            day: "h-9 w-9 p-0 !font-normal",
                                            day_range_end: "day-range-end",
                                            day_selected:
                                                "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                                            day_today: "rounded-md bg-gray-200 text-gray-900",
                                            day_outside:
                                                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                                            day_disabled: "text-gray-500 opacity-50",
                                            day_hidden: "invisible",
                                        }}
                                        components={{
                                            IconLeft: ({ ...props }) => (
                                                <ChevronLeftIcon
                                                    {...props}
                                                    className="h-4 w-4 stroke-2"
                                                />
                                            ),
                                            IconRight: ({ ...props }) => (
                                                <ChevronRightIcon
                                                    {...props}
                                                    className="h-4 w-4 stroke-2"
                                                />
                                            ),
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Business Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="emma@mail.com"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="business_email"
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Confirm Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="emma@mail.com"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="confirmed_email"
                            />
                        </div>
                    </div>
                    <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Location
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Florida, USA"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="location"
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Business Phone Number
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="+123 0123 456 789"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="phone_number"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-4 md:flex-row">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Language of the AI Receptionist
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Type one language"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="lang_model"
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Receptionist Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Eg: Laura"
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                name="receptionist_name"
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 font-medium"
                            >
                                Brief Description about your business
                            </Typography>
                            <textarea
                                placeholder="Our business is about dealing with the customers for our daily queries etc..."
                                className="w-full h-32 p-2 border border-blue-gray-200 rounded-lg placeholder:opacity-100 focus:border-primary"
                                name="description_message"
                            ></textarea>
                        </div>
                        <div className="mt-4">
                            <button type="submit">
                                <IconButton variant="filled" size="md" className="pr-14 pl-14">
                                    {loading ? "Loading..." : "Submit"}
                                </IconButton>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default BusinessForm;
