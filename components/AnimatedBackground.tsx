import animatedBackgroundStyles from "./animatedBackground.module.css"

export const AnimatedBackground = () => {
  return (
    <div className={animatedBackgroundStyles.background}>
      <svg
        className={`
          ${animatedBackgroundStyles.wave}
          ${animatedBackgroundStyles.wave1}
          `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M 150 100 C 180 12 208 11 211 40 C 215 67 231 88 242 50 C 253 13 279 16 300 49 C 316 76 360 80 370 48 C 381 13 421 32 453 48 C 484 64 525 85 550 45 C 574 7 621 13 636 57 L 650 100 Z" />
      </svg>
      <svg
        className={`
          ${animatedBackgroundStyles.wave}
          ${animatedBackgroundStyles.wave2}
          `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M 130 0 L 147 41 C 158 64 182 80 196 50 C 210 19 224 37 245 66 C 268 96 281 15 320 57 C 355 95 380 85 387 55 C 395 23 427 9 439 49 C 452 88 478 70 487 40 C 496 12 525 16 534 46 C 542 78 557 82 566 50 C 576 19 604 10 614 36 C 625 62 641 53 646 25 L 650 0 Z" />
      </svg>
      <svg
        className={`
          ${animatedBackgroundStyles.wave}
          ${animatedBackgroundStyles.wave3}
          `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M 150 100 C 171 13 190 9 195 43 C 202 89 246 80 264 50 C 278 27 296 10 305 51 C 316 95 363 92 376 47 C 387 4 422 18 446 55 C 471 94 490 83 521 51 C 550 21 575 25 584 56 C 592 88 607 96 614 53 C 621 12 627 9 637 52 L 650 100 Z" />
      </svg>
    </div>
  )
}
