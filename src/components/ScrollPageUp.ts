import { animateScroll } from 'react-scroll';

const options = { duration: 500, smooth: true }

export const ScrollPageUp = () => {
    animateScroll.scrollToTop(options);
}