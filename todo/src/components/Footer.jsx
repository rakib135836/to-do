'use client'
const Footer = () => {
  return (
    <footer className="px-4 divide-y text-black relative bottom-0 left-0">
      <div className="py-6 text-sm text-center">
        © {new Date().getFullYear()} . All rights
        reserved .
      </div>
    </footer>
  );
};

export default Footer;
