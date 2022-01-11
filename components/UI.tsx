export const Article = ({ children }) => {
  return <article className="pt-20 pb-12">{children}</article>;
};

export const Container = ({ children }) => {
  return (
    <div className="ml-[3vw] md:ml-[10vw] mr-auto pl-[10rem] pr-4">
      {children}
    </div>
  );
};
