import Post from '../[id]/post/page'

async function getPost(postId:any){
    const res = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${postId}`)
    return await res.json()
}

export default  async function PostPage({params}:any){
    const post = await getPost(params.id)
    return (
        <>
        <Post title={post.title} summary={post.summary} imageUrl={post.imageUrl}/>
        </>
    )
}