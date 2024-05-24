import Cards from "@/components/Cards";
import { list } from "postcss";



async function getrecipy(){
    const response = await fetch('https://dummyjson.com/recipes')
    const data = await response.json()
    return data.recipes;
}

export default async  function recipy(){


    const recipylist=await getrecipy();

    return(
        <>
        <div>
            <Cards recipylist={recipylist}></Cards>
        </div>
        </>
    )
}

