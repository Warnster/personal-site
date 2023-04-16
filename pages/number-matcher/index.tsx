import { CleanInvoice, MatchingRow, SantisedInvoice } from "@/containers/number-matcher/types";
import { highlightCsv, readCsv, searchAgent } from "@/containers/number-matcher/utils";
import { useRef, useState } from "react";

const operaCardNumberHeader = "Card Number";
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
      const operaRow = operaInvoiceData[i] as CleanInvoice;
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
    console.log({matchingRows})
  };

  const downloadAgentCsv = async () => {
    const {fileData, fileHeaders} = await highlightCsv(agentFile.current)
    console.log({fileData, fileHeaders});
    // loop through fileHeaders and add a new header to the array after a header with the value amountHeader
    const amountHeaderIndex = fileHeaders.indexOf(amountHeader);
    fileHeaders.splice(amountHeaderIndex + 1, 0, "Matched");
    // loop through fileData and add a new property to each object after the property with the key amountHeader
    for (let i = 0; i < fileData.length; i++) {
        const data = fileData[i];
        const matchingRow = matchingRows.find((row) => row.agentIndex === i);
        if (matchingRow) {
            data["Matched"] = "Yesss";
        } else {
            data["Matched"] = "No";
        }
    }

    
    // write code to output a csv file with the headers and data
    let csvContent = "data:text/csv;charset=utf-8,";
    // add to the csv content the headers
    csvContent += fileHeaders.join(",");
    csvContent += "\r";
    for(let i = 0; i < fileData.length; i++) {
        const data = fileData[i];
        console.log({data})
        for (let j = 0; j < fileHeaders.length; j++) {
            const header = fileHeaders[j];
        
            // if data[header] is undefined or null, add an empty string to the CSV
            const cellValue = data[header] ?? "";
        
            // add a comma after each data item, except for the last one
            if (j !== fileHeaders.length - 1) {
              csvContent += cellValue + ",";
            } else {
              csvContent += cellValue;
            }
          }
        csvContent += "\r";
    }
    
    const encodedUri = encodeURI(csvContent);
    console.log({csvContent})
    downloadCsvFromUri(encodedUri);

  }

  const downloadCsvFromUri = (encodedUri: string) => {
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "myData.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // sort matching rows by agent index
  const agentSortedMatchingRows = matchingRows.sort((a, b) => a.agentIndex - b.agentIndex);
  const agentSet = new Set();

  // calculate the sum of amount for agentSortedMatchingRows
    const agentSum = agentSortedMatchingRows.reduce((acc, curr) => {
        const agentRow = agentInvoiceData[curr.agentIndex]
        if(agentRow.empty) return acc;
        const agentAmount = agentRow.amount;
        return acc + agentAmount;
    }, 0);
    console.log({agentSortedMatchingRows})
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
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={downloadAgentCsv}
          >
            Download highlighted Agent CSV
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
                        <th className="px-6 py-3">Table Index</th>
                        <th className="px-6 py-3">Last 4 Digits</th>
                        <th className="px-6 py-3">Amount ({agentSum})</th>
                        <th className="px-6 py-3">Opera Index</th>
                        <th className="px-6 py-3">Agent Index</th>
                    </tr>
                </thead>
                <tbody>
                    

        {agentSortedMatchingRows.map(({agentIndex, operaIndex}, index) => {
            // keep track of matching agentIndexes 
            const operaRow = operaInvoiceData[operaIndex];
            if(operaRow.empty) return null;
            const isDuplicate = agentSet.has(agentIndex);
            if(!isDuplicate) {
                agentSet.add(agentIndex);
            }
            return (
                <tr key={agentIndex + operaIndex + operaRow.last4Digits} className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${isDuplicate ? 'text-red-400' : ''}`}>
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{operaRow.last4Digits}</td>
                    <td className="px-6 py-4">{operaRow.amount}</td>
                    <td className="px-6 py-4">{operaIndex + 2}</td>
                    <td className="px-6 py-4">{agentIndex + 2}</td>
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
