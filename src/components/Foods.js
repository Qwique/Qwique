// import limage from '../assets/limage.png';
// import nigeria from '../assets/nigeria.png';
// import cameroon from '../assets/cameroon.png';
import snack from '../assets/snack.png';
import indomie from '../assets/indomie.png';
import chips from '../assets/chips.png';
import burger from '../assets/burger.png';
import tacos from '../assets/tacos.png';
import juice from '../assets/juice.png';
import chocolate from '../assets/chocolate.png';
import spicyFood from '../assets/spicyFood.png';
import meal from '../assets/meal.png';
import popcorn from '../assets/popcorn.png';
import rice from '../assets/rice.png';
import foodTray from '../assets/foodTray.png';
import food from '../assets/food.png';
import soda from '../assets/soda.png';








// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const foods = () => {

    AOS.init();
    AOS.refresh();

    const myRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    };
    const myImage = {
        margin: "0 5px",
        width: "80px",
        height: "80px",
        objectFit:"contain",
    }


    return (
        <div className="foods" style={myRow}>
                <img src={spicyFood} alt="" className="country" style={myImage}/>
                <img src={indomie} alt="" className="country" style={myImage}/>
                <img src={rice} alt="" className="country" style={myImage}/>
                <img src={burger} alt="" className="country" style={myImage}/>
                <img src={popcorn} alt="" className="country" style={myImage}/>
                <img src={food} alt="" className="country" style={myImage}/>
                <img src={foodTray} alt="" className="country" style={myImage}/>
                <img src={meal} alt="" className="country" style={myImage}/>
                <img src={soda} alt="" className="country" style={myImage}/>
                <img src={tacos} alt="" className="country" style={myImage}/>
                <img src={juice} alt="" className="country" style={myImage}/>
                <img src={chips} alt="" className="country" style={myImage}/>
                <img src={snack} alt="" className="country" style={myImage}/>
                <img src={chocolate} alt="" className="country" style={myImage}/>

        </div>
    );
}

export default foods;