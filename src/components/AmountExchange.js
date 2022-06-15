import React, { useState } from "react";
import InputForm from "./InputForm";
import "../styles/AmountExchange.css";

const AmountExchange = () => {
  let defaultcurrency = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  let newcurrency = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [billValue, setBillValue] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [defaultCurrency, setDefaultCurrency] = useState(defaultcurrency);
  const [newCurrencyToPay, setNewCurrencyToPay] = useState(newcurrency);
  const [showReturnValue, setShowReturnValue] = useState(false);
  const [returnValue, setReturnValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let bill_value = parseInt(billValue);
    let amount_paid = parseInt(amountPaid);
    setReturnValue(amount_paid - bill_value);
    let max_notes,
      position = 0;
    let return_amount = amount_paid - bill_value;
    if (bill_value > 0 && amount_paid > 0) {
      setShowReturnValue(true);
      // setBillValue("");
      // setAmountPaid("");
    } else {
      setShowReturnValue(false);
    }

    defaultCurrency.map((item) => {
      if (return_amount >= item) {
        max_notes = parseInt(return_amount / item);
        position = defaultCurrency.indexOf(item);
        newCurrencyToPay.splice(position, 1, max_notes);
        setNewCurrencyToPay(newCurrencyToPay);
        return_amount = parseInt(return_amount % item);
      }
    });
  };

  const handleReset = () => {
    setBillValue("");
    setAmountPaid("");
    setNewCurrencyToPay(newcurrency);
    setShowReturnValue(false);
  };

  const defCur = defaultCurrency.map((item, index) => {
    return (
      <tr>
        <td key={index}>{item}</td>
      </tr>
    );
  });

  const newCur = newCurrencyToPay.map((item, index) => {
    return (
      <tr>
        <td key={index}>{item}</td>
      </tr>
    );
  });

  return (
    <>
      <InputForm
        billValue={billValue}
        setBillValue={setBillValue}
        amountPaid={amountPaid}
        setAmountPaid={setAmountPaid}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
      />
      {showReturnValue && (
        <>
          <label className="Amount">Total Bill Amount is: ${billValue}</label>
          <label className="Amount">Total Amount Paid is: ${amountPaid}</label>
          <label className="Amount">
            Total Amount to be returned is: ${returnValue}
          </label>
          <div>
            <table className="Table">
              <thead>
                <tr>
                  <th className="TablesHeadingDef">Available Notes</th>
                  <th className="TablesHeadingMin">No. of Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="TablesDescDef">{defCur}</td>
                  <td className="TablesDescNew">{newCur}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default AmountExchange;
