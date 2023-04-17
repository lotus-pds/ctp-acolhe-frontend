import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


export function Home() {




    //const navigate = useNavigate();

    return (

        <div
            className="h-full"
        >   
            <Header/>
            <img src="src/assets/img/vetor.png" alt="" 
                className="absolute  top-0 right-0 z-10"
            />
            <main className="
                w-full
                relative
                z-20 
                h-max
                flex
                items-center
                justify-center
            
            ">
                <Swiper pagination={false} modules={[Pagination]} 
                className="
                    mySwiper flex flex-colum  
                ">
                    <SwiperSlide>
                        <div className="w-full grid grid-cols-2 items-center px-6">
                            <div className="p-5 gap-7 flex flex-col items-start justify-center ml-[100px]">
                                <h2
                                    className="font-mouse text-5xl"
                                >
                                    Atendimento para ajuda <spam className="bg-clip-text text-transparent bg-gradient-to-r from-purple-100  to-purple-300">psicológica</spam></h2>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                </p>
                                <Link to="/subscribe">
                                    <div 
                                        className="
                                            w-[120px]
                                            font-bold
                                            rounded-lg
                                            p-2
                                            bg-gradient-to-r from-purple-100  to-purple-300
                                            text-center
                                        ">
                                        Cadastrar
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <img src="src/assets/img/psico.png" alt="" 
                                className="w-[530px]"
                            />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="w-full grid grid-cols-2 items-center px-6">
                            <div className="p-5 gap-7 flex flex-col items-start justify-center ml-[100px]">
                                <h2
                                    className="font-mouse text-5xl"
                                >
                                    Serviço de ajuda <spam className="bg-clip-text text-transparent bg-gradient-to-r from-red-100 via-red-300 to-red-400">educacional</spam></h2>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                </p>
                                <Link to="/subscribe">
                                    <div 
                                        className="
                                            w-[120px]
                                            font-bold
                                            rounded-lg
                                            p-2
                                            bg-gradient-to-r from-red-100 via-red-300 to-red-400
                                            text-center
                                        ">
                                        Cadastrar
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <img src="src/assets/img/studies.png" alt="" 
                                className="w-[630px]"
                            />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="w-full grid grid-cols-2 items-center px-6">
                            <div className="p-5 gap-7 flex flex-col items-start justify-center ml-[100px]">
                                <h2
                                    className="font-mouse text-5xl"
                                >
                                    Atendimento para <spam className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-300">organização estudantil</spam></h2>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                </p>
                                <Link to="/sucessfull">
                                    <div 
                                        className="
                                            w-[120px]
                                            font-bold
                                            rounded-lg
                                            p-2
                                            bg-gradient-to-r from-blue-100  to-blue-300
                                            text-center
                                        ">
                                        Cadastrar
                                    </div>
                                </Link>
                            </div>

                            <div>
                                <img src="src/assets/img/organization.png" alt="" 
                                className="w-[630px]"
                            />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </main>
            
            <Footer/>
        </div>
        
       
    );
}   