import Image from "next/image";
import "@styles/auth-page.scss";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="authContainer">
        <div className="authContainer__left">
          <div className="authContainer__left__container">
            <h1 className="authContainer__left__title">
              Find your ideal Gaming Partner here!
            </h1>
            <Image
              className="authContainer__left__image"
              src="/authContainerBackground.jpg"
              alt=""
              width={1920}
              height={1080}
            />
          </div>
        </div>
        <div className="authContainer__right">{children}</div>
      </div>
    </>
  );
}