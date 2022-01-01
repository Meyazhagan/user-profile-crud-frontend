import classNames from "classnames";
import React, { useState } from "react";

function Select({ initialValue, listItems, onChange, multiple, label }) {
    const [selected, setSelected] = useState(initialValue || []);
    const handleSelect = (e, item) => {
        if (!multiple) {
            setSelected([item]);
            onChange(e, [item]);
            return;
        }
        let newSelected = [...selected];
        const index = newSelected.findIndex((s) => s === item);
        if (index !== -1) {
            newSelected.splice(index, 1);
        } else {
            newSelected = [item, ...selected];
        }
        setSelected(newSelected);
        onChange(e, newSelected);
    };

    const isSelected = (item) => {
        return selected.findIndex((s) => s === item) === -1 ? false : true;
    };
    return (
        <div className="p-4 m-4 bg-alpha rounded-lg">
            <div className="text-xl text-center uppercase text-light font-bold  truncate">
                {label}
            </div>
            <div>
                {listItems.map((item, index) => (
                    <div
                        key={`${item}-${index}`}
                        className={classNames("cursor-pointer p-2 m-1 rounded-md", {
                            "bg-accent text-dark": isSelected(item),
                        })}
                        onClick={(e) => handleSelect(e, item)}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Select;
