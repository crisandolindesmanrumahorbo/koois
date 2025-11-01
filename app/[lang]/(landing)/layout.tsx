import FooterStatic from "./components/FooterStatic";
import Navigation from "./components/Navigation";

type Props = {
  children: React.ReactNode;
};

export default async function Layout(props: Props) {
  return (
    <div className={`min-h-screen flex flex-col`}>
      <Navigation />
      {props.children}
      <FooterStatic />
    </div>
  );
}
