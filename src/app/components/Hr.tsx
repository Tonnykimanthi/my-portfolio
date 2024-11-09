type HrProps = {
  title: string;
};

const Hr = ({ title }: HrProps) => {
  return (
    <div className="relative mx-auto my-10 max-w-md border border-primary/50">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[20deg] rounded-full bg-white px-4 py-2">
        {title}
      </span>
    </div>
  );
};

export default Hr;
