import Image from "next/image"
import avatarImageSrc from "../../public/images/avatar2.png"
import avatarStyles from "./avatar.module.css"

export type AvatarProps = {
  size: "md" | "2xl"
}

export const Avatar = ({ size }: AvatarProps) => {
  return (
    <div className={avatarStyles.avatar} data-size={size}>
      <Image src={avatarImageSrc} alt="Ryan Odd" />
    </div>
  )
}
