import { useEffect, useRef, useState } from "react";

import Container from "./components/container/Container";
import Button from "./components/button/Button";

import styles from "./modules/Slide.module.css";

const Slide = ({ slides }) => {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  const slidePrev = () => {
    if (active > 0) setActive(active - 1);
  };
  const slideNext = () => {
    if (active < slides.length - 1) setActive(active + 1);
  };
  return (
    <>
      <Container ref={contentRef} className={styles.container}>
        <Container
          className={styles.content}
          style={{ transform: `translateX(${position}px)` }}
        >
          {slides.map(slide => (
            <div key={slide.id} className={styles.item}>
              {slide.text}
            </div>
          ))}
        </Container>
        <nav className={styles.navigation}>
          <Button
            onClick={slidePrev}
            className="py-16 px-32 color-neutral-deep typo-main pointer rds-sm typo-md"
          >
            Anterior
          </Button>
          <Button
            onClick={slideNext}
            className="py-16 px-32 color-neutral-deep typo-main pointer rds-sm typo-md"
          >
            Próximo
          </Button>
        </nav>
      </Container>
    </>
  );
};

export default Slide;
