import "./Footer.css";
import { FooterData } from "./FooterData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        {FooterData.map((col) => (
          <ul className="fList" key={col.col_number}>
            {col.col_values.map((val, index) => (
              <li key={index} className="fListItem">
                {val}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Footer;
