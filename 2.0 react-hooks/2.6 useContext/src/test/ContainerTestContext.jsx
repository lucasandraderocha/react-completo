const ContainerTestContext = ({ children }) => {
  return (
    <div className="py-8 px-8 w-full flex flex-column gap-8 brd-sm rds-sm">
      {children}
    </div>
  );
};

export default ContainerTestContext;
