import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";

const ExemptionFootNote = ({ doc }) => {
  // important to check for ' #'
  // because some subject may contain legitimate # sign, e.g. Programming with C#
  const isPartiallyExempted = _(doc.transcript).some(t =>
    t.name.endsWith(" #")
  );
  const isFullyExempted = _(doc.transcript).some(t =>
    t.name.endsWith(" *")
  );
  const hasExemption = isPartiallyExempted || isFullyExempted;

  return (
    <div className="container">
      <style>
        {`
          .exemption-footnote {
            font-size:0.8em;
          }
        `}
      </style>
      {hasExemption && (
        <div className="exemption-footnote">
          <br />
          Subjects taken under special arrangements are annotated with the
          following symbols:
          {isPartiallyExempted && (
            <span>
              <br /> # The candidate was granted partial exemption from the
              assessment objectives of this subject.
            </span>
          )}
          {isFullyExempted && (
            <span>
              <br /> * The candidate was granted full exemption from the
              assessment objectives of this subject.
            </span>
          )}
        </div>
      )}
    </div>
  );
};

ExemptionFootNote.propTypes = {
  doc: PropTypes.object.isRequired
};

export default ExemptionFootNote;
