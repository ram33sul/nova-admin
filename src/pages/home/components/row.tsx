import { FaExternalLinkAlt } from "react-icons/fa";
import Button from "../../../components/button/button.component";
import { Kyc, KycStatus } from "../../../types/kyc";
import { openInNewTab } from "../../../utils/download";
import { ButtonStyleType } from "../../../components/button/button.d";
import { Utils } from "../home.util";
import StatusChip from "../../../components/status_chip/status_chip.component";

interface Props {
  kyc: Kyc;
  updatedStatus?: KycStatus;
  actionLoaders: Set<string>;
  utils: Utils;
}

export default function Row({
  kyc,
  updatedStatus,
  actionLoaders,
  utils,
}: Props) {
  const status = updatedStatus ?? kyc.status;
  return (
    <tr key={kyc._id}>
      <td className="p-3">{kyc._id}</td>
      <td>{kyc.name}</td>
      <td>{kyc.email}</td>
      <td>
        {kyc.dialCode} {kyc.mobile}
      </td>
      <td>
        <StatusChip status={status} />
      </td>
      <td>
        <Button
          onClick={() => openInNewTab(kyc.url)}
          className="flex gap-2 items-center m-auto"
        >
          {kyc.urlType} <FaExternalLinkAlt />
        </Button>
      </td>
      <td>
        {status === KycStatus.PENDING ? (
          <div className="flex gap-2 m-auto w-fit">
            <Button
              loading={actionLoaders.has(kyc._id)}
              styletype={ButtonStyleType.ACCEPT}
              onClick={utils.handleStatusChange(kyc._id, KycStatus.APPROVED)}
            >
              Approve
            </Button>
            <Button
              loading={actionLoaders.has(kyc._id)}
              styletype={ButtonStyleType.REJECT}
              onClick={utils.handleStatusChange(kyc._id, KycStatus.REJECTED)}
            >
              Reject
            </Button>
          </div>
        ) : (
          <div className="opacity-50">Action Taken</div>
        )}
      </td>
    </tr>
  );
}
