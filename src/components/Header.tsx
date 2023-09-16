interface HeaderProps {
  title: string
}
export const Header = ({ title }:HeaderProps) => {
  return <h1 data-testid="header">{title} 🤙</h1>;
};
