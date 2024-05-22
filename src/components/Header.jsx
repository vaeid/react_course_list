const status = ['All', 'Completed', 'Uncompleted', 'Active'];
export default function Header() {
  return (
    <div>
      <h1 className=''>My Courses List (3)</h1>
      <div className='course-status'>
        {status.map((s) => (
          <div key={s} className={s === 'All' ? 'active' : ''}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
