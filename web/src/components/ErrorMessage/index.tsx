type Props = {
  children: any;
};

export default function AdCard({ children }: Props) {
  return <>{children && <p className="text-[#bf1650] text-xs">⚠ {children}</p>}</>;
}
