export const Footer: React.FC = () => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-center gap-4">
        <div className="border border-t border-[#C7BBA2] w-full" />
        <span className="text-black text-base text-nowrap">um produto</span>
        <div className="border border-t border-[#C7BBA2] w-full" />
      </div>
      <div className="flex flex-col md:flex-row items-center w-full justify-center">
        <img src="/logo-observatorio.png" alt="Logo Observatório" />
        <img src="/marcas.png" alt="Logo Observatório" />
      </div>
    </section>
  );
};
