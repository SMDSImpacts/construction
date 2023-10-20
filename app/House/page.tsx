import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch('http://localhost:3000/api/appartments', {cache: "no-cache"})
  if(!res.ok) return notFound();
  return res.json  
}

const AllHouses = async () => {

  const data = await getData();  

  return (
    <div>
     
    </div>
  )
};

export default AllHouses;
