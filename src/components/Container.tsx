import Head from "next/head";
import { Header } from "./Header";

type ContainerProps = {
  title: string;
};

export const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({ children, title }) => {
  const _title = title + " | SSR Boilerplate";

  return (
    <>
      <Head>
        <title>{_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container p-2 mx-auto min-w-[382px]">
        <div className="flex flex-col">
          <Header />

          {children}
        </div>
      </div>
    </>
  );
};

type ContentProps = {
  className?: string;
  cardClassName?: string;
};
export const Content: React.FC<React.PropsWithChildren<ContentProps>> = ({
  children,
  className,
  cardClassName,
}) => {
  const _className = className ?? "";
  const contentClassName = `mx-auto font-sans w-full sm:w-full md:w-[90%] lg:w-[60%] ${_className}`;

  return (
    <div className={contentClassName}>
      <Card morePY border className={cardClassName}>
        {children}
      </Card>
    </div>
  );
};

type CardProps = {
  className?: string;
  border?: boolean;
  morePY?: boolean;
};
export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  children,
  className,
  border = false,
  morePY = false,
}) => {
  const cardPY = morePY ? "py-4" : "";
  const borderClass = border ? "border border-stone-200" : "";
  const cardClassName = `p-3 rounded-xl shadow-sm ${className} ${borderClass} ${cardPY}`;

  return <div className={cardClassName}>{children}</div>;
};
