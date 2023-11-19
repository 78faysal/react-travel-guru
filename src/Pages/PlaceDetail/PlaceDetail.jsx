import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlaceDetail = () => {
    const [place, setPlace] = useState([]);
    const { id } = useParams();

    
    useEffect(() => {
        fetch('/places.json')
            .then(res => res.json())
            .then(data => {
                const mainData = data.find(place => place.id == id)
                setPlace(mainData);
            })
    }, [])

    return (
        <div className='grid grid-cols-3 max-sm:grid-cols-1 items-center my-10 px-4'>
            <div className='col-span-1 space-y-4'>
                <h2 className="text-5xl font-bold">{place.destination_place}</h2>
                <p>{place.description}</p>
            </div>

            <div className='col-span-2'>
                <div className="hero md:min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Origin</span>
                                    </label>
                                    <input type="text" placeholder="" className="input input-bordered bg-base-300 text-black" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Destination</span>
                                    </label>
                                    <input type="text" placeholder="" defaultValue={place.destination_place} className="input input-bordered bg-base-300 text-black font-bold" required />
                                </div>
                                <div className="form-control grid grid-cols-2 gap-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">From</span>
                                        </label>
                                        <input type="text" placeholder="" className="input input-bordered bg-base-300 text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">To</span>
                                        </label>
                                        <input type="text" placeholder="" className="input input-bordered bg-base-300 text-black" required />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-warning">Start Booking</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetail;