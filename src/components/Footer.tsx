export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} Mohammed Mazhar Ali Shawon. Crafted with ❤️ and a lot of ☕
      </p>
    </footer>
  );
}
