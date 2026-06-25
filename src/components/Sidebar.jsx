function Sidebar({
  filter,
  setFilter,
  totalTasks,
  completedTasks
}) {

  return (

    <aside className="sidebar">

      <h2>TaskFlow</h2>

      <ul>

        <li
          className={
            filter === "today"
              ? "active"
              : ""
          }
          onClick={() =>
            setFilter("today")
          }
        >
          Today
          <span>{totalTasks}</span>
        </li>

        <li
          className={
            filter === "completed"
              ? "active"
              : ""
          }
          onClick={() =>
            setFilter("completed")
          }
        >
          Completed
          <span>{completedTasks}</span>
        </li>

      </ul>

    </aside>

  );
}

export default Sidebar;