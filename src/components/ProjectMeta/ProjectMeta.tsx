import { formatLaunched, ProjectStatus } from "@lib/projects.contant";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  LIVE: "border-verdigris-shadow text-verdigris-shadow",
  RETIRED: "border-tuna/40 text-tuna/60",
  ALPHA: "border-elephant text-elephant",
  WIP: "border-elephant text-elephant",
};

export const StatusBadge = ({ status }: { status: ProjectStatus }) => (
  <span
    className={`inline-block border solid px-2 py-0.5 text-body2 uppercase tracking-widest ${STATUS_STYLES[status]}`}>
    {status}
  </span>
);

export const TagPills = ({ tags }: { tags: string[] }) => (
  <p
    className="font-bold text-body2 text-verdigris leading-relaxed"
    aria-label="Tags">
    {tags.join(", ")}
  </p>
);

interface ProjectMetaProps {
  tags: string[];
  status: ProjectStatus;
  launched?: string;
}

export const ProjectMeta = ({ tags, status, launched }: ProjectMetaProps) => {
  const launchedLabel = formatLaunched(launched);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <StatusBadge status={status} />
        {launchedLabel && (
          <span className="text-body2 text-tuna/60">
            Launched {launchedLabel}
          </span>
        )}
      </div>
      <TagPills tags={tags} />
    </div>
  );
};
