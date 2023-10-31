import { AiFillCloseCircle } from 'react-icons/ai';
import { FcOk } from 'react-icons/fc';
const Booking = ({ booking, handleDelete, handleConfirm }) => {

    const { _id, service_date, amount, service, img, status, email } = booking;
    return (
        <div className="flex items-center justify-between my-5">
            <div className="flex gap-10 items-center">
                {
                    status === 'confirm' ? <span className='text-3xl'><FcOk></FcOk></span> :
                    <span className='text-3xl' onClick={() => handleDelete(_id)}><AiFillCloseCircle></AiFillCloseCircle></span>
                }
                <img className="w-24  rounded-lg h-24" src={img} alt="" />
                <div>
                    <h4 className="text-xl font-semibold">{service}</h4>
                    <p>Color : Black </p>
                    <p>Size : S </p>
                </div>

            </div>
            <div>
                {status === 'confirm' ? <span>{email}</span> : <span>{amount}</span>}
            </div>
            <div>
                {service_date}
            </div>
            <div>
                {status === 'confirm' ? <button className=" text-green-700 btn  btn-sm btn-outline p-2 rounded-lg font-semibold">Approved</button> : <button onClick={() => handleConfirm(_id)} className="bg-[#FF3811] text-white p-2 rounded-lg font-bold">Pending</button>}
            </div>

        </div>
    );
};

export default Booking;