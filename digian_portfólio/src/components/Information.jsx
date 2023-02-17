import { FaRegMap, FaRegPaperPlane, FaPhoneAlt } from "react-icons/fa";
import "../styles/components/informations.sass";



function Information() {
  return (
    <section id="informations">

      <div className="info-card">
        <FaPhoneAlt id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(98) 985500094</p>
        </div>
      </div>

      <div className="info-card">
        <FaRegPaperPlane id="email-icon" />
        <div>
          <h3>Email</h3>
          <p>digian.santos@gmail.com</p>
        </div>
      </div>

      <div className="info-card">
        <FaRegMap id="map-icon" />
        <div>
          <h3>Localização</h3>
          <p>São Luis - MA</p>
        </div>
      </div>



    </section>
  );
}

export default Information;
