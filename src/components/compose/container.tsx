type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <section className="container mx-auto p-4 flex flex-col sm:flex-row">
      {children}
    </section>
  );
};
