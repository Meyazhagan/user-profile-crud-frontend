import React, { useEffect, useRef, useState } from "react";

function ImageInput({ name, id, label, value, handleValueChange }) {
    const [imageUrl, setImageUrl] = useState(value);
    const [url, setUrl] = useState(value);
    const [error, setError] = useState("");
    let inputRef = useRef();

    useEffect(() => {
        setUrl(value);
        setImageUrl(value);
    }, [value]);
    // const inputError = formik.touched[name] && formik.errors[name];

    if (imageUrl)
        return (
            <div className="flex flex-col col-span-full">
                <p className="ml-4">{label}</p>
                <div className="border border-gray-500 p-2 mb-1 rounded-md peer">
                    {!error ? (
                        <img
                            src={value || ""}
                            className="h-60 object-scale-down mx-auto"
                            alt="Invalid Url"
                            // onLoad={(e) => console.log(e)}
                            onError={(e) => setError("Invalid Url")}
                        />
                    ) : (
                        <div>{error}</div>
                    )}
                </div>
                <div className="flex justify-between">
                    {/* <Error error={inputError} /> */}
                    <button
                        type="reset"
                        className="ml-auto bg-black text-white px-4 py-2 rounded-md"
                        onClick={(e) => {
                            e.preventDefault();
                            setImageUrl("");
                            // formik.setFieldValue();
                            setError("");
                        }}>
                        Change
                    </button>
                </div>
            </div>
        );

    return (
        <div className="flex flex-col col-span-full">
            <p className="ml-4">{label}</p>
            <input
                type="text"
                placeholder="Enter Image Url"
                className="appearance-none bg-alpha rounded-md py-2 px-4 focus:ring-4 ring-accent ring-opacity-70 w-full  border-0 outline-none"
                ref={inputRef}
                id={id}
                name={name}
                onChange={(e) => setUrl(e.target.value)}
                value={url || ""}
            />
            <div className="flex justify-between">
                {/* <Error error={inputError} /> */}
                <button
                    className="ml-auto bg-black text-white px-4 py-2 rounded-md"
                    onClick={(e) => {
                        e.preventDefault();
                        handleValueChange(name, inputRef.current.value);
                        setImageUrl(inputRef.current.value);
                    }}>
                    Set
                </button>
            </div>
        </div>
    );
}

export default ImageInput;
