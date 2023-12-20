import React, { useState } from 'react';

function Modal(props) {
    return (
        <div className={"fixed z-10 inset-0"} style={{
            display: props.open ? "block" : "none",
        }}>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* Background overlay, show/hide based on modal state. */}
                <div className="fixed inset-0" aria-hidden="true" onClick={props.onClose}>
                    <div className="absolute inset-0"></div>
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
