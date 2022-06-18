import React from "react";
import css from "../AdminPanel.module.css";
import cont from "./Content.module.css";

const Content = () => {
  return (
    <div className={css.content}>
      <div className={cont.main}>
        <div className={cont.column1}>
          <div className={cont.card1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, esse
            amet deleniti inventore repellendus voluptates odit et fugit
            repellat iure eos mollitia provident obcaecati veritatis cum dolor
            officia! Dignissimos, deserunt!
          </div>
          <div className={cont.card2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            veritatis itaque placeat ipsam officia, sint libero illo dignissimos
            velit nesciunt? Incidunt dicta fugiat consectetur animi eos soluta
            provident nesciunt ab?
          </div>
        </div>
        <div className={cont.mainCard}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid recusandae enim ratione neque expedita quidem assumenda dolor, aut rem, ex ab eveniet laboriosam veritatis ullam repudiandae tempora nobis. Alias, temporibus!
        </div>
      </div>
      <div className="tfrow"></div>
      <div className={cont.card3}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ex amet, quod doloribus quas rerum. Perspiciatis, quia, facilis unde quas modi est ducimus odit placeat, autem veniam sequi fugit quis?</div>
      <div className={cont.card4}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi cupiditate et earum porro doloremque totam odit nostrum corrupti fuga quidem labore, quod, voluptas quos. Laborum reprehenderit corporis ut aliquid placeat.</div>
      <div className={cont.row}>
        <div className={cont.card5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa dolorem pariatur sit aspernatur aliquid at vero eum. Hic a odit ratione sequi sed inventore libero odio deleniti eaque iusto?</div>
        <div className={cont.card6}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptates odit sunt, vitae illo expedita consequatur ut culpa laboriosam id est rem similique quia facilis illum nemo recusandae, nisi sint.</div>
        <div className={cont.card7}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam dicta incidunt aspernatur ratione adipisci aut sapiente eos rerum, ut suscipit libero omnis minima molestiae error velit odit quia commodi.</div>
      </div>
    </div>
  );
};

export default Content;
