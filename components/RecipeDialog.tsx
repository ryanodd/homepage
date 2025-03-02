import { ReactNode } from "react"
import {
  DialogBody,
  DialogCloseButton,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
} from "./designSystem/Dialog"
import recipeDialogStyles from "./recipeDialog.module.css"
import { LinkStyledAsButton } from "./designSystem/Button"
import { ExternalLink, Github } from "./designSystem/Icon"
import Image from "next/image"
import { LinkItUrl } from "react-linkify-it"
import linkStyles from "./designSystem/link.module.css"
import { Recipe } from "../data/recipes"

export type RecipeDialogProps = {
  recipe: Recipe
  trigger: ReactNode
}

export const RecipeDialog = ({ recipe, trigger }: RecipeDialogProps) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent data-size="xl">
          <DialogHeader title={recipe.title} topRightContent={<DialogCloseButton />} />
          <DialogBody>
            <div className={recipeDialogStyles.body}>
              <div className={recipeDialogStyles.previewImage}>
                <Image src={recipe.image} alt={recipe.title} fill style={{ objectFit: "cover" }} placeholder="blur" />
              </div>

              <LinkItUrl className={linkStyles.link}>
                {recipe.sections.map((section) => (
                  <>
                    {section.title !== undefined && (
                      <h3 className={recipeDialogStyles.sectionHeader}>{section.title}</h3>
                    )}
                    <div className={recipeDialogStyles.description}>
                      {section.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </>
                ))}
              </LinkItUrl>
              <div className={recipeDialogStyles.footer}>
                {recipe.url && (
                  <LinkStyledAsButton
                    href={recipe.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-variant="secondary"
                  >
                    View recipe
                    <ExternalLink size="md" />
                  </LinkStyledAsButton>
                )}
              </div>
            </div>
          </DialogBody>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
}
