import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const { title, price, img } = data;
   
    const handleCheckout = e => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const date = from.date.value;
        const email = from.email.value;
        const price = from.price.value;
        const title = from.title.value;
        const order = {
            customer_name: name,
            service_date: date,
            email,
            amount: price,
            service: title,
            img
        }

        axios.post('https://car-magician-server-site.vercel.app/bookings', order)
            .then(data => {
                alert("order posted successfully")
                console.log(data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <div className="bg-gray-100 dark:bg-slate-800 dark:text-black p-20">
                <form onSubmit={handleCheckout} >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="form-control">
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name="price" defaultValue={'$' + price} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-5">
                        <input type="text" name="title" defaultValue={title} className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-5">
                        <input type="submit" value="Submit" className="input input-bordered bg-[#FF3811] text-white font-semibold" required />
                    </div>

                </form>

            </div>
        </>

    );
};

export default Checkout;