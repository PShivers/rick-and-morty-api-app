import Link from "next/link";

export default function Page() {
  return (
    <div className='flex flex-col md:flew-row justify-evenly items-center w-full h-3/4 text-4xl'>
        <div><Link href={`/characters`}>Characters</Link></div>
        <div><Link href={`/episodes`}>Episodes</Link></div>
    </div>
  );
}
