import styles from '@/styles/Home.module.css'
import Image from 'next/image'
export default function Home({title,data}) {
  return (
    <>
    <header></header>
    <nav className={styles.nav}>
      <a href='/'>Home</a>
      <a href='/events'>Events</a>
      <a href='/about-us'>About-Us</a>
    </nav>
    <div>
    <h2>{title}</h2>
        <div className={styles.linkdivofevent}>
            {data.map((item,key)=>{
                return(
                    <div key={key}>
                        <Image width={200} height={100} src={item.image} alt="images"></Image>
                        <a href={`/events/${item.id}`}><h4>{item.title}</h4></a>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export async function getServerSideProps()
 {
    const data= await import("/data/data.json")
    return{
        props:{
            title:"Welocome To Event Page",
            data:data.events_categories
        }
    }
 }
