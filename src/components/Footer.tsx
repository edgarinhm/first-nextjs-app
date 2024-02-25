export default function Footer() {
  const date = new Date();
  return (
    <footer className="text-white z-10">
      <small className="flex justify-end pr-10">
        &copy;Company Poweredge {date.getFullYear()}
      </small>
    </footer>
  );
}
