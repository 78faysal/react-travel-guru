import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from '../../assets/images/Sajek.png';
import img2 from '../../assets/images/Sreemongol.png';
import img3 from '../../assets/images/sundorbon.png';
import { useLoaderData, useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();
    const datas = useLoaderData();

    // console.log(datas);

    const handleClick = (id) => {
        navigate(`/placeDetail/${id}`)
        // console.log('clciked', id);
    }

    return (
        <div className='grid grid-cols-3 max-sm:grid-cols-1 max-sm:px-5 items-center my-10'>
            <div className='col-span-1 space-y-4'>
                <h2 className="text-5xl font-bold">Travel Guru</h2>
                <p>Revealing All The Secrets Travel Experts Use To Save Thousands And Travel The World For Free! A Level Of Freedom That NO Other Generation Has Been Able To Achieve.</p>
                <button className="btn btn-warning">Booking -></button>
            </div>

            <div className='col-span-2 max-sm:mt-10'>


                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper">

                    {
                        datas.map(data => (

                            <SwiperSlide onClick={() => handleClick(data.id)} key={data.id} className='relative'>
                                <div className='relative'>
                                    <img className='w-full h-full object-cover' src={`${data.place_img}`} alt="" />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-3xl opacity-75'></div>
                                </div>
                                <h2 className="text-3xl max-sm:text-lg font-bold absolute bottom-5 left-5 text-white">{data.destination_place}</h2>
                            </SwiperSlide>
                        ))
                    }


                </Swiper>

            </div>
        </div>
    );
};

export default Home;