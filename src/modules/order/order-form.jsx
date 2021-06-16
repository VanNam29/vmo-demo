import { useState } from "react";
import { ConfirmModal } from "../../components/modal/modal";

const initialInput = {
  name: "",
  phone: "",
  address: "",
};

export function OrderForm(props) {
  const [invalid, setInvalid] = useState(true);
  const [inputs, setInputs] = useState(initialInput);

  const handleSubmit = (event, check) => {
    event.preventDefault();
    if (!inputs.name || !inputs.phone || !inputs.address || !check) {
      setInvalid(false);
    }
    else {
      const inforUser = {
        name: inputs.name,
        phone: inputs.phone,
        address: inputs.address,
      };
      props.purchaseSuccess(check, inforUser);
      setInvalid(true);
      //   setInputs({
      //     ...inputs,
      //     [value]: "",
      //   });
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div className="h-96 w-5/6">
      <div>
        <form onSubmit={handleSubmit} className="w-5/6 h-80 p-4 bg-blue-300 mt-12 float-right">
          <span className="text-xl p-2">Your information</span>
          <p className={`${invalid ? "hidden" : ""}`}>Field is not null</p>
          <div className="p-3">
            <label className=" text-sm w-1/4 mt-2">
              Your name: <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="name..."
              name="name"
              value={inputs.name}
              onChange={handleInputChange}
              className="w-3/4 h-8 border-solid border-2 border-gray-400"
            ></input>
          </div>
          <div className="p-3">
            <label className="float-left text-sm w-1/4 mt-2">
              Phone: <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="phone..."
              name="phone"
              value={inputs.phone}
              onChange={handleInputChange}
              className="w-3/4 h-8 border-solid border-2 border-gray-400"
            ></input>
          </div>
          <div className="p-3">
            <label className="float-left text-sm w-1/4 mt-2">
              Address: <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="address..."
              name="address"
              value={inputs.address}
              onChange={handleInputChange}
              className="w-3/4 h-8 border-solid border-2 border-gray-400"
            ></input>
          </div>
          <button type="submit" className="w-28 h-10 bg-red-600">
            {/* <strong className="text-white">Purchase</strong> */}
            <ConfirmModal handleSubmit={handleSubmit} value="Purchase" />
          </button>
        </form>
      </div>
    </div>
  );
}
