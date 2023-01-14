import './SwitchTheme.css'
import { useEffect, useState } from 'react'

function SwitchTheme({ theme, setTheme }) {
    const [showSwitch, setShowSwitch] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowSwitch(true);
            } else {
                setShowSwitch(false);
            }
        });
    }, []);

    const changeTheme = () => {
        setTheme((theme) => !theme)
    }

    return (
        <>
            {showSwitch && (
                <label class="switch">
                    <input type="checkbox" onClick={changeTheme} />
                    <span class="slider round"></span>
                </label>
            )
            }
        </>
    );
}

export default SwitchTheme;