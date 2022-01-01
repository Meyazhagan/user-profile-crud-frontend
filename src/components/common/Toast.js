import React from "react";

function ToastMessage({ closeToast, onUndo, messaage }) {
    return (
        <div className="flex justify-around items-center">
            <div>{messaage}</div>
            <button
                className="bg-alpha px-3 py-1 rounded-lg"
                onClick={() => {
                    onUndo();
                }}>
                Undo
            </button>
        </div>
    );
}

export default ToastMessage;
