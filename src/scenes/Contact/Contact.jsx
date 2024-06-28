import s from "./Contact.module.scss";
import { ReactComponent as FilesIcon } from "../../assets/contact-us.svg";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import Button from "../../components/UIElements/Button/Button";
import EmailManager from "./EmailManager";

const Resume = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <div>
            <p className={s.title}>Contact Me</p>
            <br />
            
            <p className={s.smallText} style={{textAlign:"left"}}>
              You can message me, I will reply within 24 hours.
              <br/>
              I can help you with React, AWS, NodeJS, Python, CI/CD, etc.
            </p>
            <br />
            <br />
            <p className={s.smallText} style={{textAlign:"left"}}>PHONE NUMBER : +1 (669) 232-0529</p>
            <br />      
            <p className={s.smallText} style={{textAlign:"left"}}>EMAIL ID : trevonswain93@gmail.com</p>
            <br />
            <div>
              <p className={s.smallText} style={{textAlign:"left"}}>LOCATION : Remote</p>              
              <br />
              <Button
                style={{ margin: "auto", width: "15rem" }}
                className="primary"
                href="https://www.google.com/maps/place/223+Carolinian+Dr,+Summerville,+SC+29485,+USA/@32.9414784,-80.2138511,17z/data=!3m1!4b1!4m6!3m5!1s0x88fe8eeb35d17c9d:0xd1a58ba941f8a08f!8m2!3d32.9414784!4d-80.2138511!16s%2Fg%2F11c27vh_mw?entry=ttu"
                target="_blank"
              >
                View On Google Maps
              </Button>
            </div>
          </div>
          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>
        <br />
        <br />
      </div>
      <EmailManager style={{ margin: "auto" }} />
    </BaseLayout>
  );
};

export default Resume;
