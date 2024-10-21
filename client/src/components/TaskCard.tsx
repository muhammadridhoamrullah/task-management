interface Props {
  task: {
    id: number;
    title: string;
    category: string;
  };
  i: number;
}

let color;


export default function TaskCard({ task, i }: Props) {
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{task.title}</td>
      <td>{task.category}</td>
      <td>
        <button className="btn btn-secondary">Delete</button>
      </td>
    </tr>
  );
}
