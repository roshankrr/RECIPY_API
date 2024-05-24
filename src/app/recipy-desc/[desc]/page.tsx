import Link from "next/link";


export default async function desc({params}:any){
    async function getrecipy(){
        const response = await fetch(`https://dummyjson.com/recipes/${params.desc}`)
        const data = await response.json()
        return data;
    }
    const recipylist=await getrecipy();
    // console.log(recipylist.name);
    
    return(
        <>
        <center>
        <Link href={'/'}> <button className="mt-5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-black">GO TO HOME </button></Link>

        </center>
        <div className="h-screen w-full flex items-center bg-black ">
        
            <div className="w-[40%] py-10 pl-5   overflow-hidden "><img className="rounded-xl" src={recipylist.image} alt="" /></div>
            <div className="ml-32 text-3xl ">
                <h1 className="font-bold underline pb-5">Name:{recipylist.name}</h1>
                <h1 className="pb-5"> Rating:{recipylist.rating}</h1>
                <ul>
                    <li>Ingredients:</li>
                    {
                        recipylist.ingredients.map((ingredient:any)=>{
                            return(
                                <li className="text-2xl  text-cyan-400">{ingredient}</li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
        
        

        </>
    )
}