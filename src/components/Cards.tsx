import Link from "next/link"

export default function Cards({recipylist}:any){

    // console.log(recipylist);
    
    return (
        <>
        <center><h1 className="text-[10vw] underline font-bold">RECIPY LIST</h1></center>
        <Link href={'/'}> <button className=" ml-24 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-black">HOME</button></Link>
        
        <div className="h-screen w-full ">
        <div className="h-screen w-full grid md:grid-cols-5   justify-center sm:items-center sm:flex sm:flex-wrap sm:gap-5 p-5">
            {
                recipylist.map((recipy:any)=>{
                    return(
                        <Link href={`./recipy-desc/${recipy.id}`}>
                        <div className="pb-4 hover:scale-90" key={recipy.id}>
                            <img className="rounded-md" src={recipy.image} alt={recipy.name} width="200" height="200"/>
                            <h1>{recipy.name}</h1>
                            <p>{recipy.description}</p>
                        </div>
                        </Link>
                    )
                })
            }
            
        </div>
        </div>
        </>
    )
}