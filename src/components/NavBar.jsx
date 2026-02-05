import { useRef, useState, useEffect } from "react";
import { MapPinPlus, HamburgerIcon } from "lucide-react";

const NavBar = () => {
    const indicatorRef = useRef(null);
    const navRef = useRef(null);

    const [active, setActive] = useState(null);

    useEffect(() => {
        const firstLink = navRef.current?.querySelector("a");
        if (firstLink) {
            setActive(firstLink);
        }
    }, []);

    useEffect(() => {
        if (!active) return;

        const indicator = indicatorRef.current;
        const { offsetLeft, offsetWidth } = active;

        indicator.style.width = `${offsetWidth}px`;
        indicator.style.transform = `translateX(${offsetLeft}px)`;
    }, [active]);

    const handleClick = (e) => {
        setActive(e.currentTarget);
    };

    return (
        <header>
            <nav>
                <h2>
                    <span className="app-highlight">
                        <MapPinPlus />e
                    </span>
                    -TRANSIT
                </h2>
                <ul ref={navRef}>
                    <span
                        className="navIndicator"
                        ref={indicatorRef}
                    ></span>
                    <li>
                        <a
                            href="#home"
                            onClick={handleClick}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            onClick={handleClick}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#pricing"
                            onClick={handleClick}
                        >
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={handleClick}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={handleClick}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
