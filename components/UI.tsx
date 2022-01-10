export const Article = ({ children }) => {
  return <article className="pt-5 pb-7">{children}</article>;
};

export const Container = ({ children }) => {
  return (
    <div className="ml-[3vw] md:ml-[10vw] mr-auto pl-[10rem] pr-4">
      {children}
    </div>
  );
};
