import Menu from "./menuApi";
import "./styles.css";
const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-container">
        {menuData.map((curElem) => {
          const {
            id,
            name,
            category,
            image,
            description
          } = curElem; /*de-structuring*/
          return (
            <>
              <div className="card-box" key={id}>
                <div className="card">
                  <span className="card-num card-circle subtle">{id}</span>
                  <span className="card-type subtle">{category}</span>
                  <span className="card-title">{name}</span>
                  <span className="card-desc subtle">{description}</span>
                  <div>
                    <img src={image} alt="images" className="card-media" />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};
export default MenuCard;
