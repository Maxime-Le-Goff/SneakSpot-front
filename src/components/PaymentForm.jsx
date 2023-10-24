import { useState } from "react"
import { chip, visa } from "../assets/images"
import { useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentForm = ({ handleSubmit }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [cardHolder, setCardHolder] = useState('full name');
    const [cardNumber, setCardNumber] = useState('##########');
    const [month, setMonth] = useState('month');
    const [year, setYear] = useState('year');
    const [CVV, setCVV] = useState(null);
    const [transform, setTransform] = useState({front:'0deg', back:'180deg'});

    const frontStyle = {
		'--front': `${transform.front}`,
	};
    const backStyle = {
		'--back': `${transform.back}`,
	};

  return (
    <>
    <div className="negative_margin relative h-[250px] w-[400px] font-montserrat uppercase">
        <div style={frontStyle} className="absolute h-full w-full top-0 left-0 gradient rounded-md p-5 backface_visibility transform_perspective_0_deg">
            <div className="flex items-center justify-between pt-2">
                <img 
                    src={chip}
                    height={50}
                    className="h-[50px]"
                />
                <img 
                    src={visa}
                    height={50}
                    className="h-[50px]"
                />
            </div>
            <div className="py-7 text-xl text-white font-mono">
                {cardNumber}
            </div>
            <div className="flex justify-between text-white">
                <div className="text-sm">
                    <span className="mr-auto">card holder</span>
                    <div>{cardHolder}</div>
                </div>
                <div className="text-sm">
                    <span className="">expires</span>
                    <div className="">
                        <span className="">{month} / </span>
                        <span>{year}</span>
                    </div>
                </div>
            </div>
        </div>
        <div style={backStyle} className="absolute top-0 left-0 h-full w-full gradient backface_visibility rounded-md text-right box-shadow-md transform_perspective">
            <div className="bg-black w-full my-3 h-[50px]"/>
            <div className="px-5">
                <span className="text-white text-sm">cvv</span>
                <div className="h-[50px] p-3 mt-2 text-slate-gray bg-white rounded-md w-full">{CVV}</div>
                    <img 
                        src={visa}
                        className="mt-7 h-[30px] text-right"
                        height={30}
                    />
            </div>
        </div>
    </div>
    <form
        className="bg-white rounded-sm shadow-md p-5 w-[600px] text-slate-gray" 
        onSubmit={(e) => handleSubmit(e)}>
        <div className="mt-5">
            <span className="font-montserrat uppercase block text-slate-gray pb-1">card number</span>
            <input 
                type='text' 
                maxLength={16}
                className="w-full p-3 rounded-lg border border-slate-200 outline-none focus:bg-slate-50"
                onChange={(e) => setCardNumber(e.target.value)}
            />
        </div>
        <div className="mt-5">
            <span className="font-montserrat uppercase block text-slate-gray pb-1">card holder</span>
            <input 
                type='text' 
                maxLength={16}
                className="w-full p-3 rounded-lg border border-slate-200 outline-none focus:bg-slate-50"
                onChange={(e) => setCardHolder(e.target.value)}
            />
        </div>
        <div className="flex items-center justify-center gap-10 font-montserrat uppercase">
            <div className="w-1/4 mt-5">
                <span className="font-montserrat uppercase block text-slate-gray pb-1">expiration mm</span>
                <select 
                    name="select_month" 
                    id="select_month"
                    value={month}
                    className="w-full p-3 rounded-lg border border-slate-200 bg-white outline-none focus:bg-slate-50"
                    onChange={(e)=> setMonth(e.target.value) }
                >
                    <option value="month" disabled>month</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            </div>
            <div className="w-1/4 mt-5">
                <span className="font-montserrat uppercase block text-slate-gray pb-1">expiration yy</span>
                <select 
                    name="select_year" 
                    id="select_year"
                    value={year}
                    className="w-full p-3 rounded-lg border border-slate-200 bg-white outline-none focus:bg-slate-50"
                    onChange={(e)=> setYear(e.target.value) }
                >
                    <option value="year" disabled>year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                </select>
            </div>
            <div className="w-1/4 mt-5">
            <span className="font-montserrat uppercase block text-slate-gray pb-1">cvv</span>
            <input 
                type='text' 
                maxLength={4} 
                className="w-full p-3 rounded-lg border border-slate-200 outline-none focus:bg-slate-50"
                onChange={(e) => setCVV(e.target.value)}
                onMouseEnter={() => setTransform({front:'-180deg', back:'0deg'})}
                onMouseLeave={() => setTransform({front:'0deg', back:'180deg'})}
            />
            </div>
        </div>
        <input type="submit" value="submit" className="uppercase font-montserrat w-full gradient rounded-lg mt-5 p-3 text-lg text-white cursor-pointer transition hover:opacity-90" />
    </form>
    </>
  )
}

export default PaymentForm
