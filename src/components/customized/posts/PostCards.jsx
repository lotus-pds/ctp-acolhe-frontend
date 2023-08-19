import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Avatar
  } from "@material-tailwind/react";
import { GnButton } from "../../common/button/GnButton";

export function PostCards() {
    
    const attendants = [
        {
            name: "Laura",
            urlAvatar: "https://cdn.discordapp.com/attachments/1077345452694970438/1135948021994094703/Mask_group_16.png"
        },
        {
            name: "Clarice",
            urlAvatar: "https://cdn.discordapp.com/attachments/1077345452694970438/1135948022661001339/Mask_group_14.png"
        },
        {
            name: "Roberta",
            urlAvatar: "https://cdn.discordapp.com/attachments/1077345452694970438/1135948022338048150/Mask_group_15.png"
        },
        {
            name: "Míriam",
            urlAvatar: "https://cdn.discordapp.com/attachments/1077345452694970438/1135948021595656273/Mask_group_17.png"
        },
        {
            name: "Antônio",
            urlAvatar: "https://cdn.discordapp.com/attachments/1077345452694970438/1135948023017504931/Mask_group_13.png"
        }
    ];
    
    let attendantNumber = Math.floor(Math.random() * 5);
    let attendant = attendants[attendantNumber];
    
    return(
        <Card className="mt-6 w-56 cursor-pointer">
            <CardHeader color="blue-gray" className="relative h-26">
                <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                    Dicas para se organizar nos estudos
                </Typography>
                <Typography variant="small">
                    Para se organizar nos estudos podemos...
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex gap-4">
                <Avatar src={attendant?.urlAvatar}></Avatar>
                <GnButton>Read More</GnButton>
            </CardFooter>
        </Card>
    );
}