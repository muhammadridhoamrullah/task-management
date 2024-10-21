import TaskCard from "@/components/TaskCard";
import Image from "next/image";
async function fetchData() {
  const res = await fetch("http://localhost:3001/tasks");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface Task {
  id: number;
  title: string;
  category: string;
}

export default async function Home() {
  const data: Task[] = await fetchData();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((task: Task, i: number) => {
              return <TaskCard key={task.id} task={task} i={i} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
