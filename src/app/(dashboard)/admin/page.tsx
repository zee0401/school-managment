import UserCards from "@/components/UserCards";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Left */}
      <div className="w-full lg:w-[75%] md:w-[80%] flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap-reverse">
          <UserCards type="teacher" />
          <UserCards type="student" />
          <UserCards type="parent" />
          <UserCards type="admin" />
        </div>
      </div>

      {/* Right */}
      <div className="w-full  lg:w-[25%] md:w-[30%]">right</div>
    </div>
  );
};

export default AdminPage;
