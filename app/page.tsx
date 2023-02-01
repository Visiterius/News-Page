import './globals.css'
import News from './news/NewsList'

async function getNews(){
    const res = await fetch('https://api.spaceflightnewsapi.net/v3/articles')

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Home(){
    const news = await getNews()

    return (
        <>
                <News news={news}/>
        </>
    )
}




