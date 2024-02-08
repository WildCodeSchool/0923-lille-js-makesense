import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const DecisionContext = createContext();

export function DecisionProvider({ children }) {
  const [decisionId, setDecisionId] = useState();
  const [decisions, setDecisions] = useState();
  const [deleteDecision, setDeleteDecision] = useState(false);
  const [editedDecisions, setEditedDecisions] = useState();

  const decisionContext = useMemo(
    () => ({
      decisionId,
      setDecisionId,
      decisions,
      setDecisions,
      deleteDecision,
      setDeleteDecision,
      editedDecisions,
      setEditedDecisions,
    }),
    [
      decisionId,
      setDecisionId,
      decisions,
      setDecisions,
      deleteDecision,
      setDeleteDecision,
      editedDecisions,
      setEditedDecisions,
    ]
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.shape({}),
    PropTypes.node,
  ]).isRequired,
};
