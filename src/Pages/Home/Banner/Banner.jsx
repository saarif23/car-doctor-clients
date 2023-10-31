import bannerImg1 from '../../../assets/images/banner/5.jpg'
import bannerImg2 from '../../../assets/images/banner/2.jpg'
import bannerImg3 from '../../../assets/images/banner/3.jpg'
import bannerImg4 from '../../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[550px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={bannerImg1} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='pl-24  space-y-5 leading-relaxed'>
                        <h3 className="w-2/5 text-5xl font-extrabold leading-tight">Affordable Price For Car Servicing</h3>
                        <p className='w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn  btn-md bg-[#FF3811] text-white'>Discover More</button>
                            <button className='btn btn-outline  btn-md  text-white'>Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={bannerImg2} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='pl-24  space-y-5 leading-relaxed'>
                        <h3 className="w-2/5 text-5xl font-extrabold leading-tight">Affordable Price For Car Servicing</h3>
                        <p className='w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn  btn-md bg-[#FF3811] text-white'>Discover More</button>
                            <button className='btn btn-outline  btn-md  text-white'>Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={bannerImg3} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='pl-24  space-y-5 leading-relaxed'>
                        <h3 className="w-2/5 text-5xl font-extrabold leading-tight">Affordable Price For Car Servicing</h3>
                        <p className='w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn  btn-md bg-[#FF3811] text-white'>Discover More</button>
                            <button className='btn btn-outline  btn-md  text-white'>Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={bannerImg4} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='pl-24  space-y-5 leading-relaxed'>
                        <h3 className="w-2/5 text-5xl font-extrabold leading-tight">Affordable Price For Car Servicing</h3>
                        <p className='w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-5'>
                            <button className='btn  btn-md bg-[#FF3811] text-white'>Discover More</button>
                            <button className='btn btn-outline  btn-md  text-white'>Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;