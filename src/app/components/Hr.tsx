type HrProps = {
  title: string;
};

const Hr = ({ title }: HrProps) => {
  return (
    <div className="relative mx-auto my-16 max-w-md border border-primary">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[20deg] rounded-full bg-dark px-4 py-2 font-medium uppercase text-white">
        {title}
      </span>
    </div>
  );
};

export default Hr;
