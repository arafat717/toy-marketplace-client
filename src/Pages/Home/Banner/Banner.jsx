

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/1648419/pexels-photo-1648419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full rounded-lg" />
                <div className="absolute flex items-center rounded-lg h-full transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Best price for any kind of car toys in our website</h2>
                        <p>Best car toys for kids</p>
                        <div>
                            <button className="btn btn-outline btn-secondary">Explor more</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/773057/pexels-photo-773057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full rounded-lg" />
                <div className="absolute flex items-center h-full rounded-lg transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Best price for any kind of car toys in our website</h2>
                        <p>Best car toys for kids</p>
                        <div>
                            <button className="btn btn-outline btn-secondary">Explor more</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full rounded-lg" />
                <div className="absolute flex items-center rounded-lg h-full transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Best price for any kind of car toys in our website</h2>
                        <p>Best car toys for kids</p>
                        <div>
                            <button className="btn btn-outline btn-secondary">Explor more</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/1634213/pexels-photo-1634213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-full rounded-lg" />
                <div className="absolute flex items-center rounded-lg h-full transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold'>Best price for any kind of car toys in our website</h2>
                        <p>Best car toys for kids</p>
                        <div>
                            <button className="btn btn-outline btn-secondary">Explor more</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;