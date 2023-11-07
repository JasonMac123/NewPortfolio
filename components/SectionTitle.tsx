"use client";

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return <h2 className="text-3xl font-medium capitalize mb-8">children</h2>;
};

export default SectionTitle;
