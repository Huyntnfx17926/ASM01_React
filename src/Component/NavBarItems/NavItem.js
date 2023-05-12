import "./NavItems.css";
const NavItems = (props) => {
  return (
    <div className="nav">
      <div className="navItemContainer">
        <div className="navList">
          {props.navItem.map((navItem, index) => (
            <div
              key={index}
              className={`navListItem ${navItem.active ? "active" : ""}`}
            >
              <span className={"fa " + navItem.icon}></span>
              <span>{navItem.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavItems;
