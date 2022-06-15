import React from "react";
import "../styles/InputForm.css";

const InputForm = ({
  billValue,
  setBillValue,
  amountPaid,
  setAmountPaid,
  handleReset,
  handleSubmit,
}) => {
  return (
    <form>
      <div className="BillAmount">
        <label className="BillAmountLabel">Enter Bill Amount to Pay </label>
        <input
          type="number"
          name="billValue"
          value={billValue}
          placeholder="0"
          onChange={(e) => setBillValue(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="AmountPaid">
        <label className="AmountPaidLabel">Enter Total Amount Paid </label>
        <input
          type="number"
          name="amountPaid"
          value={amountPaid}
          placeholder="0"
          onChange={(e) => setAmountPaid(e.target.value)}
          autoComplete="off"
        />
      </div>
      <div className="Buttons">
        <button className="ResetButton" type="reset" onClick={handleReset}>
          Reset
        </button>

        <button
          className="SubmitButton"
          type="submit"
          onClick={handleSubmit}
          disabled={
            !(amountPaid > 0 && billValue > 0) || !(amountPaid - billValue > 0)
          }
        >
          Find Change Currency Notes
        </button>
      </div>
    </form>
  );
};

export default InputForm;
