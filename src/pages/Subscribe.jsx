import { 
    Card,
    Input,
    Button,
    Typography, 
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header"

export function Subscribe() {
    return(
        <div>

            <Header/>

            <div 
                className="w-full h-full bg-none grid grid-cols-2 items-center justify-center"
            >

                <div
                    className="h-[500px] flex items-center justify-center"
                >
                    <Card color="transparent" shadow={true}
                        className="w-[351px] h-full bg-gray-100
                            flex - items-center justify-evenly p-6 shadow-lg
                            ml-[100px]
                        "
                    >
                    
                    <h4 className="
                        bg-clip-text text-transparent bg-gradient-to-r from-green-100  to-green-300
                        font-mouse text-3xl
                    "> 
                        Cadastrar
                    </h4>
                    <Typography color="gray" className="mt-1 font-bold">
                        Cadastre seus dados para acessar o sistema
                    </Typography>
                        <form className="mt-8 mb-2 w-full  flex items-center flex-col">
                            <div className="mb-4 flex flex-col gap-6 w-full">

                                <Input size="xl" label="Nome" color="gray"
                                    type="email"                                    
                                />

                                <Input size="xl" label="Email Institucional" color="gray"
                                    
                                />
                                <Input size="xl" label="Prontuário" color="gray"
                                    
                                />
                                <Input type="password" size="xl" label="Senha" color="gray"
                                    
                                />
                            </div>
                            
                            <Button className="mt-6 bg-gradient-to-r from-green-100  to-green-300" color="purple" variant="gradient">
                                Continuar
                            </Button>
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Já possui conta?{" "}
                            
                            <Link to="/signin" className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200  to-green-300">
                            
                                Acessar
                            
                            </Link>
                            
                            </Typography>
                        </form>
                    </Card>
                </div>

                <div
                    className="flex items-center justify-center"
                >
                    <img src="src/assets/img/subscribe-img.png" alt="" 
                        className="w-[530px] mr-[100px]"
                    />
                </div>
            </div>
        </div>
    )
}