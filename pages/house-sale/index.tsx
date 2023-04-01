import { useState } from "react";

const HouseSale = () => {

    const [saleAmount, setSaleAmount] = useState(190000);
    const estateAgentFee = 2350;
    const solicitorFee = 1150;
    const outstandingMortgage = 125395.03;

    const remaining = saleAmount - outstandingMortgage - estateAgentFee - solicitorFee;

    return (
        <div className="p-2">
            <h1 className="text-3xl">Lewis & Megan House Sale</h1>
            <label>Amount house will sell for</label>
            <br />
            £<input className="my-4 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="string" value={saleAmount} onChange={(e) => setSaleAmount(Number(e.target.value))}/>
          

            <table className="table-auto">
                <tbody>
                    <tr>
                        <td className="border font-bold px-4 py-2">Sale Amount</td>
                        <td className="border px-4 py-2">£{saleAmount}</td>
                    </tr>
                    <tr>
                        <td className="border bg-yellow-100 px-4 py-2">Outstanding Mortgage</td>
                        <td className="border px-4 py-2">£{outstandingMortgage}</td>
                        <td className="border px-4 py-2">£{saleAmount - outstandingMortgage}</td>
                    </tr>
                    <tr>
                        <td className="border bg-yellow-100 px-4 py-2">Estate Agent Fee</td>
                        <td className="border px-4 py-2">£{estateAgentFee}</td>
                        <td className="border px-4 py-2">£{saleAmount - outstandingMortgage - estateAgentFee}</td>
                    </tr>
                    <tr>
                        <td className="border bg-yellow-100 px-4 py-2">Solicitor Fee</td>
                        <td className="border px-4 py-2">£{solicitorFee}</td>
                        <td className="border px-4 py-2">£{saleAmount - outstandingMortgage - estateAgentFee - solicitorFee}</td>
                    </tr>
                    <tr>
                        <td className="border bg-green-100 px-4 py-2">Total remaining after fees</td>
                        <td className="border font-bold px-4 py-2">£{remaining}</td>
                    </tr>
                    <tr>
                        <td className="border bg-green-100 px-4 py-2">Remaining per person</td>
                        <td className="border font-bold px-4 py-2">£{remaining / 2}</td>
                    </tr>
                </tbody>
            </table>

            

        </div>
    )
}

export default HouseSale;