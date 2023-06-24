import Image from "next/image"
import Link from "next/link"
import styles from '@/styles/Home.module.css'
const EventsPerCityPage=({data,location})=>{
    return(
        <>
        <h2>Events in {location}</h2>
        <div>
            {data.map((item,key)=>{
                return(
                     <div key={key}>
                     <Image src={item.image} width={200} height={200}></Image> 
                     <Link href={`/events/${location}/${item.id}`} className={styles.epn}>
                        <h3>{item.title}</h3>
                     </Link>
                        <p>{item.description}</p>  
                        </div>   
                )
            })}
        </div>
        </>
    )
}
export default EventsPerCityPage

export async function getStaticPaths()
{
    const data=await import("../../../../data/data.json")
    const allapaths=data.events_categories.map((item)=>{
        return{
            params:{cat:item.id}
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
    const data=allEvents.filter((item)=>item.city===context.params.cat)
    return{
        props:{
            data:data,
            location:context.params.cat
        }
    }

}