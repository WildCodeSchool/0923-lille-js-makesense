/* List of SQL queries we're going to need for this project */


/*  page: login
(OUTDATED)    query for: authentication. Appeler la bdd pour vérifier que le login et le mdp correspondent à un user. 
*/
SELECT user.user_id FROM user
JOIN authentication ON user.user_id=authentication.user_id
WHERE user.email = ? AND authentication.password = ?;

/*  page: homepage */

/*  FLORENCE    query for: filtrer les décisions qui n'ont pas encore de réponses, 
cad les decision (decision) dont l'id (decision_id) n'est pas présent
        dans la table de commentaires (comment). Toujours besoin de title, status, lieu, nb de commentaires + auteur:  firstname, lastname, picture. */

SELECT
  decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location,
  COUNT(comment.comment_id) AS nb_comments
FROM decision
JOIN user ON decision.user_id = user.user_id
LEFT JOIN comment ON decision.decision_id = comment.decision_id
WHERE comment.comment_id IS NULL
GROUP BY decision.decision_id, decision.decision_title, decision.status, user.firstname, user.lastname, user.picture, user.location;

/*     
FARID   query for: filtrer les décisions qui concernent l'utilisateur en tant qu'auteur (user_id in decision_maker), expert (assignment), impacté (assignment) 
        ou commentateur. Toujours besoin de title, status, lieu, nb de commentaires + 
        auteur: firstname, lastname, picture */

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
HELENE    query for: afficher (select) toutes les infos d'une décision (titre, auteur, paragraphs, status, date de création)
SELECT d.decision_title, d.user_id, d.status, p.paragraph_title, p.paragraph_content
*/
    SELECT decision.decision_date, decision.decision_title, CONCAT(user.firstname,' ', user.lastname) AS name, decision.status, paragraph.paragraph_title, paragraph.paragraph_content
          FROM decision
          INNER JOIN paragraph ON decision.decision_id = paragraph.decision_id
          INNER JOIN user ON decision.user_id = user.user_id
          WHERE decision.decision_id = ?;
 /*
 + les commentaires qui lui sont 
        associés avec les auteurs des commentaires et leur rôle (expert/impacté/visiteur)
 */
 SELECT comment.comment_date_time, user.picture, CONCAT(user.firstname,' ', user.lastname) AS name, assignment.role, comment.comment_content
          FROM comment
          INNER JOIN assignment ON comment.user_id = assignment.user_id
          INNER JOIN user ON comment.user_id = user.user_id
          INNER JOIN decision ON comment.decision_id = decision.decision_id
          WHERE decision.decision_id = ?
          ORDER BY comment.comment_date_time DESC;
/*
HELENE query for: ajouter un commentaire (update, comment) en tant que expert/impacté/visiteur, associer le commentaire à la decision_id
*/

INSERT INTO comment (comment_date_time, comment_content, user_id, decision_id) VALUES (?,?,?,?)


/*  page: create decision
VINCENT    query for: créer une decision, updater la table decision avec les paragraphes. INSERT INTO paragraph le title de chaque paragraphe et son contenu
        (title, contains) associé à un id de decision (decision_id).
        + INSERT INTO pour les rôles d'expert/impacté
VINCENT    query for: updater une décision. SELECT le contenu de la decision par son id, le insert into précédent devient un update qui utilise les id des
        paragraphes (title, contains).
        + les experts et impactés 
FARID    query for: chercher un expert/impacté. Besoin de select tous les firstname et lastname pour ensuite filtrer dessus ?
*/

SELECT user.picture, CONCAT(user.firstname,' ', user.lastname) AS name
FROM user
INNER JOIN assignment ON user.user_id = assignment.user_id
WHERE role = "expert";

SELECT user.picture, CONCAT(user.firstname,' ', user.lastname) AS name
FROM user
INNER JOIN assignment ON user.user_id = assignment.user_id
WHERE role = "impacté";