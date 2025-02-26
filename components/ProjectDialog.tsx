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
import { Project } from "../data/projects"
import projectDialogStyles from "./projectDialog.module.css"
import { LinkStyledAsButton } from "./designSystem/Button"
import { ExternalLink, Github } from "./designSystem/Icon"
import Image from "next/image"

export type ProjectDialogProps = {
  project: Project
  trigger: ReactNode
}

export const ProjectDialog = ({ project, trigger }: ProjectDialogProps) => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent data-size="xl">
          <DialogHeader title={project.title} topRightContent={<DialogCloseButton />} />
          <DialogBody>
            <div className={projectDialogStyles.body}>
              <div className={projectDialogStyles.previewImage}>
                <Image src={project.imgSrc} alt={project.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div className={projectDialogStyles.description}>
                {project.description.map((descriptionSection, i) => (
                  <p key={i}>{descriptionSection}</p>
                ))}
              </div>
            </div>
            <div className={projectDialogStyles.footer}>
              {project.githubUrl && (
                <LinkStyledAsButton
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-variant="secondary"
                >
                  View source code
                  <Github size="md" />
                </LinkStyledAsButton>
              )}
              {project.url && (
                <LinkStyledAsButton href={project.url} target="_blank" rel="noopener noreferrer" data-variant="primary">
                  View project
                  <ExternalLink size="md" />
                </LinkStyledAsButton>
              )}
            </div>
          </DialogBody>
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  )
}
