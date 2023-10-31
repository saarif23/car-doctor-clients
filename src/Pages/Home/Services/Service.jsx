// import { useEffect } from "react";
// import { useState } from "react";
import ServiceCart from "./ServiceCart";
import useServices from "../../../Hooks/useServices";

const Service = () => {
    const services = useServices();
    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch('https://car-magician-server-site.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])

    return (
        <div className="my-10">
            <div className="text-center space-y-4">
                <p className="text-[#FF3811] font-bold">Service</p>
                <h2 className="text-4xl font-bold dark:text-white">Our Service Area</h2>
                <p className="max-w-lg mx-auto dark:text-white ">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    services.map(service => <ServiceCart key={service._id} service={service}></ServiceCart>)
                }

            </div>
        </div>
    );
};

export default Service;