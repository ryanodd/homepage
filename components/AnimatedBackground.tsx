import animatedBackgroundStyles from "./animatedBackground.module.css"

//
/**
 *
 * All paths use a 100x100 viewBox but are 800x100 in actual size,
 * travelling horizontally across the screen.
 * It's required that the first & last 100x100 ssection of each curve be blank,
 * so the animation loops properly & starts with no visibility.
 *
 * Use https://yqnn.github.io/svg-path-editor/ to edit the paths.
 */

//

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
        <path d="M 108 100 C 138 12 166 11 169 40 C 173 67 189 88 200 50 C 211 13 237 16 258 49 C 274 76 318 80 328 48 C 339 13 379 32 411 48 C 442 64 483 85 508 45 C 532 7 579 13 594 57 L 608 100 Z" />
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
        <path d="M 110 100 C 143 96 143 20 161 44 C 179 67 193 82 213 54 C 234 24 251 28 261 58 C 274 90 286 80 302 55 C 318 27 336 10 345 51 C 356 95 403 92 416 47 C 427 4 462 18 486 55 C 511 94 530 83 561 51 C 590 21 601 36 615 57 C 629 77 632 75 643 68 C 651 64 661 73 668 86 L 675 100 Z" />
      </svg>
      <svg
        className={`
          ${animatedBackgroundStyles.wave}
          ${animatedBackgroundStyles.wave4}
          `}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M 670 0 C 645 49 591 85 577 46 C 566 12 551 10 517 48 C 486 83 472 78 452 56 C 429 33 422 53 389 64 C 357 75 320 86 315 55 C 311 22 273 24 264 63 C 256 95 230 83 221 66 C 213 49 202 43 183 49 C 165 55 152 50 129 24 L 108 0" />
      </svg>
    </div>
  )
}
