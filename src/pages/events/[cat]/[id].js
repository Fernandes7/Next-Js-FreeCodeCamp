import Image from "next/image"
const EventPage=({data})=>{
    return(
        <>
        {data.map((item,key)=>{
            return(
                <div key={key}>
                    <Image width={"700"} height={300} src={item.image}></Image>
                    <h4>{item.title}</h4>
                </div>
            )
        })}
        </>
    )
}
export default EventPage

export async function getStaticPaths()
{
    const data=await import("../../../../data/data.json")
    const allapaths=data.allEvents.map((item)=>{
        return{
            params:{
                   cat:item.city,
                   id:item.id
            }
        }
    })
    return{
        paths:allapaths,
        fallback:false
    }  
}

export async function getStaticProps(context)
{
    const {allEvents}=await import("../../../../data/data.json")
    const data=allEvents.filter((item)=>item.id===context.params.id)
    console.log(context)
    return{
        props:{data}
    }
}