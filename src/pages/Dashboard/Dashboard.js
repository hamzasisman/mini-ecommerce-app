import { useLocalization } from "../../hooks/useLocalization";

const Dashboard = () => {

  const strings = useLocalization()

  return (
    <>
      <h2>{strings.dashboard.welcome} employee.FullName!</h2>
      <hr className="mb-10 mt-3 text-[#0000001a]" />
    </>
  );
};

export default Dashboard;
