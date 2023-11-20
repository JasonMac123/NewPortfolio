interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="text-3xl text-[#0077B6] font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
};

export default SectionTitle;
