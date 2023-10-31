import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const ServiceCart = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div>
            <div className="card shadow-xl p-5">
                <figure className="rounded-md">
                    <img src={img} alt={title} className="h-[200px] w-full" />
                </figure>
                <div className="pt-5">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex justify-between items-center text-[#FF3811]'>
                        <p className=" font-semibold pt-3">Price : ${price}</p>
                        <Link to={`/checkout/${_id}`}> <BsArrowRight></BsArrowRight></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceCart;