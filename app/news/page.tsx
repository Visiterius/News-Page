'use client'
import {useState} from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import React from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {format,isToday} from 'date-fns'
import {Button,Container,Box} from "@mui/material";
import Link from "next/link";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import {InputUnstyled} from "@mui/base";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const StyledInputElement = styled('input')(
    ({ theme }) => `
  width: auto;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 5px;
  margin:10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`,
);

const CustomInput = React.forwardRef(function CustomInput(
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.ForwardedRef<HTMLDivElement>,
) {
    return (
        <InputUnstyled slots={{ input: StyledInputElement }} {...props} ref={ref} />
    );
});

export default function Page(news:any){
    const [item, setItem] = useState('');

    return (
            <Container className='bg-gray-100'>
                <CustomInput onChange={(event)=>{setItem(event.target.value)}}
                             aria-label='Demo input'
                             placeholder={`Type something…`} />
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                    {news.news.filter((post:any)=>{
                        if (item===''){
                            return post
                        }else if (post.title.toLowerCase().includes(item.toLowerCase())){
                            return post
                        }else if (post.summary.toLowerCase().includes(item.toLowerCase())){
                            return post
                        }
                    }).map((post:any, index:any) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item sx={{width:'75%',p:0}}><NewsBlock key={post.id} post={post}/></Item>
                        </Grid>
                    ))}
                </Grid>
            </Container>
    )
}

function NewsBlock({post}:any){
    const {title,summary,imageUrl,publishedAt,id} = post || {}
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '200px',
        objectFit:'cover',

    });
    const updatedAT = new Date(publishedAt)
    const lastUpdatedAt = isToday(publishedAt)
    ? format(updatedAT, 'h:mm bb')
    : format(updatedAT, 'PPP')

    return (
        <>
            <Link href={`../news/${id}`}>
                <Img alt='picture' src={imageUrl}/>
                <Box sx={{textAlign:'left',m:1}}>
                <h2><CalendarTodayOutlinedIcon sx={{width:'15px',height:'15px',m:1}}/> {lastUpdatedAt}</h2>
                <h2 className='font-bold'>{title}</h2>
                <h2 className='m-1'>{summary.length <= 25 ? summary: (summary.slice(0, 18) + "...")}</h2>
                <Button className='text-black hover:bg-gray-100 m-2' size='small'>Read more<ArrowRightAltOutlinedIcon/></Button>
            </Box>
            </Link>
        </>
    )
}



