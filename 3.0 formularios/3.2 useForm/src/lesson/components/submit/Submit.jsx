const Submit = ({ children, ...props }) => {
  return (
    <button type="submit" {...props}>
      {children}
    </button>
  );
};

export default Submit;
