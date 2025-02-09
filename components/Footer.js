import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="logo">
        <img className="logo-image" style={{ height: "95px", width: "1000px" }} src="/logo.png" alt="Menu" />
      </div>

      <div>
        <ul className="secondary-navigation">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="socials-list">
          <li>
            <Link href="" target="_blank">
              <FaDiscord />
            </Link>
          </li>
          <li>
            <Link href={"mailto:vishalparikh@nirmauni.ac.in"} target="_blank">
              <MdEmail />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
