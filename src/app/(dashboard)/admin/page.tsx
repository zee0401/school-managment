import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/Chart-Graph/AttendenceChart";
import CountChart from "@/components/Chart-Graph/CountChart";
import FinanceChart from "@/components/Chart-Graph/FinanceChart";
import EventCalendar from "@/components/EventCalender";
import UserCards from "@/components/UserCards";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Left */}
      <div className="w-full lg:w-[75%] md:w-[80%] flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap-reverse">
          <UserCards type="admin" />
          <UserCards type="teacher" />
          <UserCards type="student" />
          <UserCards type="Parent" />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
          <div className="w-full h-[500px]">
            <FinanceChart />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-full  lg:w-[25%] md:w-[30%]">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
