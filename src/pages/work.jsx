import React from "react";
import "./pages.css"

const Work = () => {
  return (
    <div className="Work">
      <h1>Jobba med Smålands</h1>
      <div className="WorkWrapper">
        <div className="WorkImageWrapper">
          <img src="https://s3-eu-west-1.amazonaws.com/static.wm3.se/sites/537/media/225114_medium_sivans.png" alt="sivans" className="WorkImage" />
        </div>
        <div className="WorkContentWrapper">
          <div className="WorkText">
            <p className="WorkParagraph">
              Var 6:e vecka jobbar Smålands Nation på studentpuben Sivans, då jobbar vi både onsdag och lördag.
            </p>
            <p className="WorkParagraph">
              <strong>Vad innebär det att jobba pub med Smålands?</strong>
            </p>
            <p className="WorkParagraph">
              Förutom att du blir en viktig del i drivandet av studentpuben Sivans så får du dessutom ett halvt jobbkort efter varje jobbtillfälle. Med ett helt jobbkort får du stå i Sivans jobbkö där du slipper stå i vanliga kön. Du får även ta del av Smålands härliga gemenskap.
            </p>
            <p className="WorkParagraph">
              Under jobbtillfället bjuds det på mat, snacks och läsk. Som tack för din insats får du även delta på Smålands efterfesten.
            </p>
            <p className="WorkParagraph">
              I slutet av varje termin hålls det även en jobbsittning som alla som jobbat under terminen får delta på, som ett stort tack från oss i Smålands.
            </p>
            <p className="WorkParagraph">
              <strong>Vill du jobba med oss? Gå med i vår jobbgrupp på Facebook.</strong>
            </p>
            <a href="https://www.facebook.com/groups/684666306026496/?ref=share" target="_blank" rel="noopener noreferrer" className="WorkLink">
              Småländska arbetarklassen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
