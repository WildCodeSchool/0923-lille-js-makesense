import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const DecisionContext = createContext();

export function DecisionProvider({ children }) {
  const [decisionId, setDecisionId] = useState();
  const [decisions, setDecisions] = useState();
  const decisionContext = useMemo(
    () => ({ decisionId, setDecisionId, decisions, setDecisions }),
    [decisionId, setDecisionId, decisions, setDecisions]
  );
  return (
    <DecisionContext.Provider value={decisionContext}>
      {children}
    </DecisionContext.Provider>
  );
}

export const useDecisionContext = () => {
  return useContext(DecisionContext);
};

DecisionProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
