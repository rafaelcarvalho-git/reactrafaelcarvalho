import './SwitchTheme.css'
import { BsArrowUp } from 'react-icons/bs'
import { useEffect, useState } from 'react'

function SwitchTheme() {
    return (
        <label class="switch switch-theme">
            <input type="checkbox" />
            <span class="slider round"></span>
        </label>
    );
}

export default SwitchTheme;