import bg from "../../assets/Img/Home/Bg.png";
import "./Home.css";

export const Home = () => {
    return (
        <div>
            <div className="flex justify-center" style={{ backgroundImage: `url(${bg})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-[90%] pt-[100px]">
                    <div className="w-[40%] mt-[50px] flex justify-center">
                        <p className="header text-[#fff] text-[55px] capitalize text-center font-bold tracking-widest">A Digital <br />Marketing<br /> Agency</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
