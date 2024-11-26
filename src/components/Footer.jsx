import React from 'react';
import "../styles/footer.css"
const Footer = () => {
  return (
    <footer className="custom-footer">
      <p>&copy; {new Date().getFullYear()} 西安科技大学校软件实验室版权所有。</p>
    </footer>
  );
};

export default Footer;