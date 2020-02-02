import React, { Component } from "react";
import src from "./../paint.jpg";
class ModalEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="m-overlay" onClick = {()=>{this.props.toggle(false)}}></div>
        <center>
          <div className="event-modal z-depth-1">
            <img src={src} className="event-modal-pic" />
            <input className="event-rsvp-textbox" placeholder="Email..." />
            <button className="btn btn-default" style={{padding:10}}>Count Me In</button>
            <h2>EVENT TITLE RIGHT HERE</h2>
            <p className="event-modal-txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              quasi rem adipisci harum recusandae inventore repellendus a rerum
              deserunt aut impedit quidem aliquid nulla, ad exercitationem
              veniam similique necessitatibus ullam. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Error quasi rem adipisci harum
              recusandae inventore repellendus a rerum deserunt aut impedit
              quidem aliquid nulla, ad exercitationem veniam similique
              necessitatibus ullam. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Error quasi rem adipisci harum recusandae
              inventore repellendus a rerum deserunt aut impedit quidem aliquid
              nulla, ad exercitationem veniam similique necessitatibus ullam.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
              quasi rem adipisci harum recusandae inventore repellendus a rerum
              deserunt aut impedit quidem aliquid nulla, ad exercitationem
              veniam similique necessitatibus ullam. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Sit obcaecati sunt debitis deserunt
              consequuntur provident recusandae, ex harum nostrum beatae! Dolor,
              similique! Ratione molestiae sequi voluptate hic soluta inventore
              earum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              At, soluta officia. Perspiciatis id voluptatem iste temporibus
              molestias nihil qui officia perferendis, totam obcaecati sunt
              deleniti, aut officiis facilis libero provident. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Fuga harum magnam ab
              suscipit, ipsam quam asperiores pariatur consequuntur
              exercitationem maxime deleniti, minus error culpa! Quia nulla unde
              rem debitis tempora. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Similique accusamus eaque aliquam porro placeat
              vel deleniti perspiciatis eveniet sit in! Debitis ducimus nemo
              laboriosam labore, maiores obcaecati ipsa et voluptas? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Consequatur
              architecto quo sed tenetur eveniet tempore quam unde facilis
              suscipit doloribus itaque, numquam, omnis provident ratione quidem
              mollitia consequuntur, odit distinctio. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Itaque praesentium repudiandae
              obcaecati eum maiores recusandae odio quos sequi! Harum
              consequatur ipsam minus eos, unde quam eveniet velit sapiente
              veritatis quibusdam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cupiditate nihil non sint eius nesciunt quasi
              natus, repudiandae minima incidunt voluptatum commodi officiis
              facilis! Nostrum, iste eaque consectetur quos quibusdam dolor!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              consectetur libero nam, itaque ex accusantium sint saepe placeat
              dolorum molestiae voluptatem eos mollitia labore. Nihil blanditiis
              quo veniam a quisquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea iure et quaerat eos esse dignissimos illo
              ipsum consectetur doloribus fuga modi accusamus, amet explicabo
              eveniet, facilis quidem obcaecati? Minus, quas! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nisi labore libero dicta.
              Nulla earum illo at eos enim iste omnis hic! Provident non cum
              molestiae minus ab excepturi et eveniet. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Sit obcaecati sunt debitis
              deserunt consequuntur provident recusandae, ex harum nostrum
              beatae! Dolor, similique! Ratione molestiae sequi voluptate hic
              soluta inventore earum. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. At, soluta officia. Perspiciatis id voluptatem
              iste temporibus molestias nihil qui officia perferendis, totam
              obcaecati sunt deleniti, aut officiis facilis libero provident.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              harum magnam ab suscipit, ipsam quam asperiores pariatur
              consequuntur exercitationem maxime deleniti, minus error culpa!
              Quia nulla unde rem debitis tempora. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Similique accusamus eaque aliquam
              porro placeat vel deleniti perspiciatis eveniet sit in! Debitis
              ducimus nemo laboriosam labore, maiores obcaecati ipsa et
              voluptas? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Consequatur architecto quo sed tenetur eveniet tempore quam
              unde facilis suscipit doloribus itaque, numquam, omnis provident
              ratione quidem mollitia consequuntur, odit distinctio. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Itaque praesentium
              repudiandae obcaecati eum maiores recusandae odio quos sequi!
              Harum consequatur ipsam minus eos, unde quam eveniet velit
              sapiente veritatis quibusdam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate nihil non sint eius
              nesciunt quasi natus, repudiandae minima incidunt voluptatum
              commodi officiis facilis! Nostrum, iste eaque consectetur quos
              quibusdam dolor! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Earum consectetur libero nam, itaque ex
              accusantium sint saepe placeat dolorum molestiae voluptatem eos
              mollitia labore. Nihil blanditiis quo veniam a quisquam. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ea iure et
              quaerat eos esse dignissimos illo ipsum consectetur doloribus fuga
              modi accusamus, amet explicabo eveniet, facilis quidem obcaecati?
              Minus, quas! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nisi labore libero dicta. Nulla earum illo at eos enim iste
              omnis hic! Provident non cum molestiae minus ab excepturi et
              eveniet. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Sit obcaecati sunt debitis deserunt consequuntur provident
              recusandae, ex harum nostrum beatae! Dolor, similique! Ratione
              molestiae sequi voluptate hic soluta inventore earum. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. At, soluta officia.
              Perspiciatis id voluptatem iste temporibus molestias nihil qui
              officia perferendis, totam obcaecati sunt deleniti, aut officiis
              facilis libero provident. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Fuga harum magnam ab suscipit, ipsam quam
              asperiores pariatur consequuntur exercitationem maxime deleniti,
              minus error culpa! Quia nulla unde rem debitis tempora. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Similique
              accusamus eaque aliquam porro placeat vel deleniti perspiciatis
              eveniet sit in! Debitis ducimus nemo laboriosam labore, maiores
              obcaecati ipsa et voluptas? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Consequatur architecto quo sed
              tenetur eveniet tempore quam unde facilis suscipit doloribus
              itaque, numquam, omnis provident ratione quidem mollitia
              consequuntur, odit distinctio. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Itaque praesentium repudiandae
              obcaecati eum maiores recusandae odio quos sequi! Harum
              consequatur ipsam minus eos, unde quam eveniet velit sapiente
              veritatis quibusdam? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cupiditate nihil non sint eius nesciunt quasi
              natus, repudiandae minima incidunt voluptatum commodi officiis
              facilis! Nostrum, iste eaque consectetur quos quibusdam dolor!
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              consectetur libero nam, itaque ex accusantium sint saepe placeat
              dolorum molestiae voluptatem eos mollitia labore. Nihil blanditiis
              quo veniam a quisquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea iure et quaerat eos esse dignissimos illo
              ipsum consectetur doloribus fuga modi accusamus, amet explicabo
              eveniet, facilis quidem obcaecati? Minus, quas! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nisi labore libero dicta.
              Nulla earum illo at eos enim iste omnis hic! Provident non cum
              molestiae minus ab excepturi et eveniet. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Sit obcaecati sunt debitis
              deserunt consequuntur provident recusandae, ex harum nostrum
              beatae! Dolor, similique! Ratione molestiae sequi voluptate hic
              soluta inventore earum. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. At, soluta officia. Perspiciatis id voluptatem
              iste temporibus molestias nihil qui officia perferendis, totam
              obcaecati sunt deleniti, aut officiis facilis libero provident.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              harum magnam ab suscipit, ipsam quam asperiores pariatur
              consequuntur exercitationem maxime deleniti, minus error culpa!
              Quia nulla unde rem debitis tempora. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Similique accusamus eaque aliquam
              porro placeat vel deleniti perspiciatis eveniet sit in! Debitis
              ducimus nemo laboriosam labore, maiores obcaecati ipsa et
              voluptas? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Consequatur architecto quo sed tenetur eveniet tempore quam
              unde facilis suscipit doloribus itaque, numquam, omnis provident
              ratione quidem mollitia consequuntur, odit distinctio. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Itaque praesentium
              repudiandae obcaecati eum maiores recusandae odio quos sequi!
              Harum consequatur ipsam minus eos, unde quam eveniet velit
              sapiente veritatis quibusdam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate nihil non sint eius
              nesciunt quasi natus, repudiandae minima incidunt voluptatum
              commodi officiis facilis! Nostrum, iste eaque consectetur quos
              quibusdam dolor! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Earum consectetur libero nam, itaque ex
              accusantium sint saepe placeat dolorum molestiae voluptatem eos
              mollitia labore. Nihil blanditiis quo veniam a quisquam. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ea iure et
              quaerat eos esse dignissimos illo ipsum consectetur doloribus fuga
              modi accusamus, amet explicabo eveniet, facilis quidem obcaecati?
              Minus, quas! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nisi labore libero dicta. Nulla earum illo at eos enim iste
              omnis hic! Provident non cum molestiae minus ab excepturi et
              eveniet.
            </p>
          </div>
        </center>
      </div>
    );
  }
}

export default ModalEvents;
