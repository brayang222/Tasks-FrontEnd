export const TaskFlowIcon = ({ classes }: { classes: string }) => {
  return (
    <div className="flex items-center">
      <div className={classes}>
        <i
          className="icon-[rivet-icons--check-circle-breakout] h-6 w-6 "
          role="img"
          aria-hidden="true"
        />
      </div>
      <span className="text-xl font-bold text-white">TaskFlow</span>
    </div>
  );
};
