function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success=false;
            if(success){
                resolve("Data fetched successfully")
            }
            else{
                reject("Error fetching data")
            }
        },3000);
    })
}

//That's how promises are printed,if you want to print the result of the promise you can use .then() method
fetchData()
    .then((data)=>console.log(data)) //if the promise is resolved then this block will be executed
    .catch((data)=>{console.log(data)}) //if the promise is rejected then this block will be executed

//This time an extra .then will be added to the promise chain,which will catch what's returned by first then
fetchData()
.then((data)=>{
    console.log(data);
    return 'by Juhair'
}) 
.then((data)=>console.log(data))
.catch((data)=>{
    console.log(data)
    throw 'by Juhair Faiaz'
}) 
.catch((data)=>console.log(data))
