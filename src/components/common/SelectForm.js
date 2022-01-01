import classNames from "classnames";
import React, { useState } from "react";

import Select from "../common/Select";

function SelectForm({ selectList, submitText, initialValue, validator, onSubmit, onCancel }) {
    const [value, setValue] = useState(initialValue || {});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleValueChange = (field, selectedList) => {
        const newValue = { ...value, [field]: selectedList };
        // newValue[e.target.name] = e.target.value;
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
        return isValid;
    };

    return (
        <form className="w-5/6 md:w-3/6  mx-auto">
            {selectList.map((list, index) => (
                <div key={index}>
                    <Select
                        label={list.label}
                        listItems={list.listItems}
                        multiple={list.multiple}
                        onChange={(e, selectedList) => handleValueChange(list.field, selectedList)}
                        initialValue={initialValue[list.field]}
                    />
                    {errors[list.field] && <div className="text-red-400">{errors[list.field]}</div>}
                </div>
            ))}
            <div className="flex justify-end gap-6 mr-6">
                <button
                    onClick={handleCancel}
                    className="text-red-500
                    border-2
                    border-transparent
                    rounded-md px-4 py-1
                    hover:border-red-500
                    focus:border-red-500 focus:outline-none">
                    Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    disabled={!isValid}
                    className={classNames(
                        `text-green-500 border-2 border-green-500 
                        rounded-md px-4 py-1
                      hover:bg-green-500 hover:text-white
                      focus:bg-green-500 focus:text-white focus:outline-none`,
                        { " opacity-70 cursor-not-allowed ": !isValid }
                    )}>
                    {submitText}
                </button>
            </div>
        </form>
    );
}

export default SelectForm;
