const WorkspaceUserCardTestContext = ({ data }) => {
  return (
    <>
      <section className="flex flex-column flex-1 gap-8">
        <h4>Workspaces ↴</h4>
        <div className="py-8 px-8 brd-sm rds-sm flex flex-column flex-1">
          <ul>
            {data.workspaces.map(workspace => (
              <li>
                <div>
                  <ul className="flex flex-column gap-8">
                    <li className="flex gap-8 align-end">
                      <p>ID:</p> <h5>{workspace.id}</h5>
                    </li>
                    <li className="flex gap-8 align-start">
                      <p>Name:</p> <i>{workspace.name}</i>
                    </li>
                    <li className="flex gap-8 align-end">
                      <p>Created at:</p> <h5>{workspace.created_at}</h5>
                    </li>
                    <li className="flex gap-8 align-end">
                      <p>status:</p> <h5>{workspace.status}</h5>
                    </li>
                    <li className="flex gap-8 align-end">
                      <p>Plan:</p> <h5>{workspace.plan}</h5>
                    </li>
                    <li>
                      <div className="flex flex-column gap-8">
                        <h5>Members ↴</h5>
                        <ul className="py-8 px-8 brd-sm rds-sm flex flex-column gap-8">
                          {workspace.members &&
                            workspace.members.map(member => (
                              <li>
                                <div className="py-8 px-8 flex flex-column brd-sm rds-sm pointer gap-8">
                                  <div className="flex align-end gap-8">
                                    <p>Nome:</p>
                                    <h5>{member.name}</h5>
                                  </div>
                                  <div className="flex align-end gap-8">
                                    <p>Role:</p>
                                    <h6 className="color-neutral-soft py-4 px-12 rds-lg ">
                                      {member.role}
                                    </h6>
                                  </div>
                                </div>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </li>
                    <li className="h-full">
                      <div className="flex flex-column gap-8">
                        <h5>Projects ↴</h5>
                        <ul className="py-8 px-8 brd-sm rds-sm flex flex-column">
                          {workspace.projects &&
                            workspace.projects.map(project => (
                              <li>
                                <div className="flex flex-column gap-8">
                                  <div>
                                    <p>Title → </p>
                                    <h5>{project.name}</h5>
                                  </div>
                                  <div>
                                    <p>Started at →</p>{" "}
                                    <h5>{project.start_date}</h5>
                                  </div>
                                  <div>
                                    <p>Due at →</p>
                                    <h5>{project.due_date}</h5>
                                  </div>
                                  <div>
                                    <p>Status →</p>
                                    <h5>{project.status}</h5>
                                  </div>
                                  <button className="py-4 px-8 color-neutral-deep w-full pointer rds-sm typo-main">
                                    Ver mais +
                                  </button>
                                </div>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default WorkspaceUserCardTestContext;
