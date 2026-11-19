import { ProjectNavProps } from "@components/ProjectNav/ProjectNav";
import { PROJECTS } from "./projects.contant";

export const findNextPrevProjects = (path: string): ProjectNavProps => {
  const projIndex = PROJECTS.findIndex((p) => p.path == path);
  if (projIndex == -1) {
    throw Error("path not found");
  }

  const nextProjectIdx = projIndex + 1 == PROJECTS.length ? 0 : projIndex + 1;
  const prevProjectIdx =
    projIndex - 1 < 0 ? PROJECTS.length - 1 : projIndex - 1;

  return { prev: PROJECTS[prevProjectIdx], next: PROJECTS[nextProjectIdx] }
}
