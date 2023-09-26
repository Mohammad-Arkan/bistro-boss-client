import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {useEffect, useState} from 'react'
import MenuItems from "../../SharedPage/MenuItems/MenuItems";

const PopulareMenu = () => {
    const [menu, setMenu] = useState()
useEffect(()=> {
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
        const popularItems = data.filter(item => item.category === 'popular');
        setMenu(popularItems)
    })
},[])
    
    return (
       <section className="mb-20">
        <SectionTitle
        subHeading="Popular items"
        heading="From Our Menu"
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10 ">
            {
                menu?.map(item => <MenuItems
                key={item._id}
                item = {item}
                ></MenuItems>)
            }
        </div>
       <div className="text-center md:mt-10">
       <button className="btn btn-outline border-0 border-b-4 mt-4">View Full  Menu</button>
       </div>

       </section>
    );
};

export default PopulareMenu;