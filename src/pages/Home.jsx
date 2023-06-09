import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { ArrowLongRightIcon, ArrowLongLeftIcon } from "@heroicons/react/24/solid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Typography } from "@material-tailwind/react";

export function Home() {
    const state = useSelector(state => state);

    const { t } = useTranslation();

    //const navigate = useNavigate();

    return (

        <div
            className="h-full"
        >   
            <Header/>
            <img src="https://cdn.discordapp.com/attachments/1077345452694970438/1107315225662849134/Vector_337.png" alt="" 
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
                                    {t("educationalTitle")}
                                </h2>
                                <p dangerouslySetInnerHTML={{__html:t("educationalDesc")}} />
                                <div className="flex flex-row items-center justify-between w-full">
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
                                            {t("signUp")}
                                        </div>
                                    </Link>
                                    <Typography variant="h5" className="flex items-center justify-center  m-w-[100px] gap-6 font-mouse font-normal">
                                        {t("drag")}
                                        <ArrowLongRightIcon className="w-6"/>
                                                                    
                                    </Typography>
                                </div>
                                
                            </div>
                            <div  className="flex items-center justify-center">
                                <img src="https://media.discordapp.net/attachments/1077345452694970438/1097572130138378250/studies.png?width=648&height=480" alt="" 
                                className="w-[600px]"
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
                                    {t("organizationTitle")}
                                </h2>
                                <p dangerouslySetInnerHTML={{__html:t("organizationDesc")}} />
                                <div className="flex items-center justify-between w-full">
                                <Link to="/subscribe">
                                    <div
                                        className="
                                            w-[120px]
                                            font-bold
                                            rounded-lg
                                            p-2
                                            bg-gradient-to-r from-blue-400  to-blue-200
                                            text-center
                                        ">
                                        {t("signUp")}
                                    </div>
                                </Link>
                                <Typography variant="h5" className="flex items-center justify-center  m-w-[100px] gap-6 font-mouse font-normal">
                                    <ArrowLongLeftIcon className="w-6"/>
                                        {t("drag")}
                                    <ArrowLongRightIcon className="w-6"/>
                                </Typography>
                                </div>
                                
                            </div>
                            <div   className="flex items-center justify-center">
                                <img src="https://media.discordapp.net/attachments/1077345452694970438/1097572129647632436/organization.png?width=624&height=480" alt="" 
                                className="w-[600px]"
                            />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full grid grid-cols-2 items-center justify-center px-6">
                            <div className="p-5 gap-7 flex flex-col items-start justify-center ml-[100px]">
                                <h2
                                    className="font-mouse text-5xl"
                                >
                                    {t("psychologicalTitle")}
                                </h2>
                                <p dangerouslySetInnerHTML={{__html:t("psychologicalDesc")}} />
                                <div className="flex items-center justify-between w-full">
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
                                            {t("signUp")}
                                        </div>
                                    </Link>
                                    <Typography variant="h5" className="flex items-center justify-center  m-w-[100px] gap-6 font-mouse font-normal">
                                        <ArrowLongLeftIcon className="w-6"/>
                                        {t("drag")}
                                    </Typography>
                                </div>
                                
                            </div>
                            <div className="flex items-center justify-center"> 
                                <img src="https://media.discordapp.net/attachments/1077345452694970438/1099732054565990410/Component_17_1.png?width=480&height=480" alt="" 
                                className="w-[480px]"
                            />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </main>

            <Footer />
        </div>


    );
}   