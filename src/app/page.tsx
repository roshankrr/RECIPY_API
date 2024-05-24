import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div>
<div className="bg-white">
  <nav className="flex items-center justify-between p-6">
    <h1 className="text-3xl text-black font-bold">FODDIE</h1>
    <div className="flex gap-5 items-center space-x-4">
      <input
        className="flex h-10 w-[40vw] border text-black border-gray-600 outline-none  rounded-md px-4 py-2"
        placeholder="Search"
      />
      <a className="text-sm text-black" href="#" rel="ugc">
        WHY FODDIE?
      </a>
      <a className="text-sm text-black" href="#" rel="ugc">
        ABOUT
      </a>
      <a href="/recipy" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-black text-white">
        RECIPY
      </a>
      
      
    </div>
  </nav>
  <div className="flex items-center justify-between px-6 py-12">
    <div className="max-w-lg space-y-6">
      <h2 className="text-6xl text-black font-bold">Margarita Pizza With Special Sauce</h2>
      <p className="text-gray-600">Margarita Pizza with special sauce is a flavor you can find only in FOODIE.</p>
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold line-through text-gray-400">$7.90</span>
        <span className="text-4xl text-black font-bold">$7.90</span>
        <Link href={'/recipy-desc/1'}>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-black text-white">
          Want Recipy?
        </button>
        
        </Link>

      </div>
    </div>
  
    <img
      src="https://i.pinimg.com/564x/fb/9b/13/fb9b13d1a8e5810baa6bdb2355cb1d97.jpg"
      alt="Italian Pasta"
      className="w-1/2  aspect-ratio: 400 / 400; object-fit: cover"
      width="400"
      height="400"
    />

  </div>
  <div className="flex justify-end px-6">
    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-full">
      Discount coupon
    </button>
  </div>
</div>
    </div>
    
    </>
  );
}
