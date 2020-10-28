import React, { useState } from "react";

export default function Api(props) {
    fetch('https://api.randomuser.me/')
        .then(response => response.json())
        .then(data => console.log(data))
}