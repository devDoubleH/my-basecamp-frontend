function ProjectCard() {
  return (
    <div className="flex flex-col justify-center items-center w-72 h-44 rounded-sm border">
      {/* header */}
      <div className="flex justify-between w-full h-2/5 bg-slate-800 p-2">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-white">Project Title</h1>
          <p className="text-sm text-white">Project owner</p>
        </div>
        <div>
          <p className="text-lg text-white">Edit</p>
        </div>
      </div>
      {/* body */}
      <div className="h-3/5 w-full">
        <div className="flex items-center h-3/5 w-full px-2">
          <p className="text-base">Description</p>
        </div>
        {/* footer */}
        <div className="h-2/5 w-full bg-slate-500">
          <div className="flex h-full justify-between items-center mx-2">
            <div className="flex">
              <p className="text-sm mr-1 text-white">Members</p>
              <p className="text-sm text-white">Discusses</p>
            </div>
            <div className="rounded-sm p-2 bg-red-500">
              <p className="text-sm text-white">Delete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
