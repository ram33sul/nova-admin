import { KycStatus } from "../../types/kyc";

const bgcolors = {
  PENDING: "bg-gray-500/15",
  APPROVED: "bg-green-500/15",
  REJECTED: "bg-red-500/15",
};

const colors = {
  PENDING: "text-gray-500",
  APPROVED: "text-green-700",
  REJECTED: "text-red-700",
};

interface Props {
  status: KycStatus;
}

export default function StatusChip({ status }: Props) {
  return (
    <div className={`px-2 rounded-xl ${bgcolors[status]} ${colors[status]}`}>
      {status.toLowerCase()}
    </div>
  );
}
