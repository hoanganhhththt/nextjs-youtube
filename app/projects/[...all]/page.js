const ProjectPage = ({params}) => {
  return (
    <div>
      <h1>Project</h1>
      <br />
      All Routes
      {params?.all?.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </div>
  )
};

export default ProjectPage;