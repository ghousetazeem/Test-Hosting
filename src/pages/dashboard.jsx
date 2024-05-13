import React, { useEffect, useState } from "react";
import {
    Button,
    Typography,
} from "@material-tailwind/react";
import { auth, db } from "../auth/firebase";
import { doc, getDoc } from "firebase/firestore";
import Pricing from "./pricing";

function Dashboard() {
    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);

            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log(docSnap.data());
            } else {
                console.log("User is not logged in");
            }
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    async function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = "/login";
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }

    return (
        <div className="flex flex-col items-center">
            {userDetails ? (
                <>
                    <section className="p-4 md:p-12 text-center mt-28">
                        <div className="mx-auto container mt-8 md:mt-40">
                            <Typography className="mb-4" variant="h2">Welcome to <span className="text-red-700">KOKO</span> AI</Typography>
                            <div className="flex flex-col items-center">
                                <Typography variant="h5">Your email: {userDetails.email}</Typography>
                                {window.location.pathname !== "/dashboard" ? (
                                    <>
                                        <a href="#aboutus">About Us</a>
                                        {/* Add other anchor tags here */}
                                    </>
                                ) : null}
                                <div className="mt-8 mb-2 w-full md:max-w-screen-lg lg:w-1/2">
                                    <Button color="gray" className="" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <div className="inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent h-8 w-8"></div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
