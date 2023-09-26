import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="fetured-items text-white bg-fixed my-20">
            <SectionTitle subHeading="Check it oute" heading='featured item'></SectionTitle>
            <div className="md:flex justify-center py-20 px-36 bg-slate-500 opacity-40">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Augth20, 20213</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam fuga cum non quidem. Temporibus inventore placeat laudantium dolorem quasi quia rerum doloribus! Veniam architecto illo corrupti omnis? Quae, expedita. Dolores quae sed molestiae libero aut porro assumenda tempora sequi consectetur ea dolor hic provident odit, voluptatibus rerum. Facilis, ipsum dolore!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;