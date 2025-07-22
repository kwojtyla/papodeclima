interface InstructionCardProps {
  children: React.ReactNode;
  className?: string;
}

export const InstructionCardHeader: React.FC<InstructionCardProps> = ({
  children,
}) => {
  return (
    <div className="flex gap-1 items-center text-primary text-base font-bold">
      {children}
    </div>
  );
};

export const InstructionCardContent: React.FC<InstructionCardProps> = ({
  children,
}) => {
  return <p className="text-sm text-primary">{children}</p>;
};

export const InstructionCard: React.FC<InstructionCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col gap-2 p-6 bg-secondary rounded-2xl border border-tertiary ${className}`}
    >
      {children}
    </div>
  );
};
