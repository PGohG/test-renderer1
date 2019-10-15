import PropTypes from "prop-types";
import ExamResultsStyles from "./examResultsStyles";
import SubjectGrades from "./subjectGrades";

const ExamResults = ({ certificate }) => (
  <div className="container">
    {/* <ExamResultsStyles />
    */}

    <div className="exam-results-header row">

      <div className="col-2"><strong>MODULE CODE</strong></div>
      <div className="col-6"><strong>MODULE TITLE</strong></div>
      <div className="col-2 credit-unit"><strong>CREDIT EARNED</strong></div>
      <div className="col-2 grade"><strong>GRADE</strong></div>

    </div>

    <SubjectGrades certificate={certificate} />

    <br />

    <div className="row">
      {/* <div className="col-2">&nbsp;</div>
      <div className="col-12 exam-results-footer">
      */}

      <div className="col-3"><strong>GRADE POINT AVERAGE:</strong></div>
      <div className="col-9"><strong>{certificate.cumulativeScore.toFixed(2)}</strong>
      <br />
      </div>

      <div className="col-2"><strong>RESULT:</strong></div>
      <div className="col-10"><strong>{certificate.additionalData.transcriptData.resultStatement}</strong>
      <br />
      </div>

      <div className="col-2"><strong>AWARD:</strong></div>
      <div className="col-10"><strong>{certificate.additionalData.transcriptData.awardStatement}</strong>
      <br />
      </div>

      <div className="col-4"><strong>NATIONAL PHYSICAL FITNESS AWARD:</strong></div>
      <div className="col-8"><strong>{certificate.additionalData.transcriptData.napfaStatement}</strong>
      <br />
      </div>

      <div className="col-4"><strong>CO-CURRICULAR ACTIVITIES GRADE:</strong></div>
      <div className="col-8"><strong>{certificate.additionalData.transcriptData.ccaGrade}</strong></div>
      <div className="col-8"><strong>{certificate.additionalData.transcriptData.ccaAdvantage}</strong>
      <br />
      </div>
    </div>

    <br />
  </div>
);

ExamResults.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default ExamResults;
