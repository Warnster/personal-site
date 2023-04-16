import { CleanInvoice, EmptyRow, Invoice, SantisedInvoice } from "./types";

export const santiseData = ({ cardNumber, amount }: Invoice): CleanInvoice => {
    const last4Digits = Number(cardNumber.slice(-4));
    return {
      cardNumber,
      amount,
      last4Digits,
      empty: false,
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
  
        const fileRows = (fileText as string).split("\r\n");
        const fileHeaders = fileRows[0].split(",");
        const fileData = fileRows.slice(1).map((row) => {
          const rowData = row.split(",");
          const rowDataObject: any = {};
          console.log({rowData})
          fileHeaders.forEach((header, index) => {
            rowDataObject[header.trim()] = rowData[index];
          });
          return rowDataObject;
        });
        
        // this will filter out undefined rows with no data.
        const sanitisedData = fileData.map((data) => {
          if(data[cardNumberHeader] && data[amountHeader] && !isNaN(Number(data[amountHeader]))) {
            return santiseData({
              cardNumber: data[cardNumberHeader],
              amount: parseFloat(data[amountHeader]),
            });
          }
          const emptyRow: EmptyRow = {
            empty: true
          }
          return emptyRow;
        })
        console.log({sanitisedData})
        return resolve(sanitisedData);
      };
  
      fileReader.onerror = (e) => {
        reject("File could not be read");
      };
    });
  };
  

  export const searchAgent = ({ last4Digits, amount }: CleanInvoice, agentSheet: SantisedInvoice[], duplicates: {[key: string]: number[]}) => {
    for (let i = 0; i < agentSheet.length; i++) {
      const agentRowRaw = agentSheet[i];
      if(agentRowRaw.empty) continue;
      const agentRow = santiseData(agentRowRaw);
      const key = `${agentRow.last4Digits}-${agentRow.amount}`;
      if (agentRow.amount === amount && agentRow.last4Digits === last4Digits) {
        // If there is already a match for this agentRowIndex then skip it and find the next
        if(duplicates[key] && duplicates[key].includes(i)) {
          continue;
        }
        return i;
      }
    }
    return -1;
  };


  export const highlightCsv = (fileInput: HTMLInputElement | null): Promise<{fileData: any[], fileHeaders: any[]}> => {
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
        console.log({fileText})
        const fileRows = (fileText as string).split("\r\n");
        const fileHeaders = fileRows[0].split(",");
        const fileData = fileRows.map((row) => {
          const rowData = row.split(",");
          const rowDataObject: any = {};
          fileHeaders.forEach((header, index) => {
            rowDataObject[header.trim()] = rowData[index];
          });
          return rowDataObject;
        });
        // resolve fileData without the first index
        return resolve({fileData: fileData.slice(1), fileHeaders});
      };
    });
  }

export  const downloadCsvFromUri = (encodedUri: string) => {
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "myData.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
