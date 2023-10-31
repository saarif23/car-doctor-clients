
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const AboutUs = () => {
    return (
        <div>
            <div className="flex my-20">
                <div className='flex-1 relative '>
                    <img src={person} className="w-3/4 h-4/5 rounded-lg shadow-2xl" />
                    <img src={parts} className=" absolute w-3/5 h-2/3 right-16 bottom-0 border-8 border-white rounded-md" />

                </div>
                <div className='flex-1 space-y-5'>
                    <p   className='text-[#FF3811] font-bold'> About Us</p>
                    <h1 className="text-5xl w-2/3 font-bold">We are qualified & of experience in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>

                    <button className="btn  text-white bg-[#FF3811]">Get More  Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;