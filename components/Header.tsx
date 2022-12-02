import { HeaderLink } from "./HeaderLink"

export const Header = () => {
  return (
    <header className="flex flex-row">
      <a href="." className="text-xl p-5">
        Ryan Odd
      </a>
      <div className="flex ml-auto px-5">
        <HeaderLink url="./projects">Projects</HeaderLink>
        <HeaderLink url="./resume">Resume</HeaderLink>
      </div>
    </header>
  )
}
