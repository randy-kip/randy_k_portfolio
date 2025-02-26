// Footer Component
const Footer = () => {
    return (
      <footer className="bg-[#1a1a1a] py-8 text-center text-[#d1d1d1]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm mb-4">
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/free-icons/github"
              title="github icons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#915EFF] hover:text-purple-600 transition-all"
            >
              Roundicons
            </a>{" "}
            and{" "}
            <a
              href="https://www.flaticon.com/free-icons/linkedin"
              title="linkedin icons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#915EFF] hover:text-purple-600 transition-all"
            >
              Ruslan Babkin
            </a>{" "}
            from{" "}
            <a
              href="https://www.flaticon.com"
              title="Flaticon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#915EFF] hover:text-purple-600 transition-all"
            >
              www.flaticon.com
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;  