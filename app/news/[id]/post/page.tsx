'use client'
import {LoremIpsum} from "lorem-ipsum";
import {Container,Box,Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

export default function Post(props:any){

    return (
        <Container>
                <Image fill src={props.imageUrl}  alt='picture' />
            <Container sx={{m:100}}>
            </Container>
                <Box sx={{boxShadow:3,p:5,backgroundColor: 'white',m:5,position:'relative'}} borderRadius={2}>
                    <Typography className='bg-white mb-4' variant='h5' >{props.title}</Typography>
                    <h2>{props.summary}</h2>
                    <h2>{lorem.generateSentences(50)}</h2>
                </Box>
            <Link className='pb-10 font-bold' href={'/'}><KeyboardBackspaceOutlinedIcon/> Back to Home page</Link>
        </Container>
    )
}