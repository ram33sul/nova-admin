import { useNavigate } from "react-router-dom";
import { getKycReport } from "../../api/kyc_service";
import useApi from "../../custom_hooks/useApi";
import { KycReport } from "../../types/kyc";
import { routePaths } from "../../Routes";
import Button from "../../components/button/button.component";
import { MdArrowBackIos } from "react-icons/md";
import Loader from "../../components/loader/loader.component";
import ReportCard from "../../components/report_card/report_card.component";

export default function Report() {
  const [kycReport, kycReportLoading] = useApi<KycReport>(getKycReport);

  const navigate = useNavigate();

  const handleGoHome = async () => {
    navigate(routePaths.HOME);
  };

  return kycReportLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-4 p-4">
      <Button className="mr-auto" onClick={handleGoHome}>
        <MdArrowBackIos /> Home
      </Button>
      <div className="bg-gray-500/25 rounded-lg flex justify-between p-4">
        <div>Total Users: </div>
        <div className="font-bold">{kycReport?.usersCount || 0}</div>
      </div>
      <div className="flex gap-4">
        <ReportCard
          title="Total Submissions"
          bgcolor="bg-blue-500"
          value={kycReport?.kycsTotalCount || 0}
        />
        <ReportCard
          title="Pending Submissions"
          bgcolor="bg-gray-500"
          value={kycReport?.kycsPendingCount || 0}
        />
        <ReportCard
          title="Approved Submissions"
          bgcolor="bg-green-500"
          value={kycReport?.kycsApprovedCount || 0}
        />
        <ReportCard
          title="Rejected Submissions"
          bgcolor="bg-red-500"
          value={kycReport?.kycsRejectedCount || 0}
        />
      </div>
    </div>
  );
}
