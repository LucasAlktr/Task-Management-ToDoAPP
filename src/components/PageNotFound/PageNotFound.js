import React from "react";
import './style.scss'

export default function PageNotFound() {
    return(
    <>
        <div className="container-error-page">
            <h1 className="title-error-page">Page Not Found</h1>
            <p className="text-error-page"><b>Oh no!</b> It seems that this page does not exist. Please verify the address.</p>
        </div>
    </>
    );
}




