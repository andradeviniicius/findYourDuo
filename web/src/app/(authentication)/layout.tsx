import "./styles.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="authContainer">
        <div className="authContainer__left">left</div>
        <div className="authContainer__right">{children}</div>
      </div>
    </>
  );
}
