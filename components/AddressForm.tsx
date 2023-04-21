import React, { ChangeEvent, FormEvent, useState } from "react";

function AddressForm(props: { 
  handler: (address: string) => void,
  airdropHandler: (address: string) => void
}) {
    const [value, setValue] = useState({
        address: "",
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.handler(value.address);
    };

    const handleAddressInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setValue((values) => ({
            ...values,
            address: event.target.value,
        }));
    };

    const handleAirdropButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        props.airdropHandler(value.address);
    }

    return (
        <div className="space-x-3 text-center">
            <form onSubmit={handleSubmit}>
                <input
                    id="public-key"
                    className="text-black border-2 border-violet-400 
                    rounded-full w-[600px] text-center my-3"
                    placeholder="Public Key (Address)"
                    name="firstName"
                    value={value.address}
                    onChange={handleAddressInputChange}
                />
                <br/>
                <button 
                    className="border-2 my-2 px-4 bg-violet-600
                    rounded-full border-violet-500 mx-3" 
                    type="submit"
                >
                    Check Balance
                </button>
            </form>
        </div>
    )
}

export default AddressForm;
