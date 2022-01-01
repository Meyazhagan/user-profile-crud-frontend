import classNames from "classnames";
import React, { useEffect, useState } from "react";
import ImageInput from "./ImageInput";

function Form(props) {
    const { initialValue, fields = [], title, validator, submitText, onSubmit, onCancel } = props;

    const [value, setValue] = useState(initialValue);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleValueChange = (name, input) => {
        const newValue = { ...value };
        newValue[name] = input;
        validateValue(newValue);
        setValue(newValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
    };
    const handleCancel = (e) => {
        e.preventDefault();
        onCancel();
    };
    const validateValue = (value) => {
        const errors = validator(value);
        let isValid = Object.keys(errors).length === 0 ? true : false;
        setErrors(errors);
        setIsValid(isValid);
    };

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return (
        <form className="grid grid-cols-8 bg-alpha p-4 rounded-md max-w-max mx-auto items-center gap-4">
            <div className="col-span-full text-center mb-4">{title}</div>
            <ImageInput
                name="avatar"
                id="avatar"
                label="Avatar"
                value={value["avatar"]}
                handleValueChange={handleValueChange}
            />
            {fields.map(({ field, label, ...rest }, index) => (
                <React.Fragment key={index}>
                    <label htmlFor={field} className="col-span-3">
                        {label}
                    </label>
                    <div className="col-span-5">
                        <input
                            type="text"
                            onChange={(e) => handleValueChange(field, e.target.value)}
                            {...rest}
                            value={value[field]}
                            id={field}
                            name={field}
                            className="appearance-none bg-alpha  rounded-md py-2 px-4 focus:ring-4 ring-accent ring-opacity-70 w-full  border-0 outline-none"
                        />
                        {errors[field] && <div className="text-red-400">{errors[field]}</div>}
                    </div>
                </React.Fragment>
            ))}
            <div className="col-span-full">
                <div className="flex flex-row-reverse gap-6 mr-6">
                    <button
                        onClick={(e) => handleSubmit(e)}
                        disabled={!isValid}
                        className={classNames(
                            `border-2
                              rounded-md px-4 py-1
                            hover:bg-green-500 hover:text-white
                            focus:bg-green-500 focus:text-white focus:outline-none`,
                            {
                                "opacity-70 text-green-700 border-green-700  cursor-not-allowed ":
                                    !isValid,
                                "border-green-500 text-green-500": isValid,
                            }
                        )}>
                        {submitText}
                    </button>
                    <button
                        onClick={(e) => handleCancel(e)}
                        className="text-red-500
                        border-2
                        border-transparent
                        rounded-md px-4 py-1
                        hover:border-red-500
                        focus:border-red-500 focus:outline-none">
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Form;
