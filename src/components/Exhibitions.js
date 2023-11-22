import React from 'react'
import EC from './ExhibitionCard'
import img1 from "../images/Exibition/E1.png"
import img2 from "../images/Exibition/E2.png"
import img3 from "../images/Exibition/E3.png"
import img4 from "../images/Exibition/E4.png"
import img5 from "../images/Exibition/E5.png"
import img6 from "../images/Exibition/E6.png"
import img7 from "../images/Exibition/E7.png"
import img8 from "../images/Exibition/E8.png"

const Exhibitions = () => {
    const exhibitions = [
        {
            img: img1,
            title: 'Ethereal blooms',
            date: 'December 21, 2023',
            body:'Step into a world where nature beauty intertwines with the untamed spirit of the wilderness. Ethereal Blooms is a mesmerizing exhibition that beckons you to embark on a captivating visual odyssey. Here, artists skillfully capture the ethereal charm of florals and the enigmatic allure of the wild, inviting you to…'
        },
        {
            img: img2,
            title: 'Figuratively Yours',
            date: 'December 19, 2023',
            body:'An ode to the power of figurative art Welcome to "Figuratively Yours," an extraordinary art exhibition that unites the distinct and captivating figurative styles of three talented artists - A V Ilango, Buwa Shete, and Wilson Souza. Each artist brings their unique perspective and artistic flair to the canvas, presenting…'
        },
        {
            img: img3,
            title: 'DIVINE EXPRESSIONS – Exploring the Sacred in Art',
            date: 'December 11, 2023',
            body:'An unforgettable journey into the mystical realm of gods and goddesses Divine Expressions: Exploring the Sacred in Art" is a captivating exhibition that celebrates the profound artistic interpretations of three remarkable artists Arpitha Reddy, Ramesh Gorjala and G. Subramanian. This extraordinary showcase brings together their awe-inspiring creations, which delve deep…'
        },
        {
            img: img4,
            title: 'BLOOM AND BREATHE',
            date: 'December 9, 2023',
            body:'"Bloom and Breathe" is an art show that celebrates the beauty of florals and living beings. The title reflects the idea that these two elements of nature are interconnected, as they rely on each other for growth and survival. Through this exhibition, the artworks on display capture the essence of…'
        },
        {
            img: img5,
            title: 'MONOCHROME MELODRAMA',
            date: 'December 10, 2023',
            body:'Step into the world of ‘Monochrome Melodrama’ by Studio3 that celebrates the works of  the following artists - Ajay De, Amol Pawar, Ashif Hossain, Datta Bansode, Gurmeet Marwah, Jatin Das, Jogen Chowdhury, Nagesh Ghodke, Nishant Dange, Paresh Maity, R K Laxman, Ramesh Gorjala, Shuvaprasanna, Santhana and Vivek Kumavat. The work…'
        },
        {
            img: img6,
            title: 'OUTSIDE THE LINE – Showcasing Women in Art',
            date: 'December 10, 2023',
            body:'Celebrating women that have dared to colour “Outside the Line” Studio3 presents "Outside the Line- Showcasing Women in Art" to celebrate the talent of women in the art space as well as the work of five incredibly talented female artists- Arpana Caur, Seema Kohli, Vinita Karim, Sujata Bajaj and Bharti…'
        },
        {
            img: img7,
            title: 'THE ETERNAL CITY OF BENARAS by Ashif Hossain',
            date: 'December 12, 2023',
            body:'Ashif Hossain’s current muse entails a homage to the ‘eternal city of Benaras’ Hailing from Kolkata, Ashif Hossain is a graduate of Fine Arts from the Government College of Arts, Kolkata. His perspective on India however, stretches beyond the ‘City of Joy’. His artwork encapsulates metropolitan cities spanning across the…'
        },
        {
            img: img8,
            title: 'SANCTUM SANCTORUM – by Paul B',
            date: 'December 24, 2023',
            body:'Paul B breathes new life into Christian Art Paul B hails from a family of Anglican pastors, and schooling in a Roman Catholic institution enhanced his curiosity about the schism in the Christian faith. He found his voice in the visual vocabulary of Christian icons, though his is a more…'
        }
    ]; 
    return (
    <div className='d-flex flex-wrap col-11 mx-auto gap-5 justify-content-center '>
        {exhibitions.map((card,index)=>
            {return (<EC arr={card} key={index}/>);}
        )}
    </div>
  )
}

export default Exhibitions