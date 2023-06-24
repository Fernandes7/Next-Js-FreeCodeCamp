import styles from '@/styles/Home.module.css'
import Image from 'next/image'
const EventsPage=({data})=>{
    return(
        <>
        <h2>Events Page</h2>
        {data.map((item,key)=>{
            return(
                <div className={styles.eventspagenav} key={key}>
                    <a href={`/events/${item.id}`}>
                        <Image width={200} height={200} src={item.image}></Image>
                        <h3>{item.title}</h3>
                    </a>
                </div>
            )
        })}
        </>
        
    )
}
 export default  EventsPage

 export async function getStaticProps()
 {
    const data=await import("../../../data/data.json")
    return{
        props:{
            data:data.events_categories
        }
    }
 }

 