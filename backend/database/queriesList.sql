/* List of SQL queries we're going to need for this project */


/*  page: login
(OUTDATED)    query for: authentication. Appeler la bdd pour vérifier que le login et le mdp correspondent à un user. 
*/
SELECT user.user_id FROM user
JOIN authentication ON user.user_id=authentication.user_id
WHERE user.email = ? AND authentication.password = ?;

/*  page: homepage */

/*     query for: filtrer les décisions qui n'ont pas encore de réponses, cad les decision (decision) dont l'id (decision_id) n'est pas présent
        dans la table de commentaires (comment). Toujours besoin de title, status, lieu, nb de commentaires + auteur:  firstname, lastname, picture. */

SELECT
  decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location,
  COUNT(comment.comment_id) AS nb_comments
FROM decision
JOIN user ON decision.user_id = user.user_id
LEFT JOIN comment ON decision.decision_id = comment.decision_id
WHERE comment.comment_id IS NULL
GROUP BY decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location;

/*     query for: filtrer les décisions qui concernent l'utilisateur en tant qu'auteur (user_id in decision_maker), expert (assignment), impacté (assignment) 
        ou commentateur. Toujours besoin de title, status, lieu, nb de commentaires + 
        auteur: firstname, lastname, picture */

/* query to get all informations on the decisions about one user: where he's referred as decision.user_id, comment.user_id and assignment.user_id. With no doubles. The needed informations are decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location and the number of comments on a decision as nb_comments.
 */
SELECT
  /* DISTINCT assure qu'il n'y a qu'une seule fois la decision
  en théorie on ne devrait pas avoir de doublons mais c'est une sécurité*/
  DISTINCT decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location,
  COUNT(comment.comment_id) AS nb_comments
FROM decision
JOIN user ON decision.user_id = user.user_id
LEFT JOIN assignment ON decision.user_id = assignment.user_id
LEFT JOIN comment ON decision.decision_id = comment.decision_id
WHERE user.user_id = ?
GROUP BY decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location;

/* ou ??? */

SELECT 
    DISTINCT decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location,
    COUNT(comment.comment_id) AS nb_comments
FROM user
JOIN decision ON user.user_id = decision.user_id
LEFT JOIN comment ON decision.decision_id = comment.decision_id
LEFT JOIN assignment ON decision.decision_id = assignment.decision_id
WHERE user.user_id = 3
GROUP BY decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location;

/* aucune des deux ne marchent... */



/*  page: decision
    query for: afficher (select) toutes les infos d'une décision (titre, auteur, paragraphs, status, date de création) + les commentaires qui lui sont 
        associés avec les auteurs des commentaires et leur rôle (expert/impacté/visiteur)
    query for: ajouter un commentaire (update, comment) en tant que expert/impacté/visiteur, associer le commentaire à la decision_id
*/





INSERT INTO comment (decision_id, employee_id, date_time, message)
VALUES (?, ?, ?, ?);


/*  page: create decision
    query for: créer une decision, updater la table decision avec les paragraphes. INSERT INTO paragraph le title de chaque paragraphe et son contenu
        (title, contains) associé à un id de decision (decision_id).
        + INSERT INTO pour les rôles d'expert/impacté
    query for: updater une décision. SELECT le contenu de la decision par son id, le insert into précédent devient un update qui utilise les id des
        paragraphes (title, contains).
        + les experts et impactés 
    query for: chercher un expert/impacté. Besoin de select tous les firstname et lastname pour ensuite filtrer dessus ?
*/

/*  page: create user
    query for: créer un user, updater la table user (firstname, lastname, mai, location, avatar, role) et authentication (password).
*/

/*Il faut le faire en deux queries, ou alors avec une transaction mais je comprends pas bien comment ça fonctionne pour le moment*/
INSERT INTO user (lastname, firstname, email, location, picture, role)
VALUES (?, ?, ?, ?, ?, ?);
INSERT INTO authentication (password, datetime, user_id)
VALUES (?, NOW(), LAST_INSERT_ID());
/*NOW() print un datetime, LAST_INSERT_ID() print le dernier ID auto incrémenté*/
