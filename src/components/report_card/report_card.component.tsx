interface Props {
  title: string;
  value: number;
  bgcolor: string;
}

export default function ReportCard({ title, value, bgcolor }: Props) {
  return (
    <div className={`${bgcolor} flex-1 p-4 rounded-2xl text-center`}>
      <div>{title}</div>
      <div className="text-3xl">{value}</div>
    </div>
  );
}
