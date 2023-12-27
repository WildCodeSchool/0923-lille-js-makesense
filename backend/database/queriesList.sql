/* List of SQL queries we're going to need for this project */

/* savoir si c'est un admin ou non */
SELECT role FROM user
WHERE user_id=?;

/*  page: login
    query for: authentification. Appeler la bdd pour vérifier que le login et le mdp correspondent à un user.
*/
SELECT user.user_id FROM user
JOIN authentification ON user.user_id=authentification.user_id
WHERE user.email=? AND authentification.password=?;

/*  page: nav
    query for: appeler les infos (select) de l'utilisateur (user) dans le dropdown (lastname, firstname, email, location, picture, role)
    query for: changer (update) la photo (picture) de l'utilisateur (user). il faudra stocker les photos dans le backend pour insérer 
        seulement leur adresse dans la BDD.
*/
SELECT lastname, firstname, email, location, picture FROM user
WHERE user_id=?;

UPDATE user 
SET picture=?
WHERE user_id=?;

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

/*  page: decision
    query for: afficher (select) toutes les infos d'une décision (titre, auteur, paragraphs, status, date de création) + les commentaires qui lui sont 
        associés avec les auteurs des commentaires et leur rôle (expert/impacté/visiteur)
    query for: ajouter un commentaire (update, comment) en tant que expert/impacté/visiteur, associer le commentaire à la decision_id
*/

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
    query for: créer un user, updater la table user (firstname, lastname, mai, location, avatar, role) et authentification (password).
*/
