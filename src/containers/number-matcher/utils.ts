import { Invoice, SantisedInvoice } from "./types";

export const santiseData = ({ cardNumber, amount }: Invoice): SantisedInvoice => {
  console.log('sanitise',{cardNumber, amount})
    const last4Digits = Number(cardNumber.slice(-4));
    return {
      cardNumber,
      amount,
      last4Digits,
    };
  };
  export const readCsv = (fileInput: HTMLInputElement | null, cardNumberHeader: string, amountHeader: string): Promise<SantisedInvoice[]> => {
    return new Promise((resolve, reject) => {
      if (!fileInput || !fileInput) return reject("File input not found");
      console.log({fileInput})
      const oFile = fileInput.files?.[0];
      if (!oFile) return reject("No file selected");
  
      const fileReader = new FileReader();
      fileReader.readAsText(oFile);
  
      fileReader.onload = (e) => {
        const fileText = e.target?.result;
        if (!fileText) reject("File is empty");
  
        const fileRows = (fileText as string).split("\n");
        const fileHeaders = fileRows[0].split(",");
        const fileData = fileRows.slice(1).map((row) => {
          const rowData = row.split(",");
          const rowDataObject: any = {};
          fileHeaders.forEach((header, index) => {
            rowDataObject[header.trim()] = rowData[index];
          });
          return rowDataObject;
        });
        
        // this will filter out undefined rows with no data.
        console.log({fileData})
        const filterRows = fileData.filter((data) => {
          return data[cardNumberHeader] && data[amountHeader]
        })
        console.log({filterRows})
        const sanitisedData = filterRows.map((data) => {
            console.log({data, amount: data[amountHeader], cardNumber: data[cardNumberHeader], cardNumberHeader, amountHeader})

          return santiseData({
            cardNumber: data[cardNumberHeader],
            amount: parseFloat(data[amountHeader]),
          });
        });
  
        return resolve(sanitisedData);
      };
  
      fileReader.onerror = (e) => {
        reject("File could not be read");
      };
    });
  };
  

  export const searchAgent = ({ last4Digits, amount }: SantisedInvoice, agentSheet: SantisedInvoice[]) => {
    for (let i = 0; i < agentSheet.length; i++) {
      const agentRow = santiseData(agentSheet[i]);
      console.log({last4Digits, amount, agentRow})
      if (agentRow.amount === amount && agentRow.last4Digits === last4Digits) {
        return i;
      }
    }
    return -1;
  };