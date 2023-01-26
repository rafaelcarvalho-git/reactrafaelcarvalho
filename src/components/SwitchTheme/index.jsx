import * as S from './styles'
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
        setTheme((theme) => !theme);
    }

    return (
        <>
            {showSwitch && (
                <S.Switch>
                    <input type="checkbox" onClick={changeTheme} />
                    <S.Icon></S.Icon>
                </S.Switch>
            )
            }
        </>
    );
}

export default SwitchTheme;