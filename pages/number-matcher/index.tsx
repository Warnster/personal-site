import { useRef, useState } from "react";
import { MatchingRow, SantisedInvoice } from "./types";
import { readCsv, santiseData, searchAgent } from "./utils";


// This is the janky java program excel sheet. It represents 1 invoice
// const operaExcelSheet: Invoice[] = [
//   {
//     amount: 143.42,
//     cardNumber: "231235XXXX123434",
//   },
//   {
//     amount: 12343.42,
//     cardNumber: "231235XXXX1234598764",
//   },
//   {
//     amount: 123.45,
//     cardNumber: "231235XXXX123454",
//   },
// ];

// This does not have all of the invoices that are in opera. It has multiple invoices in it
// const agentExcelSheet: Invoice[] = [
//   {
//     amount: 123.45,
//     cardNumber: "231235XXXX123454",
//   },
//   {
//     amount: 143.42,
//     cardNumber: "231235XXXX123434",
//   },
// ];

const operaCardNumberHeader = "CardNumber";
const operaAmountHeader = "Open";

export const NumberMatcher = () => {


    const [cardNumberHeader, setCardNumberHeader] = useState("");
    const [amountHeader, setAmountHeader] = useState("");
    const operaFile = useRef<HTMLInputElement>(null);
    const agentFile = useRef<HTMLInputElement>(null);
    const [operaInvoiceData, setOperaInvoiceData] = useState<SantisedInvoice[]>([]);
    const [agentInvoiceData, setAgentInvoiceData] = useState<SantisedInvoice[]>([]);
    const [matchingRows, setMatchingRows] = useState<MatchingRow[]>([]);

 

  const run = async () => {

    // get file which will be a csv from operaFile id input and convert to array of objects
   
    const operaInvoiceData = await readCsv(operaFile.current, operaCardNumberHeader.trim(), operaAmountHeader.trim());
    console.log({operaInvoiceData})
    const agentInvoiceData = await readCsv(agentFile.current, cardNumberHeader.trim(), amountHeader.trim());
    console.log({agentInvoiceData})
    const matchingRows: MatchingRow[] = [];
    for (let i = 0; i < operaInvoiceData.length; i++) {
      const operaRow = operaInvoiceData[i];
      const matchingAgentIndex = searchAgent(operaRow, agentInvoiceData);

      if (matchingAgentIndex > -1) {
        console.log("found match", agentInvoiceData[matchingAgentIndex]);
        matchingRows.push({
          agentIndex: matchingAgentIndex,
          operaIndex: i,
        });
      }
    }
    setMatchingRows(matchingRows);
    setOperaInvoiceData(operaInvoiceData);
    setAgentInvoiceData(agentInvoiceData);
  };



  return (
    <>
    <div className="w-full max-w-xs m-8">
      <h1 className="text-xl text-center">Number Matcher</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cardnumber"
          >
            Agent Invoice Card Number Column Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardnumber"
            type="text"
            onChange={(e) => {setCardNumberHeader(e.target.value)}}
            value={cardNumberHeader}
            placeholder="Card Number Column Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="amount"
          >
            Agent Invoice Amount Column Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="text"
            onChange={(e) => {setAmountHeader(e.target.value)}}
            value={amountHeader}
            placeholder="Amount Column Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="agentFile"
          >
            Agent Invoice CSV
          </label>
          <input
            ref={agentFile}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="agentFile"
            type="file"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="operaFile"
          >
            Opera Invoice CSV
          </label>
          <input
          ref={operaFile}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="operaFile"
            type="file"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={run}
          >
            Run
          </button>
        </div>
      </form>
    </div>

    <div className="m-8">
        {matchingRows.length > 0 && (
            <div><h1>Results of check</h1>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">Last 4 Digits</th>
                        <th className="px-6 py-3">Amount</th>
                        <th className="px-6 py-3">Opera Index</th>
                        <th className="px-6 py-3">Agent Index</th>
                    </tr>
                </thead>
                <tbody>
                    
        {matchingRows.map(({agentIndex, operaIndex}) => {
            const operaRow = operaInvoiceData[operaIndex];
            return (
                <tr key={agentIndex + operaIndex + operaRow.last4Digits} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">{operaRow.last4Digits}</td>
                    <td className="px-6 py-4">{operaRow.amount}</td>
                    <td className="px-6 py-4">{operaIndex}</td>
                    <td className="px-6 py-4">{agentIndex}</td>
                </tr>
            )
        })}
        </tbody>
            </table>
</div>
        )}
    </div>
    </>
  );
};

export default NumberMatcher;
