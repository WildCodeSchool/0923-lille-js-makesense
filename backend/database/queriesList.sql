/* List of SQL queries we're going to need for this project */

/* savoir si c'est un admin ou non, role??? */
/* SELECT role FROM user
WHERE user_id = ?; */

/*  page: login
    query for: authentication. Appeler la bdd pour vérifier que le login et le mdp correspondent à un user.
*/
SELECT user.user_id FROM user
JOIN authentication ON user.user_id=authentication.user_id
WHERE user.email = ? AND authentication.password = ?;

/*  page: nav
    query for: appeler les infos (select) de l'utilisateur (user) dans le dropdown (lastname, firstname, email, location, picture, role)
    query for: changer (update) la photo (picture) de l'utilisateur (user). il faudra stocker les photos dans le backend pour insérer 
        seulement leur adresse dans la BDD.
*/
SELECT lastname, firstname, email, location, picture FROM user
WHERE user_id = ?;

UPDATE user 
SET picture = ?
WHERE user_id = ?;

/*  page: homepage
    query for: filtrer les décisions (decision (title, status, lieu, nb de commentaires + auteur:  firstname, lastname, picture) en attente, 
        decisions dont le status = en cours. 
    query for: filtrer les décisions qui n'ont pas encore de réponses, cad les decision (decision) dont l'id (decision_id) n'est pas présent
        dans la table de commentaires (comment). Toujours besoin de title, status, lieu, nb de commentaires + auteur:  firstname, lastname, picture.
    query for: filtrer toutes les décisions (decision) publiées sur la plateforme (title, status, firstname, lastname, picture,
        lieu: decision_maker_id>decision_maker>user_id>user>location, commentaires: trouver le nombre d'occurences du decision_id dans comment)
    query for: filtrer les décisions qui concernent l'utilisateur en tant qu'auteur (user_id in decision_maker), expert (assignment), impacté (assignment) 
        ou commentateur (employee_id/admin_id = user_id à associer avec decision_id). Toujours beoin de title, status, lieu, nb de commentaires + 
        auteur: firstname, lastname, picture
*/

/* SELECT decision.decision_id, decision.title, decision.status, user.firstname, user.lastname AS author_lastname, user.picture AS author_picture, user.location, COUNT(comment.comment_id) AS nb_comments
FROM decision
JOIN decision_maker ON decision.decision_maker_id = decision_maker.decision_maker_id
JOIN user ON decision_maker.user_id = user.user_id
LEFT JOIN comment ON decision.decision_id = comment.decision_id
WHERE decision.status = 'en cours'
GROUP BY decision.decision_id, decision.title, decision.status, user.firstname, user.lastname, user.picture, user.location; */

SELECT
  decision.decision_id,
  decision.title,
  decision.status,
  user.firstname,
  user.lastname,
  user.picture,
  user.location,
  COUNT(comment.comment_id) AS nb_comments
FROM decision
JOIN decision_maker ON decision.decision_maker_id = decision_maker.decision_maker_id
JOIN user ON decision_maker.user_id = user.user_id
LEFT JOIN comment ON decision.decision_id = comment.decision_id
WHERE decision.status = 'en cours' OR comment.comment_id IS NULL
GROUP BY
  decision.decision_id,
  decision.title,
  decision.status,
  user.firstname,
  user.lastname,
  user.picture,
  user.location;

SELECT
  DISTINCT decision.decision_id,
  /* DISTINCT assure qu'il n'y a qu'une seule fois la decision
  en théorie on ne devrait pas avoir de doublons mais c'est une sécurité*/
  decision.title,
  decision.status,
  user.firstname,
  user.lastname,
  user.picture,
  user.location,
  COUNT(comment.comment_id) AS nb_comments
FROM decision
JOIN decision_maker ON decision.decision_maker_id = decision_maker.decision_maker_id
JOIN user ON decision_maker.user_id = user.user_id
LEFT JOIN assignment ON decision.decision_maker_id = assignment.decision_maker_id
LEFT JOIN employee ON assignment.employee_id = employee.employee_id
LEFT JOIN comment ON decision.decision_id = comment.decision_id
WHERE user.user_id = ?
GROUP BY
  decision.decision_id,
  decision.title,
  decision.status,
  user.firstname,
  user.lastname,
  user.picture,
  user.location;


/*  page: decision
    query for: afficher (select) toutes les infos d'une décision (titre, auteur, paragraphs, status, date de création) + les commentaires qui lui sont 
        associés avec les auteurs des commentaires et leur rôle (expert/impacté/visiteur)
    query for: ajouter un commentaire (update, comment) en tant que expert/impacté/visiteur, associer le commentaire à la decision_id
*/

SELECT
  decision.decision_id,
  decision.title,
  decision.status,
  decision.date,
  user.firstname AS author_firstname,
  user.lastname AS author_lastname,
  user.role AS author_role,
  paragraph.paragraph_id,
  paragraph.title AS paragraph_title,
  paragraph.contains AS paragraph_content,
  comment.comment_id,
  comment.date_time AS comment_date,
  comment.message AS comment_message,
  comment_user.firstname AS comment_author_firstname,
  comment_user.lastname AS comment_author_lastname,
  comment_user.role AS comment_author_role
FROM decision
JOIN decision_maker ON decision.decision_maker_id = decision_maker.decision_maker_id
JOIN user ON decision_maker.user_id = user.user_id
LEFT JOIN paragraph ON decision.decision_id = paragraph.decision_id
LEFT JOIN comment ON decision.decision_id = comment.decision_id
LEFT JOIN user AS comment_user ON comment.employee_id = comment_user.user_id OR comment.admin_id = comment_user.user_id
WHERE decision.decision_id = ?;

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
NSERT INTO authentication (password, datetime, user_id)
VALUES (?, NOW(), LAST_INSERT_ID());
/*NOW() print un datetime, LAST_INSERT_ID() print le dernier ID auto incrémenté*/
