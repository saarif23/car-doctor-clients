import { useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import Booking from "./Booking";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Bookings = () => {
    // const { user } = useContext(AuthContext);
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        // axios.get(`https://car-magician-server-site.vercel.app/bookings?email=${user.email}`, { withCredentials: true })
        axiosSecure.get(`/bookings?email=${user.email}`)
            .then(res => setBookings(res.data))
    }, [user.email, axiosSecure])


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-magician-server-site.vercel.app/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining)
                        }
                    })
            }
        })
    }
    const handleConfirm = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-magician-server-site.vercel.app/bookings/${id}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ status: "confirm" })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Updated',
                                'Updated Successfully.',
                                'success'
                            )
                            const remaining = bookings.filter(booking => booking._id !== id);
                            const updated = bookings.find(booking => booking._id === id);
                            updated.status = "confirm";
                            const newBookings = [updated, ...remaining];
                            setBookings(newBookings);


                        }
                    })
            }
        })
    }


    return (
        <div className="min-h-screen">
            {
                bookings.map(booking => <Booking
                    key={booking._id}
                    booking={booking}
                    handleDelete={handleDelete}
                    handleConfirm={handleConfirm}
                ></Booking>)
            }
        </div>
    );
};

export default Bookings;