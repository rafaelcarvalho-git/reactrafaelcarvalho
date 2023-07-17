import * as S from './styles'
import { BsArrowUp } from 'react-icons/bs'
import { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };

    return (
        <>
            {showButton && (
                <S.ScrollButton onClick={scrollToTop}><BsArrowUp /></S.ScrollButton>
            )}
        </>
    );
}

export default ScrollToTop;