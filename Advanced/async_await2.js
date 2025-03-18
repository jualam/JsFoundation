function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post data fetched")
        },2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Comment data fetched")
        },3000);
    })
}

async function getBlogData(){
    try {
        console.log("Fetching the data");
        // const postData=await fetchPostData();
        // const commentData=await fetchCommentData();
        const [postData,commentData]=await Promise.all([fetchPostData(),fetchCommentData()])
        console.log(postData)
        console.log(commentData)
        console.log("Fetch completed")
    } catch (error) {
        console.log("Error fetching BlogData", error)
        
    }
}

getBlogData()